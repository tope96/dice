import React,{useEffect, useState} from "react";

const GetRandomValues = ({dicesValues}) => {

    const [randomValues, setRandomValues] = useState('')
    const [number, setNumber] = useState(0)

    const getRandom = () => {
        let randomSentence = ""

        for (let dice in dicesValues){
            dice = dicesValues[dice]

            if(dice.isActive){
                if(dice.values.length === 0){
                    randomSentence = ''
                } else {
                    let allNonEmptyValues = dice.values.filter(function (el) {
                        return el !== "";
                    });

                    randomSentence += (allNonEmptyValues[Math.floor(Math.random() * allNonEmptyValues.length)]) + " "
                    setNumber(number+1)
                }
            }
            setRandomValues(randomSentence)
        }
    }


    return(
        <div className={'row randomize-area'}>
            <div className={'col'}>
                <button className={'btn '} onClick={getRandom}><i className="fas fa-dice dice-icon"></i></button>
                <div className={'row'}>
                    <div className={'col'}>
                        <p>Liczba rzutów: {number}</p>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col'}>
                        <p className={"result"}>{randomValues}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetRandomValues
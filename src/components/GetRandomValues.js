import React, {useEffect, useState} from "react";
import '../style/style.css'

const GetRandomValues = ({dicesValues, setNumber, number}) => {

    const [randomValues, setRandomValues] = useState('')

    useEffect(() => {
        if(number === 0){
            setRandomValues('')
        }
    },[number])

    const getRandom = () => {
        let randomSentence = ""

        for (let dice in dicesValues){
            dice = dicesValues[dice]

            if(dice.isActive){
                if(dice.values.length === 0){
                    randomSentence = ''
                    return
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
                <button className={'btn '} onClick={getRandom} data-tooltip={"Rzuć kością"}><i className="fas fa-dice dice-icon"/></button>
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
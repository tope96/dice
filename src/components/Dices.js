import React, {useState, useEffect} from 'react'
import Input from "./Input";
import GetRandomValues from "./GetRandomValues";
import DefaultsDice from "./DefaultsDice";

const Dices = () => {

    const emptyDice = {values: "", isActive: true}
    const [dices, setDices] = useState(JSON.parse(localStorage.getItem("dices")) || emptyDice)

    useEffect(() => {
        localStorage.setItem("dices", JSON.stringify(dices))
    },[dices])

    const createEmptyDice = () => {
        setDices([...dices, emptyDice])
    }

    const updateDice = (index, newValue) => {
        let newValues = [...dices]
        newValues[index] = newValue
        if(newValues[index].values.length !== 0 && !Array.isArray(newValues[index].values)){
            newValues[index].values = newValues[index].values.split(',')
        }

        setDices(newValues)
    }

    const deleteDice = (index) => {
        if(dices.length-1 === 0){
            return
        }
        let newValueList = [...dices]
        newValueList.splice(index, 1)
        setDices(newValueList)
    }

    return(
        <div className={'dices-area'}>

            <DefaultsDice setDices={setDices}/>

            {dices.map((value, index) => {
                return <Input dice={value} index={index} updateDice={updateDice} deleteDice={deleteDice}/>
            })}

            <button className={'btn btn-outline-success'} onClick={() => {createEmptyDice()}}>Dodaj kość <i className="fas fa-plus"></i></button>

            <GetRandomValues dicesValues={dices}/>
        </div>
    )
}

export default Dices
import React, {useState} from 'react'
import Input from "./Input";

const Dices = () => {

    const emptyDice = {values: "", isActive: ""}
    const [dices, setDices] = useState([emptyDice])

    const createEmptyDice = () => {
        setDices([...dices, emptyDice])
    }

    const updateDice = (index, newValue) => {
        let newValues = [...dices]
        newValues[index] = newValue
        setDices(newValues)
    }

    const deleteDice = (index) => {
        console.log(index)
        let newValueList = [...dices]
        newValueList.splice(index, 1)
        console.log(newValueList)
        setDices(newValueList)
    }

    return(
        <div>

            {dices.map((value, index) => {
                return <Input dice={value} index={index} updateDice={updateDice} deleteDice={deleteDice}/>
            })}

            <button className={'btn btn-success'} onClick={() => {createEmptyDice()}}>Dodaj kostke</button>
        </div>
    )
}

export default Dices
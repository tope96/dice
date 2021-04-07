import React, {useState, useEffect} from 'react'

const Input = ({dice, index, updateDice, deleteDice}) => {
    const [newValueDice, setNewValueDice] = useState(dice)

    useEffect(() => {
        updateDice(index, newValueDice)
    }, [newValueDice])

    useEffect(() => {
        setNewValueDice(dice)
    }, [dice])

    return(
        <div className={'row'}>
            <div className={'col'}>
                <input
                    type={'text'}
                    value={newValueDice.values}
                    onChange={(e) => {
                        setNewValueDice({...newValueDice, values: e.target.value})
                    }}
                />
            </div>
            <div className={'col'}>
                <input
                    type={'checkbox'}
                    onChange={(e) => {
                        setNewValueDice({...newValueDice, isActive: e.target.checked})
                    }}
                />
            </div>
            <div className={'col'}>
                <button type={"btn btn-warning"} onClick={() => deleteDice(index)}>Usun</button>
            </div>
        </div>
    )
}

export default Input
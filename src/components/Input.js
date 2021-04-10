import React, {useState, useEffect} from 'react'
import '../style/style.css'

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
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <input
                                type={'checkbox'}
                                onChange={(e) => {
                                    setNewValueDice({...newValueDice, isActive: e.target.checked})
                                }}
                                data-tooltip={"Aktywacja/deaktywacja kości"}
                                checked={newValueDice.isActive}
                            />
                        </div>
                    </div>
                    <input
                        className={'form-control'}
                        type={'text'}
                        aria-label="Dice values"
                        placeholder={'Wpisz wartości oddzielone przecinkiem'}
                        value={newValueDice.values}
                        onChange={(e) => {
                            setNewValueDice({...newValueDice, values: e.target.value})
                        }}
                    />
                    <div className="input-group-append">
                        <div className="input-group-text">
                            <a onClick={() => deleteDice(index)} data-tooltip={"Usuń kość"}><i className="fas fa-trash trash-icon"></i></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Input
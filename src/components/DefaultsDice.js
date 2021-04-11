import React from "react";
import dice from "../defaultDice/defaultDice"

const DefaultDice = ({setDices}) => {

    const getDice = (typeOfDice) => {
        if(typeOfDice === "normal"){
            setDices(dice.normal)
        } else if (typeOfDice == "dnd"){
            setDices(dice.dnd)
        } else if (typeOfDice === "monopoly"){
            setDices(dice.monopoly)
        }
    }

    return(
        <div className={'row default-dice-container'}>
            <div className={'col'}>
                <button className={'btn btn-outline-secondary button-margin default-dice'} onClick={() => getDice('normal')} data-tooltip={"Załaduj kostkę"}>Zwykła kostka</button>
                <button className={'btn btn-outline-secondary button-margin default-dice'} onClick={() => getDice('dnd')} data-tooltip={"Załaduj kostkę"}>D&D</button>
                <button className={'btn btn-outline-secondary button-margin default-dice'} onClick={() => getDice('monopoly')} data-tooltip={"Załaduj kostkę"}>Monopoly</button>
            </div>
        </div>
    )
}

export default DefaultDice;
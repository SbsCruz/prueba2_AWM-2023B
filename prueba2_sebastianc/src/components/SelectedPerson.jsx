import React, { useState } from 'react'


export const SelectedPerson = ({ updateAge, name, age, avatarURL }) => {

    const handlerAge = () => {
        updateAge(age)
    }

    return (
        <>
            <div className='selectedCard'>
                <h2>Selected Person Card</h2>
                <div className='allowed'>
                    <img src={avatarURL} alt="pfp" />
                    <h3>{name}</h3>
                    <h3>{age}</h3>
                    <div className='btnSelect'>
                        <button onClick={handlerAge}>Increase Age</button>
                    </div>
                </div>
            </div>
        </>
    )
}

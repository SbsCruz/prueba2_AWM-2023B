import React from 'react'

export const PersonCardList = ({newage, selectCard, avatarURL, age, name, city, country, address }) => {

    const handlerSelect = () => {
        selectCard(name, avatarURL,age)
    }

    return (
        <div className='card'> 
            <img src={avatarURL} alt="pfp" />
            <h3>{name}</h3>
            <h4>{`${city},${country}`}</h4>
            <h5>{address}</h5>
            <h3>{age}</h3>
            <h3>{newage}</h3>
            <div className='btnSelect'>
                <button onClick={handlerSelect}>Select</button>
            </div>
        </div>
    )
}

export default PersonCardList;

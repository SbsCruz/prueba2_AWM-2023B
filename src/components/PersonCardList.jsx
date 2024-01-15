import React from 'react'

export const PersonCardList = ({ selectCard, lista }) => {


    const handlerSelect = (name, url, id) => {
        selectCard(name, url, id)
    }

    return (
        <>
            <div className='allowed'>
                <h2>Allowed</h2>
                {
                    lista.map((person) => person.age >= 18 ? (
                        <div key={person.id} className='card'>
                            <img src={person.avatarURL} alt="pfp" />
                            <h3>{person.name}</h3>
                            <h4>{`${person.city},${person.country}`}</h4>
                            <h5>{person.address}</h5>
                            <h3>{person.age}</h3>
                            <div className='btnSelect'>
                                <button onClick={() => handlerSelect(person.name, person.avatarURL, person.id)}>Select</button>
                            </div>
                        </div>
                    ) : null)
                }
            </div>
            <div className='allowed'>
                <h2>Allowed</h2>
                {
                    lista.map((person) => person.age < 18 ? (
                        <div key={person.id} className='card'>
                            <img src={person.avatarURL} alt="pfp" />
                            <h3>{person.name}</h3>
                            <h4>{`${person.city},${person.country}`}</h4>
                            <h5>{person.address}</h5>
                            <h3>{person.age}</h3>
                            <div className='btnSelect'>
                                <button onClick={() => handlerSelect(person.name, person.avatarURL, person.id)}>Select</button>
                            </div>
                        </div>
                    ) : null)
                }
            </div>
        </>
    );

}

export default PersonCardList;

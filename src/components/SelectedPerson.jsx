
export const SelectedPerson = ({ updateAge, name, id, avatarURL }) => {

    const handlerAge = (idUpdate) => {
        updateAge(idUpdate)
    }

    return (
        <>
            <div className='selectedCard'>
                <h2>Selected Person Card</h2>
                <div className='allowed'>
                    <img src={avatarURL} alt="pfp" />
                    <h3>{name}</h3>
                    <div className='btnSelect'>
                        <button onClick={() => handlerAge(id)}>Increase Age</button>
                    </div>
                </div>
            </div>
        </>
    )
}

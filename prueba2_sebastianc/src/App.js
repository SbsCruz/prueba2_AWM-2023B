import './App.css';
import { PersonCardList } from './components/PersonCardList';
import { SelectedPerson } from './components/SelectedPerson';
import { personListData } from './data/data';
import { useState } from 'react';



function App() {

  const [name, setName] = useState("");
  const [avatarURL, setAvatarURL] = useState("");
  const [age, setAge] = useState()

  const selectCard = (newName, newAvatarURL, age) => {
    setName(newName)
    setAvatarURL(newAvatarURL)
    setAge(age)
  }
  const updateAge = (newAge)=>{
    setAge(newAge+1)
  }

  return (
    <div className="App">
      <h1>Cinefest Manager</h1>

      <div className='container'>

        <div className='allowed'>
          <h2>Allowed</h2>
        {personListData.map((person, index) => person.age > 18 ? (
          <PersonCardList selectCard={selectCard} key={index} avatarURL={person.avatarURL} name={person.name} newage={age} age={person.age} city={person.city} country={person.country} address={person.address} />
          
          ) : null
          )}
            </div>

            <div className='disallowed'>
          <h2>Disallowed</h2>
        {personListData.map((person, index) => person.age < 18 ? (
            <PersonCardList selectCard={selectCard} key={index} avatarURL={person.avatarURL} name={person.name} newage={age} age={person.age} city={person.city} country={person.country} address={person.address} />
            
            ) : null
            )}
            </div>
      </div>


      <SelectedPerson updateAge={updateAge} avatarURL={avatarURL} name={name} age={age}/>
    </div>
  )
}

export default App;

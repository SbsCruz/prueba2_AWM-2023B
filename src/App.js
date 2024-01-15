import './App.css';
import { PersonCardList } from './components/PersonCardList';
import { SelectedPerson } from './components/SelectedPerson';
import { personListData } from './data/data';
import { useState } from 'react';



function App() {

  const [name, setName] = useState("");
  const [avatarURL, setAvatarURL] = useState("");
  const [lista, setLista] = useState(personListData)
  const [id, setId] = useState()

  const selectCard = (newName, newAvatarURL, id) => {
    setName(newName)
    setAvatarURL(newAvatarURL)
    setId(id)
  }


  const updateAge = (id) => {
    setLista(prevLista => {
      const updatedList = [...prevLista]; // Clona la lista
      updatedList[id - 1].age += 1;       // Modifica directamente la edad de la persona específica
      return updatedList;                 // Establece la lista actualizada como nuevo estado
    });
  };

  return (
    <div className="App">
      <h1>Cinefest Manager</h1>

      <div className='container'>
        <PersonCardList selectCard={selectCard} lista={lista} />
      </div>
      <SelectedPerson updateAge={updateAge} avatarURL={avatarURL} name={name} id={id} />
    </div>
  )

}
export default App;

import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    const phoneBookName = {
      name: newName
    }

    setPersons(persons.concat(phoneBookName))
    setNewName('')
  }

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input 
          value={newName}
          onChange={handleNewName}
          />
          <div>debug: {newName}</div>
        </div>
        <div>
          <button onClick={addPerson}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {
          persons.map(person => <div key={person.name}>{person.name}</div>)
        }
      </div>
    </div>
  )
}

export default App
import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    const phoneBookName = {
      name: newName,
      number: newNumber
    }

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    setPersons(persons.concat(phoneBookName))
    setNewName('')
    setNewNumber('')
  }

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
          value={newName}
          onChange={handleNewName}
          />
          <div>debug: {newName}</div>
        </div>
        <div>
          number: <input 
          value = {newNumber}
          onChange={handleNewNumber}
          />
        </div>
        <div>debug: {newNumber}</div>
        <div>
          <button>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {
          persons.map(person => <div key={person.name}>{person.name} {person.number}</div>)
        }
      </div>
    </div>
  )
}

export default App
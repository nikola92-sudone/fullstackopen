import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, filterState] = useState('')

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

  const filterWord = (event) => {
    filterState(event.target.value)
  }

  const filterName = (persons) => {
    return persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input 
        value={filter}
        onChange={filterWord}
        />
        debug: {filter}
      </div>
      <form onSubmit={addPerson}>
        <h2>add a new</h2>
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
          filterName(persons).map(person => <div key={person.name}>{person.name} {person.number}</div>)
        }
      </div>
    </div>
  )
}

export default App
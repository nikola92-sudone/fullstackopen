import { useState } from 'react'

const Filter = ({ filter, filterWord }) => {
  return (
    <div>
      filter shown with{' '}
      <input
        value={filter}
        onChange={filterWord}
      />
    </div>
  )
}

const AddPerson = ({newName, handleNewName, newNumber, handleNewNumber}) => {
  return (
    <div>
      <div>
        name: {' '}
        <input 
        value={newName}
        onChange={handleNewName}
        />
      </div>
      <div>
        number: {' '}
        <input 
        value={newNumber}
        onChange={handleNewNumber}
        />
      </div>
    </div>
  )
}

const FilteredPersons = (props) => {
  return (
    <div>
      {
        props.persons.map(person => <div key={person.name}>{person.name} {person.number}</div>)
      }
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

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
    setFilter(event.target.value)
  }

  const filteredPersons = (persons) => {
    return persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
  }

  const peopleToShow = filteredPersons(persons)

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        filter={filter}
        filterWord={filterWord}
      />
      <form onSubmit={addPerson}>
        <h2>add a new</h2>
        <AddPerson 
          newName={newName}
          handleNewName={handleNewName}
          newNumber = {newNumber}
          handleNewNumber={handleNewNumber}
          />
        <div>
          <button>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <FilteredPersons persons={peopleToShow} />
    </div>
  )
}

export default App
const Persons = ({ persons, filter }) => {
    return (
        <div>
        {persons
          .filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
          .map(person => (
            <div key={person.id}>
              {person.name} {person.number}
            </div>
          ))}
      </div>
    )
}

export default Persons

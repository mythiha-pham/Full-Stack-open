import { useState, useEffect } from 'react'
import countriesService from './services/countries'
import Filter from './components/Filter'
import Country from './components/Country'
import SearchResult from './components/SeachResult'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
    countriesService
      .getAll()
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
    setSelectedCountry(null)
  }

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  )

  const showCountry = (country) => {
    setSelectedCountry(country)
  }

  return (
    <div>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      {filter && <SearchResult countries={filteredCountries} showCountry={showCountry} />}
      {selectedCountry && <Country country={selectedCountry} />}
    </div>
  )
}


export default App
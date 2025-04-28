import Country from "./Country"

const SearchResult = ({ countries, showCountry }) => {
    if (countries.length > 10) {
        return <p>Too many matches, specify another filter</p>
    }

    if (countries.length === 1){
        return <Country country={countries[0]} />
    }

    if (countries.length > 1) {
        return (
            <ul>
                {countries.map(country => (
                    <li key={country.name.common}>
                        {country.name.common} 
                        <button onClick={() => showCountry(country)}>Show</button>
                    </li>
                ))}
            </ul>
        )
    }
    
    return <p>No countries found</p>
}

export default SearchResult
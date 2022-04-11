import CountryList from "./components/CountryList";
import countryData from "./country-data.json";
import { ICountry } from "./types";

const App = () => {
  const countries: ICountry[] = countryData.map((country) => ({
    name: country.name.common,
    capital: country.capital[0],
    region: country.region,
    flags: country.flags.svg,
    population: country.population,
    area: country.area,
  }));

  return (
    <div className="container">
      <h1 className="py-4">Country List</h1>
      <CountryList countries={countries} />
    </div>
  );
};

export default App;

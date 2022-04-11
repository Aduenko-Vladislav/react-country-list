import { ICountry, Color } from "./../types";
import Badge from "./Badge";

const CountryItem = ({
  flags,
  name,
  capital,
  region,
  area,
  population,
}: ICountry) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <img className="col-lg-1 float-left" src={`${flags}`} alt="flag" />
      <span className="col-2 mx-5 text-left">{name}</span>
      <span className="col-2 text-left">{capital}</span>
      <span className="col-2 text-left">{region}</span>
      <Badge color={Color.Primary} type={"area"} value={area} />
      <Badge color={Color.Secondary} type={"population"} value={population} />
    </li>
  );
};

export default CountryItem;

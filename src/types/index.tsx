 interface ICountry {
  area: number;
  capital: string;
  name: string;
  population: number;
  flags: string;
  region: string;
}

 const enum Color {
  Primary = "primary",
  Secondary = "secondary",
  Success = "success",
  Info = "info",
  Warning = "warning",
  Danger = "danger",
  Light = "light",
  Dark = "dark",
}

 type BadgeLabel = "area" | "population";

export { Color };
export type { ICountry, BadgeLabel };

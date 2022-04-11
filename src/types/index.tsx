export interface ICountry {
  area: number;
  capital: string;
  name: string;
  population: number;
  flags: string;
  region: string;
}

export const enum Color {
  Primary = "primary",
  Secondary = "secondary",
  Success = "success",
  Info = "info",
  Warning = "warning",
  Danger = "danger",
  Light = "light",
  Dark = "dark",
}

export type BadgeLabel = "area" | "population";

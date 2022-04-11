import { Color, BadgeLabel } from "./../types";
interface IBadge {
  color: Color;
  type: BadgeLabel;
  value: Number;
}

const Badge = ({ color, type, value }: IBadge) => {
  return (
    <span className={` badge py-3 mx-1 col-2 bg-${color}`}>
      {type}: {value}
    </span>
  );
};

export default Badge;

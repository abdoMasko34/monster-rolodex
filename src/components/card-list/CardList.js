import "./card-style.css";
import Card from "../card/Card";
const CardList = (props) => {
  const monsters = props.monsters;
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <Card monster={monster} key={monster.id} />
      ))}
    </div>
  );
};

export default CardList;

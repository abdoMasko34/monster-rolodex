const Card = (props) => {
  const monster = props.monster;
  return (
    <div className="card">
      <img
        src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
        alt={monster.url}
        className="card-img-top"
      />
      <h2 className="card-title">{monster.name}</h2>
      <h5 className="card-subtitle">{monster.email}</h5>
    </div>
  );
};

export default Card;

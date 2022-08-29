import React from "react";
import "./App.css";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/filter/SearchBox";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((res) => this.setState({ monsters: res }));
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="app">
        <h1 className="header">Monster Rolodex</h1>
        <SearchBox
          placeholder={"seach"}
          handleChanges={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;

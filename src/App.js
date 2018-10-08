import React, { Component } from "react";
import CategoryCreation from "./CategoryCreation";
import AddGood from "./AddGood";
import ShowCase from "./ShowCase";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: {},
      goods: []
    };
  }
  onAddNewCategory = newCategory => {
    this.setState(prevState => {
      const newState = {
        ...prevState.categories,
        ...newCategory
      };
      return {
        categories: newState
      };
    });
  };

  onAddNewGood = newGood => {
    this.setState(prevState => {
      const goods = prevState.goods;
      goods.push(newGood);
      return {
        goods
      };
    });
  };

  render() {
    return (
      <div className="App">
        <div className="columns">
          <div className="column">
            <CategoryCreation onAddNewCategory={this.onAddNewCategory} />{" "}
          </div>
          <div className="column">
            <AddGood
              onAddNewGood={this.onAddNewGood}
              categories={this.state.categories}
            />
          </div>
          <div className="column">
            <ShowCase goods={this.state.goods} />{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

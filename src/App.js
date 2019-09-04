// this project is from youtube. below is the link
// api we used is from food2fork
// https://www.youtube.com/watch?v=MQVdgu8cpqU&list=WL&index=68&t=5259s

// IF APP DOESN'T WORK THAT MAY BE PROBLEM WITH API CALL LIMITATION I.E ONLY 50 PER DAY
// IF IT EXCEEDS WE HAVE TO WAIT UNTIL NEXT DAY
// SO IF ANYTHING DOES NOT WORK
// PLEASE CHECK BELOW URL IN BROWSER
//https://www.food2fork.com/api/search?key=c0984330b96e6e9ef4383ed7d8a07d65&q=chicken
// WILL THROW ERROR LIMIT error

import React, { Component } from "react";
import "./App.css";
import { recipes } from "./tempList";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";

class App extends Component {
  state = {
    recipes: recipes,
    url:
      "https://www.food2fork.com/api/search?key=c0984330b96e6e9ef4383ed7d8a07d65",
    base_url:
      "https://www.food2fork.com/api/search?key=c0984330b96e6e9ef4383ed7d8a07d65",
    details_id: "",
    pageIndex: 1,
    search: "",
    query: "&q=",
    error: ""
  };

  // Since the food2fork api call works 50 times a single day
  // we are actually creating a mock of that api and calling
  // the data from that and developing the app.

  componentDidMount() {
    this.getRecipes();
  }

  async getRecipes() {
    try {
      const res = await fetch(this.state.url);
      const data = await res.json();
      console.log(data.recipes);
      if (data.recipes.length === 0) {
        this.setState(() => {
          return {
            error: "Sorry,but your search didn't find any results"
          };
        });
      } else {
        this.setState({ recipes: data.recipes });
      }
    } catch (err) {
      console.log(err);
    }
  }

  displayPage = index => {
    switch (index) {
      default:
      case 1:
        return (
          <RecipeList
            recipes={this.state.recipes}
            handleDetails={this.handleDetails}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            value={this.state.search}
            error={this.state.error}
          />
        );
      case 0:
        return (
          <RecipeDetails
            id={this.state.details_id}
            handleIndex={this.handleIndex}
          />
        );
    }
  };

  handleIndex = index => {
    this.setState({ pageIndex: index });
  };

  handleDetails = (index, id) => {
    this.setState({
      pageIndex: index,
      details_id: id
    });
  };
  handleChange = e => {
    this.setState({ search: e.target.value }, () =>
      console.log(this.state.search)
    );
  };
  handleSubmit = e => {
    e.preventDefault();
    const { base_url, query, search } = this.state;
    this.setState(
      () => {
        return {
          url: `${base_url}${query}${search}`,
          search: ""
        };
      },
      () => {
        this.getRecipes();
      }
    );
  };
  render() {
    console.log(this.state.pageIndex);
    return (
      <React.Fragment>{this.displayPage(this.state.pageIndex)}</React.Fragment>
    );
  }
}

export default App;

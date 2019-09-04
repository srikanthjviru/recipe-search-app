import React, { Component } from "react";
import { recipe } from "../tempDetails";
class RecipeDetails extends Component {
  //     constructor(props){
  //         super(props);
  //         this.state={
  //             recipe: recipe,
  //             url:`https://www.food2fork.com/api/get?key=c0984330b96e6e9ef4383ed7d8a07d65&rId=${this.props.id}`
  //         }
  //     }

  //    async componentDidMount(){
  //           try {
  //               console.log(this.state.url)
  //             const res = await fetch(this.state.url);
  //             const data = await res.json();
  //             this.setState({recipe: data.recipe})
  //             console.log("data",data.recipe)
  //           } catch(err){
  //             console.log(err)
  //           }
  //     }

  state = {
    recipe: recipe
  };
  async componentDidMount() {
    const id = this.props.id;
    console.log(id);
    const url = `https://www.food2fork.com/api/get?key=c0984330b96e6e9ef4383ed7d8a07d65&rId=${id}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      this.setState(
        (state, props) => {
          return { recipe: data.recipe };
        },
        () => {}
      );
    } catch (err) {
      console.log("API failed :(", err);
    }
  }
  render() {
    const {
      image_url,
      publisher,
      publisher_url,
      source_url,
      title,
      ingredients
    } = this.state.recipe;
    console.log("rerer", this.state);
    const { handleIndex } = this.props;
    return (
      <React.Fragment>
        <div className="container">
          <div
            className="row justify-content-center"
            style={{ margin: "20px" }}
          >
            <h2 className="text-capitalize">
              details of {this.state.recipe.title}
            </h2>
          </div>
          <div className="row">
            <div className="col-10 mx-auto col-md-6 col-lg-6 my-3">
              <button
                type="button"
                className="btn btn-warning mb-5text-capitalize"
                onClick={() => handleIndex(1)}
              >
                Go back to recipe list
              </button>
              <img src={image_url} className="d-block w-100" alt="recipe" />
            </div>
            {/* details */}
            <div className="col-10 mx-auto col-md-6 col-lg-6 my-3">
              <h6 className="text-uppercase">{title}</h6>
              <h6 className="text-warning text-capitalize text-slanted">
                provided by {publisher}
              </h6>
              <a
                href={publisher_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-2  text-capitalize"
              >
                publisher webpage
              </a>
              <a
                href={source_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success mt-2 mx-3 text-capitalize"
              >
                recipe url
              </a>
              <ul className="list-group mt-4">
                <h2 className="mt-3 mb-4">Ingredients </h2>
                {ingredients.map((item, index) => {
                  return (
                    <li
                      key={Math.random()}
                      className="list-group-item text-slanted"
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default RecipeDetails;

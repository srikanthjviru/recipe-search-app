import React, {Component} from 'react';
import RecipeSearch from './RecipeSearch';
import Recipe from './Recipe';

class RecipeList extends Component{
 
    render(){
        const {recipes, handleDetails,handleChange,handleSubmit,error} = this.props;
        console.log("RecipeList Component",recipes)
        return (
            <React.Fragment>
                <div className='container my-5'>
                <RecipeSearch handleChange={handleChange} handleSubmit={handleSubmit}/>
                    {/* title */}
                    <div className='row'>
                        <div className="col-10 mx-auto col-md-6 text-center text-uppercase">
                            <h1 className="text-slanted">
                                recipe list
                            </h1>
                        </div>  
                    </div>
                    {/* end of title */}
                    <div className='row'>
                    {error ? (<h1 className='text-danger text-center'>{error}</h1>) :(
                        recipes.map(recipe=> {
                            return (<Recipe key={Math.random()} 
                               recipe={recipe} handleDetails={()=> handleDetails(0,recipe.recipe_id)} />);
                        })
                    )}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default RecipeList;
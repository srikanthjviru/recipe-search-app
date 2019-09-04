import React, {Component} from 'react';
class RecipeSearch extends Component{
    render(){
        const {value,handleChange, handleSubmit} = this.props;
        return (
            <React.Fragment>
                <div className='container' onSubmit={handleSubmit} style={{backgroundColor:"lightgrey"}}>
                    <div className='row'>
                        <div className='col-10 mx-auto col-md-8 mt-5 text-center'>
                            <h1 className='text-slanted text-capitalize' >
                                search for recipe with{" "}
                                <strong
                                className='text-danger'>
                                    Food2Fork
                                </strong>
                            </h1>
                            <form className="mt-4">
                                <label htmlFor='search'
                                className='text-capitalize'>
                                    type recipes separated by comma
                                </label>
                                <div className='input-group justify-content-center'>

                                        <input type="text"
                                        name="search"
                                        placeholder="chicken,onions,carrots"
                                        value={value}
                                        onChange={handleChange}
                                        style={{width:"300px"}}/>
                                    <div className='input-group-append'>

                                        <button type='submit'
                                        className="input-group-text bg-primary text-white"
                                        onClick={()=> console.log("clicked")}> 
                                        SEARCH</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </React.Fragment>
        )
    }
}
export default RecipeSearch;
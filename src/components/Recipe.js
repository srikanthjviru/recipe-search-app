import React, {Component} from 'react';
class Recipe extends Component {
    render(){
        // console.log("Recipe",this.props.recipe)
        const {image_url, title,publisher,publisher_url,source_url,recipe_id} = this.props.recipe;
        const {handleDetails} = this.props;
        // console.log("Recipe Title",title)
        return (    
            <React.Fragment>
                <div className='col-10 mx-auto col-md-6 col-lg-4 my-3'>
                    <div className="card">
                        <img src={image_url} 
                            className='img-card-top'
                            alt='recipe'
                            style={{height:'14rem'}}/>
                            <div className="card-body text-capitalize">
                                <h6 className="card-title">{title}</h6>
                                <h6 className='text-warning text-slanted'>
                                    provided by {publisher}
                                </h6>
                            </div>
                            <div className='card-footer'>
                                <div className='row align-items-space-between'>
                                <button type='button'
                                 className='col-md-6 col-lg-6 btn btn-primary text-capitalize'
                                 onClick={handleDetails}
                                 >
                                    details
                                </button>
                                <a 
                                href={source_url} 
                                className=' col-md-6 col-lg-6 btn btn-success text-capitalize'
                                target='_blank'
                                rel='noopener noreferrer'
                                >
                                recipe url
                                </a> 
                                </div>
                            </div>
                    </div>
                 </div>
            </React.Fragment>
        )
    }
}

export default Recipe;

import React from 'react'

const RecipeList = ({ storeRecipe }) => {
    console.log(storeRecipe);

    return (
        <>
            {storeRecipe && storeRecipe.map((itms) => {
                return (
                    <>
                        <div className="recipeCard mb-5 d-md-flex d-block col-12">
                            <div className=' h-100 img'>
                            <img
                                src={itms.recipe.image}
                                alt="Pancake"
                                className='h-100 img-fluid'
                            />
                            </div>
                            
                            <div className="recipeCard__text pt-3 p-4">
                                <div className='d-md-flex d-block justify-content-between align-items-center'>
                                    <h4 className='text-primary'>{itms.recipe.label}</h4>   
                                    {/* <span className='bg-success text-white p-2 rounded text-success'>Calory: {itms.recipe.calories}</span> */}
                                </div>
                                                              
                                {/* <div className='col-12'>
                                    <ul className='list-unstyled d-inline'>
                                        {itms.recipe.healthLabels.map((health)=>{
                                            return(
                                                <>
                                                    <li className='d-inline me-1 '><small>{health}</small>,</li>
                                                </>
                                            )
                                        })}
                                    </ul>
                                </div> */}
                                <p className='mb-0 mt-2'><strong>Ingredient Lines</strong></p>
                                <p>
                                    {itms.recipe.ingredientLines.map((lines)=>{
                                        return(
                                            <>
                                                <span>{lines}</span>
                                            </>
                                        )
                                    })}
                                </p>
                                <div className="recipeCard__text__timing">
                                    <div className="recipeCard__text__timing_time ">
                                        <h2 className='text-success'>Dish Type</h2>
                                        <p className='fs-6 text-success'>
                                            {itms.recipe.dishType.map((itms)=>{
                                                return(
                                                    <>
                                                        {itms}
                                                    </>
                                                )
                                            })}
                                        </p>
                                    </div>
                                    <div className="recipeCard__text__timing_time ">
                                        <h2 className='text-primary'>Source</h2>
                                        <p className='fs-6 text-primary'>
                                            {itms.recipe.source}
                                        </p>
                                    </div>
                                    <div className="recipeCard__text__timing_time ">
                                        <h2 className='text-warning'>Yield</h2>
                                        <p className='fs-6 text-warning'>
                                            {itms.recipe.yield}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}

        </>
    )
}

export default RecipeList
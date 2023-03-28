import { useState } from "react";

/* impot files */
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import axios from 'axios';
import RecipeList from "./RecipeCard/RecipeList";
import Spinner from 'react-bootstrap/Spinner';

function App() {
    const [inputField, setInputField] = useState('');
    const [storeRecipe, setStoreRecipe] = useState([]);
    const [load, setLoad] = useState(false);

    const searchRecipe = async (e) => {
        e.preventDefault();
        setLoad(true)
        await axios.get(`https://api.edamam.com/search?q=${inputField}&app_id=39ca2362&app_key=1c954ec4c4f19da0441e2bf6b666635a`)
            .then((res) => {
                setStoreRecipe(res.data.hits)
                setLoad(false)
            })
            .catch(error => console.log(error))
    }

    // console.log(storeRecipe)

    return (
        <>
            <div className="container-fluid py-5 bg-light float-start">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="text-center text-danger">Recipes Center</h1>
                            <form action="" className="form py-4">
                                <div className="input-group">
                                    <input type="text"
                                        className="form-control"
                                        value={inputField}
                                        onChange={(e) => setInputField(e.target.value)}
                                        placeholder="Please Enter Your Recipe..."
                                    />
                                    <button className="btn btn-danger" onClick={searchRecipe}>Search Recipes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {!load ? <>
                        <RecipeList
                            storeRecipe={storeRecipe}
                        />
                    </> : <>
                        <div className="text-center col-12">
                        <Spinner animation="grow" variant="warning" />
                        </div>

                    </>}

                </div>
            </div>
        </>
    );
}

export default App;

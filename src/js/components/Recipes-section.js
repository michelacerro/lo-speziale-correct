// Style
import style from '../../css/pages/Home.module.css';

// Dependencies
import React, {useState, useEffect} from 'react';
import axios from 'axios';

// Components
import RecipePreview from './RecipePreview';
import Button from './Button';


const RecipesSection = () => {
    const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;
    const url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=3`;
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        async function fetchData () {
            const response = await (axios.get(url))
                .catch(error => alert(error));
            setRecipes(response.data.recipes);
        }
        fetchData();
    }, [url]);

    return (
        <div className={style['recipes-section']}>
            <h1>Le nostre ricette</h1>
            <div className={style['recipes-container']}>
                {recipes.map(recipe => <RecipePreview key={recipe.id} info={recipe} />)}
            </div>
            <Button link='/ricette' text='scopri tutte le nostre ricette' />
        </div>
    )
};
export default RecipesSection;
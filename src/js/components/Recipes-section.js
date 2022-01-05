// Style
import style from '../../css/pages/Home.module.css';

// Dependencies
import React from 'react';

// Hooks
import {useRandomRecipesData} from '../hooks/UseRecipesData';

// Components
import RecipePreview from './RecipePreview';
import Button from './Button';
import MyLoading from './MyLoading';


const RecipesSection = () => {
    const {isLoading, data} = useRandomRecipesData();

    return (
        <div className={style['recipes-section']}>
            <h1>Le nostre ricette</h1>
            {isLoading ? 
                <MyLoading /> :
                <div className={style['recipes-container']}>
                    {data?.data.recipes.map(recipe => <RecipePreview key={recipe.id} info={recipe} />)}
                </div>
            }
            <Button link='/ricette' text='scopri tutte le nostre ricette' />
        </div>
    )
};
export default RecipesSection;
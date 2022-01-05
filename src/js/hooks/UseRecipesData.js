// Dependencies
import {useQuery} from 'react-query';
import axios from 'axios';


const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;

// RANDOM RECIPES
const fetchRandomRecipesData = () => {
    return axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=3`);
};

export const useRandomRecipesData = () => {
    return useQuery('random-recipes', fetchRandomRecipesData);
};


// ALL RECIPES
const fetchAllRecipesData = (filtersString) => {
    return axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}${filtersString}`)
};

export const useAllRecipesData = (filters) => {
    const {offset, number, query, time, intolerances, cuisines} = filters;

    let filtersString;
    if ('offset' in filters) {filtersString = `&offset=${offset}`};
    if ('number' in filters) {filtersString = filtersString + `&number=${number}`};
    if ('query' in filters) {
        if(query !== undefined || query !== '') {filtersString = filtersString + `&query=${query}`};
    };
    if ('time' in filters) {
        if (time !== undefined) {filtersString= filtersString + `&maxReadyTime=${time}`};
    };
    if ('intolerances' in filters) {
        if (intolerances !== undefined || intolerances !== '') {filtersString = filtersString + `&intolerances=${intolerances}`};
    };
    if ('cuisines' in filters) {
        if (cuisines !== undefined || cuisines !== '') { filtersString = filtersString + `&cuisine=${cuisines}`};
    };

    return useQuery(['all-recipes', filters], () => fetchAllRecipesData(filtersString))
};


// SINGLE RECIPE
const fetchRecipeDetails = ({queryKey}) => {
    const id = queryKey[1];
    return axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}&includeNutrition=true`);
};

const fetchRecipeIngredients = ({queryKey}) => {
    const id = queryKey[1];
    return axios.get(`https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${apiKey}`);
};

const fetchRecipeSteps = ({queryKey}) => {
    const id = queryKey[1];
    return axios.get(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${apiKey}`);
};

export const useSingleRecipeData = (id) => {
    const {data: details, isLoading: loadingDetails} = useQuery(['single-recipe-details', id], fetchRecipeDetails);
    const {data: ingredients, isLoading: loadingIngredients} = useQuery(['single-recipe-ingredients', id], fetchRecipeIngredients);
    const {data: steps, isLoading: loadingSteps} = useQuery(['single-recipe-steps', id], fetchRecipeSteps);

    return {details, loadingDetails, ingredients, loadingIngredients, steps, loadingSteps}
}
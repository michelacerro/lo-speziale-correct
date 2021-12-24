// Style
import style from '../../css/pages/Recipes.module.css';

// Dependencies
import React, {useState, useEffect} from 'react';
import axios from 'axios';

// Components
import RecipePreview from '../components/RecipePreview';

// Icons
import {AiOutlineRight, AiOutlineLeft} from 'react-icons/ai';
import {VscSettings} from 'react-icons/vsc';


const Recipes = () => {
    const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;
    const [offset, setOffset] = useState(0);
    const [url, setUrl] = useState(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&offset=${offset}`);

    // ----- get recipes
    const [recipes, setRecipes] = useState([]);

    async function fetchData(url) {
        const response = await (axios.get(url))
            .catch(error => alert(error));
        setRecipes(response.data.results);
    }

    useEffect(() => {    
        fetchData(url);
    }, [url]);

    // ----- open filters section
    const [open, setOpen] = useState(false);
    const toggleFilters = () => {
        const button = document.getElementById('open-filters-button');
        const input = document.getElementById('filters-input');
        setOpen(!open);
        if (open) {
            button.style.backgroundColor = '#ffffff';
            button.style.borderBottom = '1px solid var(--white)';
            button.style.padding = '20px';
            input.style.display = 'block';
        } else {
            input.style.display = 'none';
            button.style.backgroundColor = '';
            button.style.borderBottom = 'none';
            button.style.padding = '0';
        }
    }

    // ----- set filters
    // query and time filters
    const [query, setQuery] = useState();
    const [time, setTime] = useState();

    // intolerances filter
    const [intolerances, setIntolerances] = useState([]);
    const toggleIntolerances = (e) => {
       if (!intolerances.includes(e.target.value)) {setIntolerances(prevIntolerances => [...prevIntolerances, e.target.value]);}
       else {setIntolerances(intolerances.filter(intolerance => intolerance !== e.target.value));}
    }

    // cuisines filter
    const [cuisines, setCuisines] = useState([]);
    const toggleCuisine = (e) => {
        if (!cuisines.includes(e.target.value)) {setCuisines(prevCuisines => [...prevCuisines, e.target.value]);}
        else {setCuisines(cuisines.filter(cuisine => cuisine !== e.target.value));}
    }

    // ----- add filters
    const setFilters = (e) =>{
        e.preventDefault();

        // set initial config
        setOffset(0);
        setUrl(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&offset=${offset}`);

        // set filters
        let queryModified = '';
        const modifyQuery = (text) => {
            return queryModified = text.replace(' ', '-');
        };
        modifyQuery(query);

        if (queryModified !== '') {
            setUrl(prevUrl => prevUrl + `&query=${queryModified}`);
        }

        if (time !== undefined) {
            setUrl(prevUrl => prevUrl + `&maxReadyTime=${time}`);
        }

        if (intolerances.length > 0) {
            const intolerancesToString = intolerances.join();
            setUrl(prevUrl => prevUrl + `&intolerances=${intolerancesToString}`);
        }

        if (cuisines.length > 0) {
            const cuisinesToString = cuisines.join();
            setUrl(prevUrl => prevUrl + `&cuisine=${cuisinesToString}`);
        }

        // setNumber(100);
        setUrl(prevUrl => prevUrl + '&number=100');

        // reset query input
        setQuery('');

        // close filters section
        toggleFilters();
    };

    // ----- delete filters
    const deleteFilters = () => {
        setOffset(0);
        setQuery('');
        setTime();
        setIntolerances([]);
        setCuisines([]);
        setUrl(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&offset=${offset}`);

        const checkboxInput = document.querySelectorAll('input[type=checkbox]');
        for (let i = 0; i < checkboxInput.length; i++) {
            checkboxInput[i].checked = false;
        }       
    }

    // ------ "change page"
    const offsetString = '&offset=';
    const offsetStringLength = offsetString.length;
    const indexOfOffset = url.indexOf(offsetString);

    const nextRecipes = () => {
        if (offset < 900) {
            const newOffset = offset + 10;
            setOffset(newOffset);

            if (offset < 100) {
                return setUrl(url.substring(0, indexOfOffset + offsetStringLength) + newOffset + url.substring(indexOfOffset + offsetStringLength + 2));
            } else if (offset >= 100) {
                return setUrl(url.substring(0, indexOfOffset + offsetStringLength) + newOffset + url.substring(indexOfOffset + offsetStringLength + 3));
            }
        }        
    }

    const prevRecipes = () => {
        if (offset >= 10) {
            const newOffset = offset - 10;
            setOffset(newOffset);

            if (offset === 10) {
                return setUrl(url.substring(0, indexOfOffset + offsetStringLength) + newOffset + url.substring(indexOfOffset + offsetStringLength + 1));
            } else if (offset < 100) {
                return setUrl(url.substring(0, indexOfOffset + offsetStringLength) + newOffset + url.substring(indexOfOffset + offsetStringLength + 2));
            } else if (offset >= 100) {
                return setUrl(url.substring(0, indexOfOffset + offsetStringLength) + newOffset + url.substring(indexOfOffset + offsetStringLength + 3));
            }
        }
    }

    
    return (
        <div className={style['recipes-page']}>
            <div className={style['contents-container']}>
            <h1>Ricette</h1>

                <div className={style['filters-container']}>
                    <div id='open-filters-button' className={style['open-filters-button']} onClick={toggleFilters}>
                        <VscSettings /> filtra
                    </div>
                    <form id='filters-input' className={style['filters-input']} onSubmit={setFilters}>

                        <div className={style['filters-columns']}>
                            <div className={style['single-column']}>
                                <div className={style['double-section']}>
                                    {/* query */}
                                    <div className={style['filter-section']}>
                                        <h4>ricerca per nome</h4>
                                        <label htmlFor='query'><small>(in inglese)</small></label>
                                        <input type='text' name='query' value={query} onChange={e => setQuery(e.target.value)}/>
                                    </div>

                                    {/* time */}
                                    <div className={style['filter-section']}>
                                        <h4>tempo</h4>
                                        <label htmlFor='time'>Massimo tempo per la preparazione della ricetta <small>(in minuti)</small></label>
                                        <input type='number' name='time' min='1' onChange={e => setTime(e.target.value)} />
                                    </div>
                                </div>

                                <div className={style['single-section']}>
                                    {/* intolerances */}
                                    <div className={style['one-section']}>
                                        <h4>intolleranze</h4>
                                        <label><input type='checkbox' name='intolerances' value='dairy' onClick={toggleIntolerances} />Latticini</label>
                                        <label><input type='checkbox' name='intolerances' value='egg' onClick={toggleIntolerances} />Uova</label>
                                        <label><input type='checkbox' name='intolerances' value='gluten' onClick={toggleIntolerances} />Glutine</label>
                                        <label><input type='checkbox' name='intolerances' value='grain' onClick={toggleIntolerances} />Grano</label>
                                        <label><input type='checkbox' name='intolerances' value='peanut' onClick={toggleIntolerances} />Arachidi</label>
                                        <label><input type='checkbox' name='intolerances' value='seafood' onClick={toggleIntolerances} />Frutti di Mare</label>
                                        <label><input type='checkbox' name='intolerances' value='sesame' onClick={toggleIntolerances} />Sesamo</label>
                                        <label><input type='checkbox' name='intolerances' value='shellfish' onClick={toggleIntolerances} />Crostacei</label>
                                        <label><input type='checkbox' name='intolerances' value='soy' onClick={toggleIntolerances} />Soia</label>
                                        <label><input type='checkbox' name='intolerances' value='sulfite' onClick={toggleIntolerances} />Solfiti</label>
                                        <label><input type='checkbox' name='intolerances' value='tree-nut' onClick={toggleIntolerances} />Albero di Noce</label>
                                        <label><input type='checkbox' name='intolerances' value='wheat' onClick={toggleIntolerances} />Frumento</label>   
                                    </div>
                                </div>
                            </div>

                            <div className={style['double-column']}>
                                {/* cuisines */}
                                <h4>cucine</h4>
                                <div className={style['subcolumn-container']}>                                    
                                    <div className={style['subcolumn']}>                                    
                                        <label><input type='checkbox' name='cuisines' value='african' onClick={toggleCuisine} />Africana</label>
                                        <label><input type='checkbox' name='cuisines' value='american' onClick={toggleCuisine} />Americana</label>
                                        <label><input type='checkbox' name='cuisines' value='british' onClick={toggleCuisine} />Britannica</label>
                                        <label><input type='checkbox' name='cuisines' value='cajun' onClick={toggleCuisine} />Cajun</label>
                                        <label><input type='checkbox' name='cuisines' value='caribbean' onClick={toggleCuisine} />Caraibica</label>
                                        <label><input type='checkbox' name='cuisines' value='chinese' onClick={toggleCuisine} />Cinese</label>
                                        <label><input type='checkbox' name='cuisines' value='korean' onClick={toggleCuisine} />Coreana</label>
                                        <label><input type='checkbox' name='cuisines' value='jewish' onClick={toggleCuisine} />Ebraica</label>
                                        <label><input type='checkbox' name='cuisines' value='eastern-european' onClick={toggleCuisine} />dell'Est Europa</label>
                                        <label><input type='checkbox' name='cuisines' value='european' onClick={toggleCuisine} />Europea</label>
                                        <label><input type='checkbox' name='cuisines' value='french' onClick={toggleCuisine} />Francese</label>
                                        <label><input type='checkbox' name='cuisines' value='greek' onClick={toggleCuisine} />Greca</label>
                                        <label><input type='checkbox' name='cuisines' value='indian' onClick={toggleCuisine} />Indiana</label>
                                    </div>
                                    <div className={style['subcolumn']}>
                                        <label><input type='checkbox' name='cuisines' value='irish' onClick={toggleCuisine} />Irlandese</label>
                                        <label><input type='checkbox' name='cuisines' value='italian' onClick={toggleCuisine} />Italiana</label>
                                        <label><input type='checkbox' name='cuisines' value='japanese' onClick={toggleCuisine} />Giapponese</label>
                                        <label><input type='checkbox' name='cuisines' value='latin-american' onClick={toggleCuisine} />Latino Americana</label>
                                        <label><input type='checkbox' name='cuisines' value='middle-eastern' onClick={toggleCuisine} />Medio Orientale</label>
                                        <label><input type='checkbox' name='cuisines' value='mediterranean' onClick={toggleCuisine} />Mediterranea</label>
                                        <label><input type='checkbox' name='cuisines' value='mexican' onClick={toggleCuisine} />Messicana</label>
                                        <label><input type='checkbox' name='cuisines' value='nordic' onClick={toggleCuisine} />Nordica</label>
                                        <label><input type='checkbox' name='cuisines' value='spanish' onClick={toggleCuisine} />Spagnola</label>
                                        <label><input type='checkbox' name='cuisines' value='southern' onClick={toggleCuisine} />del Sud</label>
                                        <label><input type='checkbox' name='cuisines' value='thai' onClick={toggleCuisine} />Tailandese</label>
                                        <label><input type='checkbox' name='cuisines' value='german' onClick={toggleCuisine} />Tedesca</label>
                                        <label><input type='checkbox' name='cuisines' value='vietnamese' onClick={toggleCuisine} />Vietnamita</label>
                                    </div>
                                </div>                                  
                            </div>
                        </div>
                        <button type='submit' className={style['set-filters-button']}>applica filtri</button>                  
                    </form>
                </div>
                {query.length > 0 || intolerances.length > 0 || cuisines.length > 0
                    ?
                        <button className={style['delete-filters-button']} onClick={deleteFilters}>cancella filtri</button>
                    :
                        ''
                }

                
                {recipes.length > 0 
                    ? 
                        <div className={style['recipes-container']}>
                            {recipes.map(recipe => <RecipePreview key={recipe.id} info={recipe} />)}
                        </div>
                    :
                        <p className={style['recipes-not-found']}>Siamo spiacenti, ma la ricerca da te tentata non ha prodotto risultati. Prova con una nuova ricerca.</p>
                }
                
                <div className={style['buttons-container']}>
                    <button onClick={prevRecipes} className={style['recipes-button']} >{offset < 10 ? '' : <AiOutlineLeft />}</button>
                    <button onClick={nextRecipes} className={style['recipes-button']} >{offset > 900 || recipes.length < 10 || url.includes('&number=') ? '' : <AiOutlineRight />}</button>
                </div>
            </div>    
        </div>
    )
};
export default Recipes;
// Style
import style from '../../css/pages/Recipes.module.css';

// Dependencies
import React, {useState} from 'react';

// Utils
import {modifyQuery, toggleFilters} from '../utils/Utils';

// Hooks
import {useAllRecipesData} from '../hooks/UseRecipesData';

// Components
import RecipePreview from '../components/RecipePreview';
import MyLoading from '../components/MyLoading';

// Icons
import {VscSettings} from 'react-icons/vsc';
import {AiOutlineRight, AiOutlineLeft} from 'react-icons/ai';


const Recipes = () => {
    // ----- setup filters
    // --- start values
    const [offset, setOffset] = useState(0);
    const [query, setQuery] = useState();
    const [time, setTime] = useState();
    const [intolerances, setIntolerances] = useState([]);
    const [cuisines, setCuisines] = useState([]);

    const [filters, setFilters] = useState({offset});

    // --- setted values
    // 1 - query and time filters setted in input onChange

    // 2 - intolerances filter
    const toggleIntolerances = (e) => {
       if (!intolerances.includes(e.target.value)) {setIntolerances(prevIntolerances => [...prevIntolerances, e.target.value]);}
       else {setIntolerances(intolerances.filter(intolerance => intolerance !== e.target.value));}
    };

    // 3 - cuisines filter
    const toggleCuisine = (e) => {
        if (!cuisines.includes(e.target.value)) {setCuisines(prevCuisines => [...prevCuisines, e.target.value]);}
        else {setCuisines(cuisines.filter(cuisine => cuisine !== e.target.value));}
    };

    
    // ----- add filters
    const setupFilters = (e) =>{
        e.preventDefault();

        setFilters({
            offset: 0,
            number: 100,
            query: modifyQuery(query),
            time,
            intolerances: intolerances.join(),
            cuisines: cuisines.join()
        });

        // reset query input
        setQuery('');

        // close filters section
        toggleFilters();
    };

    // ----- delete filters
    const removeFilters = () => {
        // reset input
        setOffset(0);
        setQuery('');
        setTime();
        setIntolerances([]);
        setCuisines([]);

        setFilters({offset});

        const checkboxInput = document.querySelectorAll('input[type=checkbox]');
        for (let i = 0; i < checkboxInput.length; i++) {
            checkboxInput[i].checked = false;
        };       
    };  

    // ------ "change page"   
    const nextRecipes = () => {
        setOffset(offset + 10);
        setFilters({offset: offset + 10});
    };

    const prevRecipes = () => {
        setOffset(offset - 10);
        setFilters({offset: offset - 10});
    };

    // ----- get recipes
    const {data, isLoading} = useAllRecipesData(filters);

    if (isLoading) {
        return <MyLoading />
    };

    
    return (
        <div className={style['recipes-page']}>
            <div className={style['contents-container']}>
            <h1>Ricette</h1>

                {/* <Filters /> */}
                <div className={style['filters-container']}>

                    {/* open/close button */}
                    <div id='open-filters-button' className={style['open-filters-button']} onClick={toggleFilters}>
                        <VscSettings /> filtra
                    </div>

                    {/* filters section */}
                    <form id='filters-input' className={style['filters-input']} onSubmit={setupFilters}>

                        <div className={style['filters-columns']}>
                            <div className={style['single-column']}>
                                <div className={style['double-section']}>
                                    {/* query */}
                                    <div className={style['filter-section']}>
                                        <h4>ricerca per nome</h4>
                                        <label htmlFor='query'><small>(in inglese)</small></label>
                                        <input type='text' name='query' value={query || ''} onChange={e => setQuery(e.target.value)}/>
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

                {/* delete filters button */}
                {'number' in filters
                    ? <button className={style['delete-filters-button']} onClick={removeFilters}>cancella filtri</button>
                    : ''
                }
  
                {data?.data.results.length > 0 
                    ?   <div className={style['recipes-container']}>
                            {data.data.results.map(recipe => <RecipePreview key={recipe.id} info={recipe} />)}
                        </div>
                    :   <p className={style['recipes-not-found']}>Siamo spiacenti, ma la ricerca da te tentata non ha prodotto risultati. Prova con una nuova ricerca.</p>
                }
                
                <div className={style['buttons-container']}>
                    <button onClick={prevRecipes} className={style['recipes-button']} >{offset < 10 || <AiOutlineLeft />}</button>
                    <button onClick={nextRecipes} className={style['recipes-button']} >{(offset > 900 || data?.data.results.length < 10 || 'number' in filters) || <AiOutlineRight />}</button>
                </div>
            </div>    
        </div>
    )
};
export default Recipes;
// Style
import style from '../../css/pages/SingleRecipe.module.css';

// Dependencies
import React from 'react';
import {useParams} from 'react-router-dom';

// Hooks
import {useSingleRecipeData} from '../hooks/UseRecipesData';

// Components
import Comments from '../components/Comments';
import MyLoading from '../components/MyLoading';

// Icons
import {AiFillCheckCircle, AiFillCloseCircle} from 'react-icons/ai';
import {MdTimer} from 'react-icons/md';
import {BsPeople} from 'react-icons/bs';



const SingleRecipe = () => {
    const id = useParams().id;
    const {
        details, 
        loadingDetails, 
        ingredients, 
        loadingIngredients, 
        steps, 
        loadingSteps
    } = useSingleRecipeData(id);

    if (loadingDetails || loadingIngredients || loadingSteps) {
        return <MyLoading />
    }

    return (
        <div className={style['single-recipe-page']}>
            {/* ----------- RECIPE SECTION */}
            <h1>{details.data?.title}</h1>
            <div className={style['info-section']}>
                <img src={details.data?.image} alt={details.data?.title} />
 
                {/* details */}
                <div>
                    <div className={style['info-details']}>
                        <p><MdTimer className={style['single-icon']} />
                            Pronto in {details.data?.readyInMinutes > 60 
                                ? (details.data?.readyInMinutes % 60 === 0 
                                    ? details.data?.readyInMinutes / 60 + ' ore' 
                                    : Math.floor(details.data?.readyInMinutes / 60) + ' ore e ' + details.data?.readyInMinutes % 60 
                                ) : details.data?.readyInMinutes} minuti
                        </p>
                        <hr/>
                        <p><BsPeople className={style['single-icon']} />
                            Dosi per {details.data?.servings} {details.data?.servings > 1 ? 'persone' : 'persona'}
                        </p>
                    </div>
                    <ul>
                        <li>{details.data?.vegetarian ? <AiFillCheckCircle className={style['check-true']} /> : <AiFillCloseCircle className={style['check-false']} />}Vegetariano</li>
                        <li>{details.data?.vegan ? <AiFillCheckCircle className={style['check-true']} /> : <AiFillCloseCircle className={style['check-false']} />}Vegano</li>
                        <li>{details.data?.glutenFree ? <AiFillCheckCircle className={style['check-true']} /> : <AiFillCloseCircle className={style['check-false']} />}Senza glutine</li>
                        <li>{details.data?.dairyFree ? <AiFillCheckCircle className={style['check-true']} /> : <AiFillCloseCircle className={style['check-false']} />}Senza lattosio</li>
                        <li>{details.data?.veryHealthy ? <AiFillCheckCircle className={style['check-true']} /> : <AiFillCloseCircle className={style['check-false']} />}Salutare</li>
                    </ul>
                </div>
            </div>           
            
            {/* ingredients */}
            <div className={style['ingredients-section']}>
                <h2>Ingredienti</h2>
                {ingredients.data?.ingredients.length > 0 
                    ?   <div>
                            {ingredients.data?.ingredients.map((ingredient, index) => <p key={index}><b>{ingredient.amount.metric.value} {ingredient.amount.metric.unit}</b> {ingredient.name}</p>)}
                        </div>
                    :   ''
                }
            </div>

            {/* steps */}
            <div className={style['steps-section']}>
                <h2>Procedura</h2>
                {steps.data[0]?.steps.length > 0 
                    ? steps.data[0]?.steps.map(step => <li key={step.number}><span>{step.number}</span><p>{step.step}</p></li>)
                    : ''
                }
            </div>

            {/* ---------- COMMENTS SECTION */}
            <Comments />
        </div>
    )
};
export default SingleRecipe;
import React from 'react';
// import { Link } from 'react-router-dom';
// import RecipeBox from '../../Atoms/RecipeBox';
import './JobList.css';

const JobList = ({ jobs }) => {
  console.log('listado: ,', jobs)
  return (
    <ul>
      <li>1</li>
    </ul>
    // <section className="RecipeList">
    //   {recipes.map(recipe => {
    //     return (
    //       <Link to={`/recipe/${recipe.idDrink}`} key={recipe.idDrink}>
    //         <RecipeBox
    //           id={recipe.idDrink}
    //           name={recipe.strDrink}
    //           src={recipe.strDrinkThumb}
    //           alt={recipe.strDrink}
    //         />
    //       </Link>
    //     );
    //   })}
    // </section>
  );
};

export default JobList;


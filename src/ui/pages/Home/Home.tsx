import React, { useContext } from 'react';
// import { ContextCocktails } from '../../components/contexts/ContextCocktails';
// import FormCocktail from '../../components/Molecules/FormCocktail';
// import RecipeList from '../../components/Molecules/RecipeList';
import './Home.css';

const Home: React.FC  = () => {
  // const { recipes } = useContext(ContextCocktails);
  return (
    <>
      <main>
        <div className="cw">
          hola home
          {/* <FormCocktail className="FormCocktail" />
          {recipes.length > 0 && <RecipeList recipes={recipes} />} */}
        </div>
      </main>
    </>
  );
};

export default Home;
import { useState } from 'react';
import cocktails from './cocktails.js';

export default function Home() {
  const [cocktailList, setCocktailList] = useState(cocktails);
  const [cocktail, setCocktail] = useState(cocktailList[0]);

  function slideLeft() {
    let index = cocktailList.indexOf(cocktail);
    if (index > 0) setCocktail(cocktailList[index - 1]);
  }

  function slideRight() {
    let index = cocktailList.indexOf(cocktail);
    if (index < cocktailList.length - 1) setCocktail(cocktailList[index + 1]);
  }

  return (
    <div>
      <div>
        <img src={cocktail.strDrinkThumb} />
        <div className='button-div'>
          <button onClick={slideLeft}>&lt;</button>
          <button onClick={slideRight}>&gt;</button>
        </div>
        <h2>{`Name: ${cocktail.strDrink}`}</h2>
        <h2>{`Category: ${cocktail.strCategory}`}</h2>
        <h2>{`Glass: ${cocktail.strGlass}`}</h2>
      </div>
    </div>
  );
}
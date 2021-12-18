import React  from 'react'
import { useState } from 'react';
import AddCategory from './componentes/AddCategory';
import GifGrid from './componentes/GifGrid';


const GifExpertApp = () => {
    const [category, setcategory] = useState(['Phoenix Wright Ace Attorney']);

  

    return (
        <>
        <h2>GifExpertApp</h2> 
        <hr/>
        <AddCategory setcategory={setcategory}/>
        <hr/>
        <ol>
            {category.map(cat => 
                <GifGrid key={cat} category={cat}/>
                )}
        </ol>
        </>
    )
}

export default GifExpertApp;

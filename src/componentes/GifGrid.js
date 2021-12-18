import React  from 'react';
//import PropTypes from 'prop-types';
import GifGridItem from './GifGridItem';
import { getGif } from '../helpers/getGif';
import { useFetch } from '../hooks/useFetch';



const GifGrid = ({category}) => {

 
    const {data,loading}=useFetch(category);
   
    return (
        <>
        <h2>{category}</h2> 
        {loading && <p>Cargando</p>}
        <div className='cardgrid animate__animated '>
        {console.log(data)}
          {  data.map(img => {
            return  <GifGridItem key={img.id} img={img}/>
            })
            
            }
           
        
        </div>
        </>
    )
}

GifGrid.propTypes = {

}

export default GifGrid



import React, {useState,useEffect} from 'react'
import { getGif } from '../helpers/getGif';

export const useFetch = (category) => {
    const [state, setstate] = useState({
        data:[],
        loading:true,
    });

    useEffect(() => { getGif(category).then(img => setstate({data:img,loading:false}))},[category]);
    return state;
} 

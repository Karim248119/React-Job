import { useState, useEffect } from "react";
import axios from "axios";


const useFetch = ( endpoint, query ) =>
{
    const [ data, setData ] = useState( [] );
    const [ isLoading, setIsLoading ] = useState( false );
    const [ error, setError ] = useState( null );


    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${ endpoint }`,
        params: { ...query },
        headers: {
            'X-RapidAPI-Key': 'b2ef6947e0msh70e1879aeb050a9p14f0c9jsn0434fac25a0f',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };
    const fetchData = async () =>
    {
        setIsLoading( true );
        try
        {
            const response = await axios.request( options )
            setData( response.data.data )
        } catch ( error )
        {
            setError( error )
            alert( 'There is an Error' )
        } finally
        {

            setIsLoading( false );
        }
    }

    useEffect( () =>
    {
        fetchData()
    }, [] )

    const refetch = () =>
    {
        setIsLoading( true );
        fetchData();
    }
    return { data, isLoading, error, refetch }
}

export default useFetch;
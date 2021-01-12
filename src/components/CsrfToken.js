import React, {useEffect} from 'react';
import axios from 'axios';


const CsrfToken = () => {
    useEffect(() =>{
        const loadCsrf = async () =>{
            const url = `${process.env.REACT_APP_BACKEND_API_URL}/getcsrf`;
            const config = {
                "Accept": "application/json",
                "Content-type": "application/json"
            }
            console.log(url)
            const response = await axios.get(url, config);
            console.log(response)
        };

        loadCsrf();
    }, []);

    return (
        <input hidden disabled/>
    );
};

export default CsrfToken;
import React, { useEffect, useState }  from 'react'

const UseFetch = (url) => {
    const [data, setData] = useState([]);
    
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
	fetch(url)
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			// console.log(data.items);
			setData(data.items);
			setIsLoading(false);
		})
		.catch((err) => {
			setError(err.message);
			setIsLoading(false);
		});
    }, [url])
    return{data,isLoading,error}


}

export default UseFetch






import { useEffect, useState } from "react";



const Search = () => {
    const [postStat, setPostStat] = useState(0);


    useEffect(() => {
        const fetchPostNumber = async () => {
            const response = await fetch('/stats/posts');
            const json = await response.json();
            if (response.ok) {
                setPostStat(json);
            }
        }

        fetchPostNumber();
    }, []);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '75vh' }}>
            Search Lives Here
        </div>
    )
}

export default Search;
import { useEffect, useState } from "react";



const PostAdd = () => {
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
            Post Add Lives Here
        </div>
    )
}

export default PostAdd;
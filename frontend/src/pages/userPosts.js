import { useEffect, useState } from "react";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


import PostDetails from '../components/post_details'

const UserPosts = () => {
    const [user, setUser] = useState("Default Author")
    const [posts, setPosts] = useState(null);


    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('/posts');
            const json = await response.json();
            if (response.ok) {
                setPosts(json);
            }
        }

        fetchPosts();
    }, []);

    return (
        <Box sx={{ width: '100%', flexGrow: 1, overflow: 'auto', padding: '10px' }}>
            <Grid container spacing={3}>
                <Grid item xs>
                </Grid>
                <Grid item xs={6}>
                    <div className="posts">
                        {posts && posts.map((post) => (
                            <PostDetails key={post._id} post={post} />
                        ))
                        }
                    </div>
                </Grid>
                <Grid item xs>
                </Grid>
            </Grid>
        </Box>
    )
}

export default UserPosts;
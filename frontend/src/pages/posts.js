import { useEffect, useState } from "react";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';


import PostDetails from '../components/post_details'

const Posts = () => {
    const [posts, setPosts] = useState(null);
    const [postsLength, setPostsLength] = useState(null)


    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('/posts');
            const json = await response.json();
            if (response.ok) {
                setPosts(json);
                setPostsLength(json.length)
            }
        }

        fetchPosts();
    }, []);

    return (
        <Box sx={{ width: '100%', flexGrow: 1, overflow: 'auto', padding: '10px' }}>
            <Grid container alignItems="center">
                <Grid item xs>
                </Grid>
                <Grid item xs={8}>
                    {postsLength === 0 &&
                        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                            <Box sx={{ my: 1, mx: 3 }}>
                                <Grid container alignItems="center">
                                    <Grid xs>
                                        <Typography gutterBottom variant="h5" sx={{ mt: 2 }}>
                                            You Have Not Posted Anything
                                            <Skeleton animation="wave" />
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>}
                    {posts && posts.map((post) => (
                        <PostDetails key={post._id} post={post} />
                    ))
                    }
                </Grid>
                <Grid item xs>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Posts;
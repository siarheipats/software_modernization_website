import { useEffect, useState } from "react";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';


import MyPostDetails from '../components/my_post_details'

const UserPosts = () => {
    const [user, setUser] = useState("Default Author")
    const [posts, setPosts] = useState(null);
    const [postsLength, setPostsLength] = useState(null)


    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/posts/${user}`);
            const json = await response.json();
            if (response.ok) {
                setPosts(json);
                setPostsLength(json.length)
            }
        }

        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        const response = await fetch(`/posts/${user}`);
        const json = await response.json();
        if (response.ok) {
            setPosts(json);
            setPostsLength(json.length)
        }

    }

    const deletePost = async (postId) => {
        const response = await fetch(`/posts/${postId}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            const newPosts = posts.filter(p => p._id !== postId);
            setPosts(newPosts);
        }
    }

    return (
        <Box sx={{ width: '100%', flexGrow: 1, overflow: 'auto', padding: '10px' }}>
            <Grid container spacing={3}>
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
                        <MyPostDetails key={post._id} post={post} deletePost={deletePost} fetchPosts={fetchPosts} />
                    ))
                    }
                </Grid>
                <Grid item xs>
                </Grid>
            </Grid>
        </Box >
    )
}

export default UserPosts;
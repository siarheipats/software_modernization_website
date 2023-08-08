import { useEffect, useState } from "react";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import PostDetails from '../components/post_details';
import PostDetailsDrawer from "../components/post_details_drawer";

const Search = () => {
    const [searchParam, setSearchParam] = useState('');
    const [posts, setPosts] = useState(null);
    const [openPostDetailsDrawer, setOpenPostDetailsDrawer] = useState(false)
    const [selectedPostDetails, setSelectedPostDetails] = useState(null)

    const searchPosts = async () => {
        const response = await fetch(`/posts/search/${searchParam}`);

        const json = await response.json();

        if (response.ok) {
            setPosts(json);
        }
    }

    return (
        <Box sx={{ width: '100%', flexGrow: 1, overflow: 'auto', padding: '10px' }}>
            <Grid container spacing={3}>
                <Grid item xs>

                </Grid>
                <Grid item xs={8}>
                    <Box sx={{ width: '100%', bgcolor: 'background.paper', p: 2 }}>
                        <Grid container alignItems="center">
                            <Grid xs>
                                <TextField
                                    id="standard-basic"
                                    variant="standard"
                                    required
                                    fullWidth
                                    label="Search"
                                    type="text"
                                    onChange={(e) => setSearchParam(e.target.value)}
                                    defaultValue={" "}
                                    value={searchParam}
                                />
                            </Grid>
                            <Grid>
                                <Button variant="outlined" onClick={() => { searchPosts() }}>Search</Button>
                            </Grid>
                        </Grid>
                        {posts && posts.map((post) => (
                            <PostDetails
                                key={post._id}
                                post={post}
                                setIsDrawerOpen={setOpenPostDetailsDrawer}
                                setOpenedPostDetails={setSelectedPostDetails}
                            />
                        ))
                        }
                    </Box>
                </Grid>
                <Grid item xs>

                </Grid>
            </Grid>
            <PostDetailsDrawer post={selectedPostDetails} isDrawerOpen={openPostDetailsDrawer} setIsDrawerOpen={setOpenPostDetailsDrawer} />
        </Box>
    )
}

export default Search;
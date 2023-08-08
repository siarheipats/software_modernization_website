import { useEffect, useState } from "react";

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';

import NewPost from "../components/new_post";

const PostAdd = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("Default Author");
    const [category, setCategory] = useState("");
    const [softwareName, setSoftwareName] = useState("");
    const [error, setError] = useState(null);
    const [newPost, setNewPost] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const post = { title, body, author, category, softwareName };

        const response = await fetch('/posts', {
            method: "POST",
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
        }

        if (response.ok) {
            setError(null);
            setTitle("");
            setBody("");
            setCategory("");
            setSoftwareName("");
            setNewPost(json);
        }
    }

    const handleCategorySelectChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <Box sx={{ width: '100%', flexGrow: 1, overflow: 'auto', padding: '10px' }}>
            <Grid container spacing={3}>
                <Grid item xs>

                </Grid>
                <Grid item xs={8}>
                    {!newPost && (
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ width: '100%', padding: 15, mx: 'auto', bgcolor: 'background.paper', p: 2 }}>
                            <Box sx={{ mb: 3 }}>
                                <Grid container alignItems="center">
                                    <Grid xs>
                                        <Typography gutterBottom variant="h5" component="div">
                                            <Box>
                                                Add New Post
                                            </Box>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <TextField sx={{ p: 1, mt: 1 }}
                                required
                                fullWidth
                                label="Title"
                                type="text"
                                onChange={(e) => setTitle(e.target.value)}
                                defaultValue={" "}
                                value={title}
                            />
                            <TextField sx={{ p: 1, mt: 1 }}
                                required
                                label="Body"
                                variant="filled"
                                multiline
                                rows={4}
                                fullWidth
                                defaultValue="Default Value"
                                type="text"
                                onChange={(e) => { setBody(e.target.value) }}
                                value={body}
                            />
                            <label >Character Count: {body.length}/2500</label>
                            <br />
                            <TextField sx={{ p: 1, mt: 1 }}
                                required
                                fullWidth
                                label="Category"
                                type="text"
                                select
                                onChange={(e) => setCategory(e.target.value)}
                                value={category}
                            >
                                <MenuItem value={'Bug'}>Bug</MenuItem>
                                <MenuItem value={'Suggestion'}>Suggestion</MenuItem>
                                <MenuItem value={'Other'}>Other</MenuItem>
                            </TextField>
                            <TextField sx={{ p: 1, mt: 1, mb: 2 }}
                                required
                                fullWidth
                                margin="500"
                                label="Software Name"
                                type="text"
                                onChange={(e) => setSoftwareName(e.target.value)}
                                value={softwareName}
                            />
                            <button> Post Suggestion</button>
                            {error && <div className="error">{error}</div>}
                        </Box>
                    )}
                    {newPost && (<NewPost post={newPost} />)}
                </Grid>
                <Grid item xs>

                </Grid>
            </Grid>
        </Box >
    )
}

export default PostAdd;
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';

const PostEdit = ({ post, setShowEdit, fetchPosts }) => {
    const [postId, setPostId] = useState(post._id);
    const [title, setTitle] = useState(post.title);
    const [body, setBody] = useState(post.body);
    const [author, setAuthor] = useState("Default Author");
    const [category, setCategory] = useState(post.category);
    const [softwareName, setSoftwareName] = useState(post.softwareName);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const post = { title, body, author, category, softwareName };

        const response = await fetch(`/posts/${postId}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post),
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
            fetchPosts();
            setShowEdit(false);
            navigate("/myposts");
        }
    }

    return (
        <div>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ width: '100%', padding: 15, mx: 'auto', bgcolor: 'background.paper', p: 2 }}>
                <Box sx={{ mb: 3 }}>
                    <Grid container alignItems="center">
                        <Grid xs>
                            <Typography gutterBottom variant="h5" component="div">
                                <Box>
                                    <Tooltip title="Back">
                                        <IconButton>
                                            <ArrowBackIcon onClick={() => setShowEdit(false)} />
                                        </IconButton>
                                    </Tooltip>
                                    Edit Post
                                </Box>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
                <TextField sx={{p: 1, mt: 1 }}
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
                <label>Character Count: {body.length}/2500</label>
                <br />
                <TextField sx={{ p: 1, mt: 1 }}
                    required
                    select
                    fullWidth
                    label="Category"
                    type="text"
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
                <button>Update Suggestion</button>
                {error && <div className="error">{error}</div>}
            </Box>
        </div>
    )
}

export default PostEdit;
import { useEffect, useState } from "react";

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const PostAdd = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("Default Author");
    const [category, setCategory] = useState("");
    const [softwareName, setSoftwareName] = useState("");
    const [error, setError] = useState(null);

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
            console.log('new post added!', json);
        }
    }

    return (
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ width: '100%', padding: 15, mx: 'auto' }}>

            <h3>Add New Suggestion</h3>
            <TextField sx={{ p: 1 }}
                required
                fullWidth
                label="Title"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                defaultValue={" "}
                value={title}
            />
            <TextField sx={{ p: 1 }}
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
            <TextField sx={{ p: 1 }}
                required
                fullWidth
                label="Category"
                type="text"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
            />
            <TextField sx={{ p: 1 }}
                required
                fullWidth
                margin="500"
                label="Software Name"
                type="text"
                onChange={(e) => setSoftwareName(e.target.value)}
                value={softwareName}
            />
            <button>Post Suggestion</button>
            {error && <div className="error">{error}</div>}
        </Box>
    )
}

export default PostAdd;
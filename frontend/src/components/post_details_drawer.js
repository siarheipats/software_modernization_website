//date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import { Drawer } from "@mui/material";
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

const PostDetailsDrawer = ({ post, isDrawerOpen, setIsDrawerOpen }) => {

    if (post === null) {
        post = {
            title: "empty",
            body: "empty",
            author: "none",
            category: "none",
            softwareName: "none",
            createdAt: "2023-07-25T23:18:14.367Z",
            updatedAt: "2023-07-25T23:18:14.367Z"
        }
    }

    return (
        <Drawer anchor="right" PaperProps={{ sx: { width: "95%" } }} open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
            <nav class="nav">
                <Tooltip title="Minimize">
                    <IconButton>
                        <CloseFullscreenIcon onClick={() => { setIsDrawerOpen(false) }} />
                    </IconButton>
                </Tooltip>
            </nav>
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <Box sx={{ my: 1, mx: 3 }}>
                    <Grid container alignItems="center">
                        <Grid xs>
                            <Typography gutterBottom variant="h5" sx={{ mt: 2 }}>
                                <b>Title: </b>{post.title}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography color="text.primary" variant="body">
                        {post.body}
                    </Typography>
                </Box>
                <Divider variant="middle" />
                <Box sx={{ m: 2 }}>
                    <Typography gutterBottom variant="body1">
                        <Grid container alignItems="center">
                            <Grid xs>
                                <b>Author: </b>{post.author} | <b>Software: </b>{post.softwareName} | <b>Category: </b> {post.category}
                            </Grid>
                            <Grid>
                                <b>Posted on: </b> {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
                            </Grid>
                        </Grid>

                    </Typography>
                </Box>
            </Box>
        </Drawer>
    )
}

export default PostDetailsDrawer;
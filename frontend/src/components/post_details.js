//date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const PostDetails = ({ post }) => {
    return (
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
                            <b>Author: </b>{post.author}
                        </Grid>
                        <Grid>
                            <b>Posted on: </b> {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
                        </Grid>
                    </Grid>

                </Typography>
            </Box>
        </Box>
    )
}

export default PostDetails;
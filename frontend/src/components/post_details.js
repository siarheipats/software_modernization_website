//date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';

const PostDetails = ({ post, setIsDrawerOpen, setOpenedPostDetails }) => {
    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper', boxShadow: 3 }}>
            <Box sx={{ my: 1, mx: 3 }}>
                <Grid container alignItems="center">
                    <Grid xs>
                        <Typography gutterBottom variant="h5" sx={{ mt: 2 }}>
                            <b>Title: </b>{post.title}
                        </Typography>
                        <Typography gutterBottom>
                            <b>Category: </b> {post.category} | <b>Software: </b>{post.softwareName}
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography gutterBottom variant="title">
                            <Tooltip title="Open">
                                <IconButton>
                                    <OpenInNewIcon onClick={() => { setIsDrawerOpen(true); setOpenedPostDetails(post) }} />
                                </IconButton>
                            </Tooltip>
                        </Typography>
                    </Grid>
                </Grid>
                <Typography color="text.primary" sx={{
                    display: '-webkit-box', overflow: 'hidden', WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 2
                }}>
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
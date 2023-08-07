import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

//date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';

const MyPostDetails = ({ post, deletePost, setShowEdit, setPostToEdit, setIsDrawerOpen, setOpenedPostDetails }) => {
    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Box sx={{ my: 1, mx: 3 }}>
                <Grid container alignItems="center">
                    <Grid xs>
                        <Typography gutterBottom variant="h5" sx={{ mt: 2 }}>
                            <b>Title: </b>{post.title}
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography gutterBottom variant="title">
                            <Tooltip title="Open">
                                <IconButton>
                                    <OpenInNewIcon onClick={() => { setIsDrawerOpen(true); setOpenedPostDetails(post) }} />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Delete">
                                <IconButton>
                                    <DeleteIcon onClick={() => deletePost(post._id)} />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Edit">
                                <IconButton>
                                    <EditIcon onClick={() => { setPostToEdit(post); setShowEdit(true) }} />
                                </IconButton>
                            </Tooltip>
                        </Typography>
                    </Grid>
                </Grid>
                <Typography color="text.primary" variant="body" sx={{
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
                            <b>Author: </b>{post.author} | <b>Software: </b>{post.softwareName} | <b>Category: </b> {post.category}
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

export default MyPostDetails;
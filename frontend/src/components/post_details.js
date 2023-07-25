import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));

const PostDetails = ({ post }) => {
    return (
        <Item>
            <p class="h4">Title: {post.title}</p>
            <p class="h5">Author: {post.author}</p>
            <p class="lead">
                {post.body}
            </p>


        </Item>
    )
}

export default PostDetails;
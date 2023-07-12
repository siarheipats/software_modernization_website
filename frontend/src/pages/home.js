import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Home = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <List component="nav" aria-label="mailbox folders">
                <ListItem>
                    <ListItemText primary="Software Modernization" />
                </ListItem>
                <ListItem>
                    <CircularProgress />
                </ListItem>
            </List>
        </Box>
    )
}

export default Home;
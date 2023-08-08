import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const ConfirmDeleteModal = ({ open, setOpen, post, functionToCall }) => {
    const handleClose = () => setOpen(false);

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
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <Box sx={style}>
                    <Grid container alignItems="center">
                        <Grid xs>
                            <Typography gutterBottom variant="h6" sx={{ mt: 2 }}>
                                Are you sure you want to delete {post.title}?
                            </Typography>
                        </Grid>
                        <Grid>
                            <Tooltip title="Open">
                                <IconButton>
                                    <CloseIcon onClick={() => { handleClose() }} />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </Grid>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        This post will be deleted and we won't be able to recover it.
                    </Typography>
                    <Button variant="outlined" color='error' sx={{ mt: 2 }} onClick={() => { functionToCall() }}>Delete</Button>
                </Box>
            </Modal>
        </div >
    );
}

export default ConfirmDeleteModal;
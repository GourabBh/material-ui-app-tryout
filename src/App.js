import * as React from 'react';
import {
    Button,
    Stack,
    Alert,
    CircularProgress,
    Snackbar,
    IconButton,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export default function App() {
    const [progress, setProgress] = React.useState(0);
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const action = (
        <React.Fragment>
            <Button color='secondary' size='small' onClick={handleClose}>
                UNDO
            </Button>
            <IconButton
                size='small'
                aria-label='close'
                color='inherit'
                onClick={handleClose}
            >
                <CloseIcon fontSize='small' />
            </IconButton>
        </React.Fragment>
    );

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) =>
                prevProgress >= 100 ? 0 : prevProgress + 10
            );
        }, 2000);

        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
        <>
            <Button variant='contained'>Hello Gourab!</Button>
            <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity='error'>
                    This is an error alert — check it out!
                </Alert>
                <Alert severity='warning'>
                    This is a warning alert — check it out!
                </Alert>
                <Alert severity='info'>
                    This is an info alert — check it out!
                </Alert>
                <Alert severity='success'>
                    This is a success alert — check it out!
                </Alert>
            </Stack>
            <Stack spacing={2} direction='row'>
                <CircularProgress
                    variant='determinate'
                    value={progress}
                ></CircularProgress>
            </Stack>
            <div>
                <Button color='secondary' onClick={handleClick}>
                    Open simple snackbar
                </Button>
                <Snackbar
                    open={open}
                    autoHideDuration={2000}
                    onClose={handleClose}
                    message='Note archived'
                    action={action}
                />
            </div>
            <div>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel1a-content'
                        id='panel1a-header'
                    >
                        Task 1
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Revise Herbert Schidt's Java the Complete Reference
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel2a-content'
                        id='panel2a-header'
                    >
                        Task 2
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>Revise MDN</Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </>
    );
}

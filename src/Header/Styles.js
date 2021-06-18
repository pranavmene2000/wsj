import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        borderBottom: '0.3px solid lightgrey',
        display: 'flex',
        flexDirection: 'column',
        padding: "0 100px 0 100px",
    },
    title: {
        fontFamily: 'Retina, Arial, Helvetica, sans-serif'
    },
    titleContainer: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    navLink: {
        // display: 'block',
        padding: '8px 10px',
        fontSize: 14,
        fontWeight: 300,
        fontFamily: 'Retina,Arial,Helvetica,sans-serif',
        color: 'black',
        '&:hover': {
            color: '#222',
            fontWeight: 500,
        }
    },
    search: {
        display: 'block',
        padding: '6px 10px',
        textDecoration: 'none',
        fontSize: 14,
        fontWeight: 400,
        fontFamily: 'Retina,Arial,Helvetica,sans-serif',
        color: 'grey',
        '&:hover': {
            color: '#0080C3',
            fontWeight: 500,
            backgroundColor: '#FFFFFF'
        }
    }
}));

export const aciveLinkStyles = {
    color: 'black',
    fontWeight: 500,
}

export const aciveLinkStylesForSearch = {
    fontWeight: 500,
    color: "#0080C3"
}
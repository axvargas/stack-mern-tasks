import { makeStyles } from '@material-ui/styles';


export default makeStyles({
    root: {
        margin: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textFieldName: {
        width: 400,
        marginTop: 15,

    },
    multiLined: {
        width: 400,
        marginTop: 15,
    },
    button: {
        marginTop: 15,
        background: '#2E3B55',   
        "&:hover": {
            background: "#6e6a6a !important",
        },
    },

});
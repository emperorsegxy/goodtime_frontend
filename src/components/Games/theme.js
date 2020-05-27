import { createMuiTheme} from "@material-ui/core";

const theme = createMuiTheme({
    typography: {
        h3: {
            fontFamily: "'Poppins', sans serif",
            fontWeight: 'bold',
            color: '#FFF',
            maxWidth: 600,
            lineHeight: '4.5rem',
        },
        h6: {
            fontFamily: "'Nunito Sans', sans serif",
            color: '#FFF',
            marginTop: 40,
        },
        h5: {
            color: '#FFF',
        },
        subtitle2: {
            color: '#FFF',
            opacity: .76,
        }
    }
});

export default theme;
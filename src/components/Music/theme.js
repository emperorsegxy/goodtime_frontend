import { createMuiTheme} from "@material-ui/core";

const theme = createMuiTheme({
    typography: {
        h6: {
            fontFamily: "'Nunito Sans', sans serif",
            fontWeight: 200,
            color: '#FFF',
            textDecoration: 'underline',
            marginBottom: 30,
            opacity: .76,
        },
        h3: {
            fontWeight: 'bold',
            color: '#FFF',
            maxWidth: 400,
            margin: "0 auto",
        }
    }
});

export default theme;
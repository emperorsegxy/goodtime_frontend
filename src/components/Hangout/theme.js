import { createMuiTheme} from "@material-ui/core";

const theme = createMuiTheme({
    typography: {
        h6: {
            color: '#FFF',
            fontWeight: 'bold',
        }
    },

    overrides: {
        MuiDrawer: {
            root: {
                width: '50%',
            },

            paperAnchorBottom: {
                height: '86%',
                width: '50%',
                margin: '0 auto',
                background: 'rgba(0, 0, 0, 0.76)',
                color: 'white',
            }
        },

        MuiButton: {
            root: {
                background: 'rgba(0, 0, 0, 0.59)',
                padding: '8px 40px !important',
                borderRadius: 'none',
                marginTop: 20,
                color: 'white',
                textDecoration: 'underline',
                outline: 'none !important',
            }
        }
    }
});

export default theme;
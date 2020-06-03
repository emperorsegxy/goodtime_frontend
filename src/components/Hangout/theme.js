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
                height: '96%',
                width: '50%',
                margin: '0 auto',
                background: 'transparent',
                color: 'white',
                boxShadow: 'none',
            }
        },

        MuiButton: {
            root: {
                padding: '12px 10px',
                color: '#FFF',
                background: '#FF4D3D',
                border: '1px solid #FF4D3D',
                marginTop: 0,
                textDecoration: 'none',
                borderRadius: 8,
                outline: "none",
            }
        }
    }
});

export default theme;
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
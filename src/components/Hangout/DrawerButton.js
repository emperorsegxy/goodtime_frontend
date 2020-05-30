import React from "react";
import {Button, withStyles} from "@material-ui/core";

const BlackUnderlinedButton = withStyles({
    root: {
        background: 'rgba(0, 0, 0, .6)',
        color: '#FFF',
        textDecoration: 'underline',
        borderRadius: 0,
        marginTop: 30,
    }
})(Button)

const DrawerButton = ({value}) => {
    return <BlackUnderlinedButton>{value}</BlackUnderlinedButton>;
}

export default DrawerButton;
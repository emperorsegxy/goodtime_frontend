import React from 'react';

const CreateButton = (props) => {
    console.log(props.style);
    return(
        <button style={props.style} onClick={props.action} className="btn my-playlist-btn" type="submit">
            {props.title}
        </button>
    )
}

export default CreateButton;
import React from 'react';

const PlaylistTitle = (props) => {
    return (
        <div className="form-group">
             <input type={props.type}
                    // name={props.name}
                    id="exampleFormControlSelect1"
                    className="form-control jungle" 
                    placeholder={props.placeholder}
                    value={props.value}
                    />
        </div>
    );
}
export default PlaylistTitle;
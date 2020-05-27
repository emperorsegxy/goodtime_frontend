import React, {useState} from 'react'

const useDropdown = (label, defaultState, options) => {
    const [state, setState] = useState(defaultState);

    const DropdownMaker = () => (
        <div className="form-group">
        <label htmlFor={label} className="add-music"> {label}</label>
            <select
            id={label}
            // id="exampleFormControlSelect1"
            value={state}
            onChange={e=>setState(e.target.value)}
            onBlur={e=>setState(e.target.value)}
            disabled={!options.length}
            className="form-control select-music"
            >
                <option value="" disabled>Music Type</option>
                {options.map(item=>
                    <option key={item} value={item}>{item}</option>
                    )}
            </select>
            </div>
       
    );
    return [state, DropdownMaker, setState]
}

export default useDropdown;
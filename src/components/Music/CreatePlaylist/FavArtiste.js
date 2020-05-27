import React, {useState} from 'react'

const useDropdown = (label, defaultState, options) => {
    const [state, setState] = useState(defaultState);

    const DropdownMaker = () => (
            <select
            id={label}
            value={state}
            onChange={e=>setState(e.target.value)}
            onBlur={e=>setState(e.target.value)}
            disabled={!options.length}
            id="exampleFormControlSelect2"
            className="form-control select-music"
            >
                <option value="" disabled>Favourite Artiste</option>
                {options.map(item=>
                    <option key={item} value={item}>{item}</option>
                    )}
            </select>
    );
    return [state, DropdownMaker, setState]
}

export default useDropdown;
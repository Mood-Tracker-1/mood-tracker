import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Prompt = () => {

    const dispatch = useDispatch();
    const dropdownValue = useSelector(state => state.dropdown.value);

    return(

        <div>
            <h1>hello</h1>
        </div>

    )
}

export default Prompt;
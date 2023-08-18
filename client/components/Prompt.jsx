import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../actions/actions'

const Prompt = (props) => {
    // const action = props.action
    const activity = props.property;
    const dispatch = useDispatch();

    const dropdownValue = useSelector(state => {
        state[activity]
    });

    const optionSelected = (event) => {
        const payload = {};
        // payload[props.action] = event.target.value
        payload[activity] = event.target.value
        return dispatch(actions.updateActivityActionCreator(payload))
    }

    return(
        <div>
            <p>{activity.slice(3)}</p><select value={dropdownValue} onChange={optionSelected}>
                <option value={'poor'}>Poor</option>
                <option value={'okay'} selected>Okay</option>
                <option value={'great'}>Great</option>
            </select>
        </div>
    );
};

export default Prompt;
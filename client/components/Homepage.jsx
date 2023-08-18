import React from 'react';
import Prompt from './Prompt.jsx';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../actions/actions.js';
// import Feed from './Feed.jsx';



const Homepage = () => {
    const activities = [];
    const prompts = [];
    const dispatch = useDispatch();

    const stateKeys = useSelector(state => { // get all properties from the state
        return Object.keys(state);
    })

    for (let i = 0; i < stateKeys.length; i++) { // how do we know what the activities are? We iterate through the state object

        if (stateKeys[i].slice(0, 3) === 'new') activities.push(stateKeys[i]); // look to see if the property name starts with 'new' and if it does, push property name strings to an array
    }
    
    // We need five dropdowns
    for(let i = 0; i < activities.length; i++) { // for loop that iterates through the activities array
        prompts.push(<Prompt property={activities[i]}/>); // create prompts based on the current activity and store into an array
    }

    const submit = () => {
        dispatch(actions.submitActionCreator())
    } 

    return(
        <div className='main-container'>

            <div className='homepage-header'>
                <h1>How're you feeling today?</h1>
            </div>

            <div className='prompt'>
                {prompts}
            </div>
            <button onClick={submit}>Save</button>
            {/* <Feed/> */}
        </div>
    );
};

//.
export default Homepage;
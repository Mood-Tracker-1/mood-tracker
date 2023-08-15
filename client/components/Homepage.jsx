import React from 'react';
import Prompt from './Prompt.jsx';

const Feed = () => {

    return(
        <div className='main-container'>

            <div className='homepage-header'>
                <h1>How're you feeling today?</h1>
            </div>

            <div className='prompt'>
                <Prompt/>
            </div>
            
        </div>
    );
};

export default Feed;
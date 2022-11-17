import React, { useState } from 'react';
import DisplayAll from '../components/DisplayAll';

const Main = (props) => {

    const [pirateList, setPirateList] = useState([]);

    return (
        <div>
            {}
            <DisplayAll 
                pirateList={pirateList} 
                setPirateList={setPirateList} 
            />
        </div>
    );
}

export default Main;
import React, { useState } from 'react';
import SearchPage from './SearchPage';
import Input from '../Input/Input';
import axios from 'axios';

const App = () => {
    const [inputValue, setInputValue] = useState('');
    const API = 'https://images-api.nasa.gov/search';
    const submitInputChange = e => {
        setInputValue(e.target.value);
        // axios.get(`${API}?q=sun&media_type=image`)
        //     .then((response) => {
        //         console.log(response);
        //     })
    }
    return (
        <>
            <SearchPage />
            <Input
                value={inputValue}
                onChange={submitInputChange}
                placeholder="e.g. sun"
            />
        </>
    );
}

export default App;

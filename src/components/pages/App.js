import React, { useState, useRef } from 'react';
import SearchPage from './SearchPage';
import Input from '../Input/Input';
import debounce from 'lodash.debounce';
import axios from 'axios';
import ResultPage from './ResultPage';
import { motion } from "framer-motion"

const App = () => {
    const [inputValue, setInputValue] = useState('');
    const [results, setResults] = useState([null]);

    const API = 'https://images-api.nasa.gov/search';

    const search = useRef(debounce(e => { e() }, 500)).current;
    const submitInputChange = e => {
        let searchValue = e.target.value;
        setInputValue(searchValue);
        search(() => {
            axios.get(`${API}?q=${searchValue}&media_type=image`)
                .then((response) => {
                    setResults(response.data.collection.items);
                })
                .catch((err) => console.log(err))
        });
    }
    return (
        <>
            {results[0] === null ? (
                <>
                    <SearchPage />
                    <Input
                        value={inputValue}
                        onChange={submitInputChange}
                        placeholder="e.g. sun"
                    />
                </>
            ) : (
                    <>
                        <ResultPage
                            results={results}
                        >
                            <motion.div
                                animate={{ y: 30 }}
                                initial={{ y: '50vh' }}
                            >
                                <Input
                                    value={inputValue}
                                    onChange={submitInputChange}
                                    placeholder="e.g. sun"
                                    loaded="true"
                                />
                            </motion.div>
                        </ResultPage>
                    </>
                )}

        </>
    );
}

export default App;

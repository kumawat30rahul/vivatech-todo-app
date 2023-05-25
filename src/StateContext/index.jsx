import React, { createContext, useState } from 'react';

const StateContext = createContext();

const StateProvider = ({ children }) => {
    const [allTaskList, setAllTaskList] = useState([]);

    return (
        <StateContext.Provider value={{
            allTaskList,
            setAllTaskList,
        }}>
            {children}
        </StateContext.Provider>
    );
};

export { StateContext, StateProvider };

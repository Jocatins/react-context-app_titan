import React, { createContext, useState} from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'In the name of the last titan', id: 1},
        {title: 'Beware of unseen troubles', id: 2},
        {title: 'Sleeping between dimensions', id: 1},
        {title: 'The 9th dimension', id: 1}
    ]);
    return ( 
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
     );
}

export default BookContextProvider;
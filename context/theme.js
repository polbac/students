import React from 'react';

const theme = {
    colors: {
        primary: '#7e02ff',
        secondary: '#83c341'
    },
    texts: {
        sizeTitle1: '1em',
        sizeTitle2: '1.2em',
        sizeTitle3: '0.75em'
    }
}
export const ThemeContext = React.createContext({
  ...theme
})

export default function ThemeProvider(props) {
    return (
        <ThemeContext.Provider value={{
            ...theme
        }}>
            {props.children}
       </ThemeContext.Provider>
    )
}
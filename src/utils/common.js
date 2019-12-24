import React from 'react';

const ThemeContext = React.createContext('light'); //多层级传值
const UserContext = React.createContext({ name: 'Guest'});
  
export {
    ThemeContext,
    UserContext
}
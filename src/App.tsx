import React from 'react';
// eslint-disable-next-line
import Home from './views/Home';
// eslint-disable-next-line
import {ThemeContext} from './utils/common.js';
import { withRouter} from 'react-router-dom';
import './assets/css/App.css';

import RouterMap  from './router.js';

const App: React.FC = () => {
  return (
    <div  className="App">
      <RouterMap/>
    </div>
    
    // <ThemeContext.Provider value='dark'>
    //   <div  className="App">
    //     Button
    //     <Home name="李"/>
    //   </div>
    // </ThemeContext.Provider>
  );
}

export default App;

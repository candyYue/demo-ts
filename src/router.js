import React,{Component} from 'react';
import { Route,Switch, BrowserRouter, Redirect} from 'react-router-dom';

import Admin from './views/Admin';
import User from './views/User';
import NotFound from './views/NotFound';

class RouterMap extends Component {
    // constructor(props, context){
    //     super(props, context);
    // }
    
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/Admin/:id' component={Admin}/>
                    <Redirect push to="/Admin/0" />
                    <Route path='/User' component={User}/>
                    <Route path='*' component={NotFound}/>
                </Switch>        
            </BrowserRouter>
        )
    }
}

export default  RouterMap
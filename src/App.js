import React from 'react';
import Search from './Search'; 
import Library from './Library';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 

export default function App() {
    return (

    <Router>
        <Switch> 
            <Route path='/' component= {Search} exact/>
            <Route path='/library' component= {Library} exact/>
            <Route component={Page404} />
        </Switch>
    </Router>
    ); 

function Page404() {
    return <h1> Page Not Found! </h1>; 
}
}

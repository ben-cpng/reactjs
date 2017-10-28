import React from 'react';
import Home from '../Home';
import Result from '../Result';
import { Link, Route } from 'react-router-dom';

class SearchApp extends React.Component {

    render() {
        return (
            <div>
                <h2>Search App</h2>
                    <div>
                        <div>
                            <Link to='/'>Go to Home</Link>
                            <Link to='/result'>Go to Result</Link>
                        </div>
                    
                        <Route exact path='/' component={Home} />
                        <Route path='/result' component={Result} />
                    </div>
            </div>
        );
    }
}

export default SearchApp;
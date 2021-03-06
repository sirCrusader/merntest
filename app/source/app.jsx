/**
 * Created by wizard on 7/20/17.
 */

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Redirect, browserHistory, withRouter } from 'react-router';

import IssueList from './IssueList.jsx';
import IssueEdit from './IssueEdit.jsx';

const contentNode = document.getElementById('contents');
const NoMatch = () => <p>Page Not Found</p>;

const App = (props) => (
    <div>
        <div className="header">
            <h1>Issue Tracker</h1>
        </div>
        <div className="contents">
            {props.children}
        </div>
        <div className="footer">
            Full source code available at this <a href="https://github.com/vasansr/pro-mern-stack">GitHub repository.</a>
        </div>
    </div>
);

App.propTypes = {
    children: React.PropTypes.object.isRequired,
};

const RoutedApp = () => (
    <Router history={browserHistory} >
        <Route path="/" component={App}>
            <IndexRoute component={Dashboard} />
            <Route path="/issues" component={withRouter(IssueList)} />
            <Route path="/issues/:id" component={IssueEdit} />
            <Route path="*" component={NoMatch} />
        </Route>
    </Router>
);

ReactDOM.render(<RoutedApp />, contentNode);

if (module.hot) {
    module.hot.accept();
}
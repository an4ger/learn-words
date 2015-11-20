import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router'

import Menu from './components/menu.js';
import Lists from './components/lists.js';
import List from './components/list.js';

ReactDom.render(
    (
        <Router>
            <Route path='/' component={Menu}>
                <IndexRoute component={Lists} />
                <Route path=':id' component={List} />
            </Route>
        </Router>
    ),
    document.body
);
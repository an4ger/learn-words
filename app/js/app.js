import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { setInitialData } from './data.js';

import Menu from './components/menu.js';
import VItems from './components/vocabulary_items.js';
import Vocabulary from './components/vocabulary.js';

setInitialData();

ReactDom.render(
    (
        <Router>
            <Route path='/' component={Menu}>
                <IndexRoute component={VItems} />
                <Route path=':id' component={Vocabulary} />
            </Route>
        </Router>
    ),
    document.getElementById('app')
);
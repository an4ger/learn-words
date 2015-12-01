import React from 'react';
import {getAllData} from '../data.js';
import { Link } from 'react-router';

export default React.createClass({
    getInitialState: function() {
        return {data: getAllData()};
    },
    render: function() {
        var vocabNodes = this.state.data.map((vocab, index) =>
            (
                <div key={index}>
                    <Link to={'/'+vocab.id} key={vocab.id}>
                        {vocab.name}
                    </Link>
                </div>
            )
        );
        return (
            <div className="lw_vocab">
                {vocabNodes}
            </div>
        );
    }
});

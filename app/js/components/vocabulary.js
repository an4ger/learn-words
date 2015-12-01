import React from 'react';
import {getItem} from '../data.js';

export default React.createClass({
    getInitialState: function() {
        return {item: getItem(this.props.params.id)};
    },
    render: function() {
        var words = this.state.item.words.map((words, index) => (
            <div key={index}>
                <span>{words.en}</span>
                -
                <span>{words.ru}</span>
            </div>
            )
        );
        return (
            <div>
                {words}
            </div>
        );
    }
});

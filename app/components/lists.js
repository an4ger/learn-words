import React from 'react';

var lists = require('json!../lists.json');

export default React.createClass({
    render: function() {
        var listsNodes = lists.map((list) =>
            (
                <div key={list.id}>
                    {list.name}
                </div>
            )
        );
        return (
            <div className="lw_lists">
                {listsNodes}
            </div>
        );
    }
});

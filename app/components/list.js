import React from 'react';

export default List = React.createClass({
    render: function() {
        return (
            <div>{this.props.params.id}</div>
        );
    }
});

import React from 'react';
import { Link } from 'react-router'

export default React.createClass({
    render: function() {
        return (
            <div>
                <ul>
                    <li><Link to='/'>home</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
});

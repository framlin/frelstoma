import React, { Component } from 'react';

var id = 0;


class PartialHeader extends Component {
    render() {
        let partial = this.props.partial;
        return (
            <div className="partial">
                <h3 className="partial-header">{partial.type}</h3>
                <div className="partial-header-name">{partial.name}</div>
            </div>
        )
    }
}
export default PartialHeader ;
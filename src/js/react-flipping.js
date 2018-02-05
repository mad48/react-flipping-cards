import React from "react";
import flipping from "flipping-cards";

require("flipping-cards/src/css/flipping.scss");

class ReactFlipping extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    };

    componentDidMount() {
        flipping.init(this.props.id, this.props.configuration);
    };

    componentWillUnmount() {
        if (typeof flipping !== 'undefined')  delete this.flipping;
    }

    render() {
        return (
            <div id={this.props.id} className="flipping">

                <div className="btn-backward"></div>

                <div className="cards"
                     dangerouslySetInnerHTML={{__html:  this.props.content.join('')}}>
                </div>

                <div className="btn-forward"></div>

            </div>)
    }
}


export default ReactFlipping;

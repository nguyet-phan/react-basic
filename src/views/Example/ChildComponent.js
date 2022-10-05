import React, { Fragment } from "react";

class ChildComponent extends React.Component {

    //re-render
    render() {
        console.log('call render: ', this.state)
        return (
            <>{/* cu phap rut gon cua fragment */}
                <div>child component: {this.props.name}</div>
            </>

        )
    }
}

export default ChildComponent;
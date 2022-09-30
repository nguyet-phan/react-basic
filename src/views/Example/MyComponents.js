import React, { Fragment } from "react";

class MyComponent extends React.Component {
    //state la 1 object {key:value,...}
    state = {
        name: 'Nguyet',
        age: 22
    }
    /*
    JSX: 
    - viet js trong html - trong dau {}
    - funtion javascript tra ve html: return => block (1 phan tu html)
        su dung fragment neu muon tra ve > 1 block (cu phap: <> .... </>)
    */
    render() {

        return (
            <>
                <div className="first">
                    This is a component.
                    <br></br>
                    My name is {this.state.name}.
                </div>
                <div className="second">
                    I am {this.state.age}.
                </div>
            </>

        )
    }
}

export default MyComponent;
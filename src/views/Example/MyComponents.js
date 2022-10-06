import React, { Fragment } from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {
    //state la 1 object {key:value,...}
    state = {
        firstName: '',
        lastName: '',
        arrJobs: [
            { id: 'Job1', title: 'Developer', salary: '1000$' },
            { id: 'Job2', title: 'Tester', salary: '400$' },
            { id: 'Job3', title: 'Project Manager', salary: '8000$' },

        ]
    }
    /*
    JSX: 
    - viet js trong html - trong dau {}
    - funtion javascript tra ve html: return => block (1 phan tu html)
        su dung fragment neu muon tra ve > 1 block (cu phap: <> .... </>)
    */

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value,
        })
    }
    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value,
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()//ngan chan hanh dong mac dinh cua input Submit -> ko load lai trang
        console.log('input: ', this.state)
    }
    //re-render
    render() {
        console.log('call render: ', this.state)
        return (
            <>{/* cu phap rut gon cua fragment */}
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input
                        type="text"
                        value={this.state.firstName}
                        onChange={(event) => this.handleChangeFirstName(event)}
                    />
                    <br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input
                        type="text"
                        value={this.state.lastName}
                        onChange={(event) => this.handleChangeLastName(event)}
                    />
                    <br />
                    <input
                        type="submit"
                        value="Submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>
                <ChildComponent
                    name={this.state.firstName}
                    age={'22'}
                    arrJobs={this.state.arrJobs}
                />

            </>

        )
    }
}

export default MyComponent;
import React from "react";

class AddComponent extends React.Component {
    state = {
        titleJob: '',
        salary: ''
    }

    handleChangeTitleJob = (event) => {
        this.setState({
            titleJob: event.target.value,
        })
    }
    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value,
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()//ngan chan hanh dong mac dinh cua input Submit -> ko load lai trang
        console.log('input: ', this.state)
    }

    render() {
        return (
            <form>
                <label htmlFor="fname">Job title:</label><br />
                <input
                    type="text"
                    value={this.state.titleJob}
                    onChange={(event) => this.handleChangeTitleJob(event)}
                />
                <br />
                <label htmlFor="lname">Salary:</label><br />
                <input
                    type="text"
                    value={this.state.salary}
                    onChange={(event) => this.handleChangeSalary(event)}
                />
                <br />
                <input
                    type="submit"
                    value="Submit"
                    onClick={(event) => this.handleSubmit(event)}
                />
                <hr />{/* tao dong ke ngang */}
            </form>
        )
    }
}
export default AddComponent;
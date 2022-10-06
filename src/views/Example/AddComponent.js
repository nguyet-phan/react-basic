import React from "react";

class AddComponent extends React.Component {
    state = {
        title: '',
        salary: ''
    }

    handleChangeTitleJob = (event) => {
        this.setState({
            title: event.target.value,
        })
    }
    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value,
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()//ngan chan hanh dong mac dinh cua input Submit -> ko load lai trang
        if (!this.state.title || !this.state.salary) {
            alert('Missing required paprams')
            return;
        }
        console.log('input: ', this.state)
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1000),//Math.floor: lam tron, Math.random: taoj so ngau nhien trong khoang 0->1
            title: this.state.title,
            salary: this.state.salary
        })

        this.setState({
            title: '',
            salary: ''
        })
    }

    render() {
        return (
            <form>
                <label htmlFor="fname">Job title:</label><br />
                <input
                    type="text"
                    value={this.state.title}
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
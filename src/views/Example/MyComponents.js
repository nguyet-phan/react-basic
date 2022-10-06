import React, { Fragment } from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
    //state la 1 object {key:value,...}
    state = {
        arrJobs: [
            { id: 'Job1', title: 'Developer', salary: '1000' },
            { id: 'Job2', title: 'Tester', salary: '400' },
            { id: 'Job3', title: 'Project Manager', salary: '800' },

        ]
    }

    addNewJob = (job) => {
        console.log('check job: ', job)
        // cach 1
        // let currentJobs = this.state.arrJobs;
        // currentJobs.push(job);
        // this.setState({
        //     arrJobs: currentJobs
        // })

        // cach 2
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    deleteJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currentJobs
        })
    }

    /*
    JSX: 
    - viet js trong html - trong dau {}
    - funtion javascript tra ve html: return => block (1 phan tu html)
        su dung fragment neu muon tra ve > 1 block (cu phap: <> .... </>)
    */

    //re-render
    render() {
        console.log('call render: ', this.state)
        return (
            <>{/* cu phap rut gon cua fragment */}
                <AddComponent
                    addNewJob={this.addNewJob}
                />

                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteJob={this.deleteJob}
                />

            </>

        )
    }
}

export default MyComponent;
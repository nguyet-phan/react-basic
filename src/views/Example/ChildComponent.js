import React, { Fragment } from "react";

/** Class component - statefull */
class ChildComponent extends React.Component {
    state = {
        showJobs: false,
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    render() {
        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        // cau lenh dieu kien: logic(true/false) ? ketqua - neu dk true) : ket qua - neu dk false)
        let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';
        console.log('check coditional: ', check)
        return (
            <>
                {/* neu showJobs = false thi hien button Show*/}
                {showJobs === false ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    <> {/* neu showJobs = true thi hien button Hide*/}
                        <div className="jobs-lists">
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary}
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }

            </>

        )
    }
}

// /** Funtion component - stateless */
// const ChildComponent = (props) => {
//     console.log('check props: ', props)
//     let { arrJobs } = props;
//     return (
//         <>
//             <div className="jobs-lists">
//                 {
//                     arrJobs.map((item, index) => {
//                         if (item.salary >= 500) {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary}$
//                                 </div>
//                             )
//                         }

//                     })
//                 }
//             </div>
//         </>

//     )
// }

export default ChildComponent;
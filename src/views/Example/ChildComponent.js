import React, { Fragment } from "react";

/** Class component - statefull */
// class ChildComponent extends React.Component {
//     render() {
//         //this.props: (object) lay data tu cha truyen xuong con
//         console.log('check props: ', this.props)
//         // let name = this.props.name;
//         // let age = this.props.age;
//         //cu phap rut gon (destructuring assigment) cua 2 cau tren:
//         let { name, age, arrJobs } = this.props;//su dung khi object co key vaf value trung ten
//       
//         return (
//             <>{/* cu phap rut gon cua fragment */}
//                 <div>child component name: {name} - {age}</div>
//                 <div className="jobs-lists">
//                     {
//                         arrJobs.map((item, index) => {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary}
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>
//             </>

//         )
//     }
// }

/** Funtion component - stateless */
const ChildComponent = (props) => {
    console.log('check props: ', props)
    let { arrJobs } = props;
    return (
        <>
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
        </>

    )
}

export default ChildComponent;
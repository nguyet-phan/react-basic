import React, { Fragment } from "react";

class ChildComponent extends React.Component {

    //re-render
    render() {
        //this.props: (object) lay data tu cha truyen xuong con
        console.log('check props: ', this.props)
        // let name = this.props.name;
        // let age = this.props.age;
        //cu phap rut gon (destructuring assigment) cua 2 cau tren:
        let { name, age } = this.props;//su dung khi object co key vaf value trung ten
        return (
            <>{/* cu phap rut gon cua fragment */}
                <div>child component name: {name} - {age}</div>
            </>

        )
    }
}

export default ChildComponent;
import React from 'react';
import uuid from "react-uuid"

class SkilsDes extends React.Component {
    constructor() {
        super();
        this.state = {
            hideInputSkils: false,
            addSkils: []
        }
    }
    toggleForm = (e) => {
        let name = e.currentTarget.attributes['tag'].value
        this.setState({
            [name]: !this.state[name]
        })
    }
    addItemOnKeyPress = (e) => {
        let hideElement = e.currentTarget.attributes['tag'].value.split(" ")[1];
        let fillArray = e.currentTarget.attributes['tag'].value.split(" ")[0];
        if (e.key == "Enter") {
            this.setState({
                [fillArray]: [...this.state[fillArray],
                {
                    id: uuid(),
                    value: e.target.value
                }
                ],
                [hideElement]: !this.state[hideElement]
            })
            e.target.value = ""
        }
    }
    onDeleteObj = (e, el) => {
        let name = e.currentTarget.attributes['tag'].value.split(" ")[0]
        let hideElement = e.currentTarget.attributes['tag'].value.split(" ")[1];
      
        let filtered = this.state[name].filter(filter => {
            return filter.id !== el.id;
        })

        this.setState({
            [name]: filtered,
            [hideElement]: false
        })
    }


    render() {
        return (
            <div className="design-inner-boxes">
                <label htmlFor="skils"><h4 tag="hideInputSkils" onClick={(e) => this.toggleForm(e)}>SKILLS</h4></label>

                {!this.state.hideInputSkils ? null :
                    <input className="input-skils-Des" id="skils" tag="addSkils hideInputSkils" type="text" onKeyPress={(e) => this.addItemOnKeyPress(e)} />

                }
                {
                    this.state.addSkils.map((el,index) => (
                        <div className="skils-div-Des" key={index}>
                            <i tag="addSkils hideInputSkils" onClick={(e) => this.onDeleteObj(e, el)}
                                className="fas fa-trash-alt trash-skils-Des displayNone"></i>
                            <p>{el.value}</p>
                        </div>

                    ))
                }
                {/* <h4></h4>
                <p>Adobe Photoshop</p>
                <p>Adobe Illustrator</p>
                <p>Adobr InDesinger</p>
                <p>Adobe Premier Pro</p>
                <p>Adobe After Effects</p>
                <p>Adobe Xd</p>
                <p>MS Office</p>
                <p>SolidWorks</p> */}
            </div>
        )
    }
}


export default SkilsDes;
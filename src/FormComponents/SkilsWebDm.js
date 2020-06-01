import React from 'react';
import uuid from "react-uuid";

class SkilsWebDm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hideInputSkils: false,
            addSkils: [],
           
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
            <div className="right-info-boxes">

                <div className="onAdd">
                    <label className="label-title" htmlFor="skils-input-id"><h4 tag="hideInputSkils" onClick={(e) => this.toggleForm(e)}>{this.props.name}</h4></label>

                </div>


                {!this.state.hideInputSkils ? null :

                    <input placeholder="Add your skils" className="input-skils" id="skils-input-id" type="text" tag="addSkils hideInputSkils" onKeyPress={(e) => this.addItemOnKeyPress(e)} />

                }
                <div className="skil-span-box">
                    {this.state.addSkils.map((el, index) => (
                        <div className="skils-div-add" key={index}>
                            <span >{el.value}</span>
                            <div className="trash-box displayNone">
                                <i tag="addSkils hideInputSkils" onClick={(e) => this.onDeleteObj(e, el)}
                                    className="fas fa-trash-alt trash-form-skils "></i>
                            </div>

                        </div>

                    ))}
                </div>
            </div>
        )
    }
}


export default SkilsWebDm;
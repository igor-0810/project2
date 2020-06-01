import React from 'react';
import uuid from "react-uuid";


class InformalEducation extends React.Component {
    constructor() {
        super();
        this.state = {
            hideInput: false,
            addItems: []
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
            <div className="right-info-boxes-DS">
                <label htmlFor="skils-input-id"><h4 tag="hideInput" onClick={(e) => this.toggleForm(e)}>INFORMAL EDUCATION</h4></label>
            <br/>
                {!this.state.hideInput ? null :

                    <input className="input-skils-ds" placeholder="Informal education" id="skils-input-id" type="text" tag="addItems hideInput" onKeyPress={(e) => this.addItemOnKeyPress(e)} />

                }
                 {
                    this.state.addItems.map((el, index) => (
                        <div className="informal-box" key={index}>
                            <i tag="addItems hideInput" onClick={(e) => this.onDeleteObj(e, el)}
                                className="far fa-trash-alt trash-informal-ds displayNone"></i>
                            <span className="bordered-span" >{el.value}</span><br/>
                        </div>

                    ))
                }


            </div>
        )
    }
}


export default InformalEducation;
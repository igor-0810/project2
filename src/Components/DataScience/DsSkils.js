import React from 'react';
import uuid from "react-uuid";


class DsSkils extends React.Component {
    constructor() {
        super();
        this.state = {
            addSkils: [],
            hideInputSkils: false,

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
    colorDivs = (e) => {
        let name = e.currentTarget.attributes["tag"].value
        this.setState({
            [name]: !this.state[name]
        })
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
    color = (e) => {
        if (e.target.style.backgroundColor === "") {
            e.target.style.backgroundColor = "#374455"
        } else {
            e.target.style.backgroundColor = "";
        }
    }

    render() {
        return (
            <div className="right-info-boxes-DS ">
                <label htmlFor="skils-input-id"><h4 tag="hideInputSkils" onClick={(e) => this.toggleForm(e)}>SKILS</h4></label>
                <br/>

                {!this.state.hideInputSkils ? null :

                    <input className="input-skils-ds" placeholder="Add your skils" id="skils-input-id" type="text" tag="addSkils hideInputSkils" onKeyPress={(e) => this.addItemOnKeyPress(e)} />

                }
                {this.state.addSkils.map((el, index) => (
                    <div key={index} className="skils-category">
                        <p className="skils-info">{el.value}</p>
                        <div className="trash-box displayNone">
                            <i tag="addSkils hideInputSkils" onClick={(e) => this.onDeleteObj(e, el)}
                                className="fas fa-trash-alt trash-form-skils"></i>
                        </div>
                        <div>
                            <div className="skils-bullets-borderd" onClick={(e) => this.color(e)}></div>
                            <div className="skils-bullets-borderd" onClick={(e) => this.color(e)}></div>
                            <div className="skils-bullets-borderd" onClick={(e) => this.color(e)}></div>
                            <div className="skils-bullets-borderd" onClick={(e) => this.color(e)}></div>
                            <div className="skils-bullets-borderd" onClick={(e) => this.color(e)}></div>                           
                        </div>
                    </div>
                ))}
            </div>

        )
    }
}


export default DsSkils;
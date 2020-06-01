import React from 'react';
import uuid from "react-uuid"

class Achievment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hideInputAchivements:false,
            addAchivements:[]
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
                <label htmlFor="textarea-achievements"><h4 tag="hideInputAchivements" onClick={(e) => this.toggleForm(e)}>{this.props.name}</h4></label>

                {!this.state.hideInputAchivements ? null :
                    <textarea placeholder="Achievement and Certificates" className="form-textarea" id="textarea-achievements" tag="addAchivements hideInputAchivements" type="text" onKeyPress={(e) => this.addItemOnKeyPress(e)} />

                }
                {
                    this.state.addAchivements.map((el, index) => (
                        <div className="achievements-box" key={index}>
                            <i tag="addAchivements hideInputAchivements" onClick={(e) => this.onDeleteObj(e, el)}
                                className="fas fa-trash-alt trash-achievements displayNone"></i>
                            <p>{el.value}</p>
                        </div>

                    ))
                }
            </div>
        )
    }
}


export default Achievment;
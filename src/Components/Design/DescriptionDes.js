import React from 'react';
import "./Design.css";
import ReactTooltip from 'react-tooltip'

class DescriptionDes extends React.Component {
    constructor() {
        super();
        this.state = {
            desc: "Graphic desinger with expertise in branding and logo design, packing design, typography, creative direction and illustration. Oriented into helping small businesses realize their unique vision.",
            descInput: false
        }
    }
    toggleForm = (e) => {
        let name = e.currentTarget.attributes['tag'].value

        this.setState({
            [name]: !this.state[name]
        })
    }
    fillInfo = (e) => {
        let name = e.target.name.split(" ")[0]
        let hide = e.target.name.split(" ")[1]
        if (e.key == "Enter") {
            this.setState({
                [name]: e.target.value,
                [hide]: !this.state[hide]
            })
        }

    }


    render() {
        return (
            <div className="first-inner-box">
                <p tag="descInput" onClick={(e) => this.toggleForm(e)}>{this.state.desc}</p>
                {!this.state.descInput ? null :
                <textarea className="textarea-description" type="text" name="desc descInput" id="title"
                 onKeyPress={(e) => this.fillInfo(e)}/>
                }
            </div>
        )
    }
}


export default DescriptionDes;
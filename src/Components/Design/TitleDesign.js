import React from 'react';
import "./Design.css"

class TitleDesign extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "KIRIL",
            surname: "NIKOLOVSKI",
            profession: "GRAPHIC DESINGER",
            hideInputName: false,
            hideInputSurname: false,
            hideInpProfession: false
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
            <div className="title-kiril">
                <label htmlFor="title"><h2 tag="hideInputName" onClick={(e) => this.toggleForm(e)}>{this.state.name}</h2></label>
                        <br/>
                {!this.state.hideInputName ? null
                    :
                    <input className="title-Inputs-des" placeholder="Enter your name" type="text" name="name hideInputName" id="title" onKeyPress={(e) => this.fillInfo(e)} />
                }


                <label htmlFor="proffTitle"><h2 tag="hideInputSurname" onClick={(e) => this.toggleForm(e)}>{this.state.surname}</h2></label> <br />
                {!this.state.hideInputSurname ? null
                    :
                    <input className="title-Inputs-des" placeholder="Professional title" type="text" id="proffTitle" name="surname hideInputSurname" onKeyPress={(e) => this.fillInfo(e)} />
                }


                <label htmlFor="profession"><h4 tag="hideInpProfession" onClick={(e) => this.toggleForm(e)}>{this.state.profession}</h4></label>
                {!this.state.hideInpProfession ? null
                    :
                    <input className="title-Inputs-des" type="text" id="profession" name="profession hideInpProfession"
                        placeholder="GRAPHIC-DESINGER"
                        onKeyPress={(e) => this.fillInfo(e)} />

                }



            </div>
        )
    }
}


export default TitleDesign;
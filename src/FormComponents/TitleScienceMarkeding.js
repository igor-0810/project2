import React from 'react';
import "../Components/DataScience/DataScience.css"

class TitleScienceMarketing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Enter Name",
            profession: "Professional Title",
            description: "Short description about your self",
            inputTitle: false,
            profTitleInput: false,
            descriptionInput: false
        }
    }
    toggleForm = (e) => {
        let name = e.currentTarget.attributes['tag'].value
        this.setState({
            [name]: !this.state[name]
        })
    }
    fillInfo = (e) => {
       let name= e.target.name.split(" ")[0]
       let hide= e.target.name.split(" ")[1]
       if(e.key == "Enter"){
        this.setState({
            [name]:e.target.value,
            [hide]: !this.state[hide]
        })
       }
       
    }

    render() {
        return (
            <div >
                <label htmlFor="title"><h3  tag="inputTitle" onClick={(e) => this.toggleForm(e)}>{this.state.name}</h3></label>
                {!this.state.inputTitle ? null
                    :
                    <input className="title-inputs" placeholder="Enter your name" type="text" name="name inputTitle" id="title" onKeyPress={(e)=>this.fillInfo(e)} />
                }
                    <br/>

                <label htmlFor="proffTitle"><p tag="profTitleInput" onClick={(e) => this.toggleForm(e)}>{this.state.profession}</p></label>
                {!this.state.profTitleInput ? null
                :
                    <input className="title-inputs" placeholder="Profesional title" type="text" id="proffTitle" name="profession profTitleInput"  onKeyPress={(e)=>this.fillInfo(e)}  />
                }

                <br/>
                <label htmlFor="descriptionInp"><h6 tag="descriptionInput" onClick={(e) => this.toggleForm(e)}>{this.state.description}</h6></label><br/>
               {!this.state.descriptionInput? null 
               :
               <textarea className="title-textarea" placeholder="Describe about your self" type="text" id="descriptionInp" name="description descriptionInput" onKeyPress={(e)=>this.fillInfo(e)} />
               
               }
            </div>
        )
    }
}


export default TitleScienceMarketing;
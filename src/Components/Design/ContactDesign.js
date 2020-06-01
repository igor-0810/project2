import React from 'react';

class ContactDesign extends React.Component {
    constructor() {
        super();
        this.state = {
            inputPhone: false,
            phone:"xxxxxxxxxxx",
            inputEmail:false,
            email:"kiril.nikolovskixx@gmail.com",
            inputLinkedIn:false,
            linkedIn:"linkedin.com/in/kiril-nikolovski",
            inputLocation:false,
            location:"Skopje, Macedonia"
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
            <div className="design-inner-boxes">
                <h4>CONTACT</h4>
                <label htmlFor="phone"><p tag="inputPhone" onClick={(e) => this.toggleForm(e)}>{this.state.phone}</p></label>
                {!this.state.inputPhone ? null
                    :
                    <input className="contact-inputs-Des" placeholder="Enter-Phone" type="text" name="phone inputPhone" id="phone" onKeyPress={(e) => this.fillInfo(e)} />
                }
                

                <label htmlFor="email"><p tag="inputEmail" onClick={(e) => this.toggleForm(e)}>{this.state.email}</p></label>
                {!this.state.inputEmail ? null
                    :
                    <input className="contact-inputs-Des" placeholder="Enter-email" type="text" id="email" name="email inputEmail" onKeyPress={(e) => this.fillInfo(e)} />
                }
                


                <label htmlFor="linkeIn"><p tag="inputLinkedIn" onClick={(e) => this.toggleForm(e)}>{this.state.linkedIn}</p></label>
                {!this.state.inputLinkedIn ? null
                    :
                    <input className="contact-inputs-Des" placeholder="Linkedin/Profille" type="text" id="linkeIn" name="linkedIn inputLinkedIn" onKeyPress={(e) => this.fillInfo(e)} />
                }
            


                <label htmlFor="location"><p tag="inputLocation" onClick={(e) => this.toggleForm(e)}>{this.state.location}</p></label>
                {!this.state.inputLocation ? null
                    :
                    <input className="contact-inputs-Des" placeholder="Location" type="text" id="location" name="location inputLocation" onKeyPress={(e) => this.fillInfo(e)} />
                }


                {/* <p >xxxxx</p>
                <p>kiril.nikolovskixx@gmail.com</p>
                <p>linkedin.com/in/kiril-nikolovski</p>
                <p>Skopje, Macedonia</p> */}
            </div>
        )
    }
}


export default ContactDesign;
import React from 'react';

class ContactDSDM extends React.Component {
    constructor() {
        super();
        this.state = {
            email:"Enter your email",
            phone:"Enter your phone",
            inputEmail:false,
            inputPhone:false
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
                <i className="fa fa-envelope" style={{fontSize:"12px"}} aria-hidden="true"></i><label htmlFor="email" tag="inputEmail" onClick={(e) => this.toggleForm(e)}>{this.state.email}</label>
                {!this.state.inputEmail ? null :
                <input type="text" onKeyPress={(e)=>this.fillInfo(e)} id="email" placeholder="Enter your email"  name="email inputEmail"/>   
            }
                <i className="fa fa-mobile" style={{fontSize:"15px"}} aria-hidden="true"></i><label htmlFor="phone"  tag="inputPhone" onClick={(e) => this.toggleForm(e)}>{this.state.phone}</label>
                {!this.state.inputPhone ? null :
                <input type="text" id="phone" onKeyPress={(e)=>this.fillInfo(e)} placeholder="Enter your phone" name="phone inputPhone"/>
                }
            </div>
        )
    }
}


export default ContactDSDM;
import React from 'react';

class ContactWeb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputEmail: false,
            inputPhone: false,
            inputLocation: false,
            imputTwiter: false,
            email: "Enter your email",
            phone: "Enter your phone",
            location: "Enter yout state/city",
            twiter: "Enter your twiter account"
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
            <div>
                <div className="label-icons-div">
                    <div className="label-icons">
                        <label htmlFor="span-email" tag='inputEmail' onClick={(e) => this.toggleForm(e)}>{this.state.email}</label>
                    </div>

                    <div className="contact-icons-div">
                        <i className="fa fa-envelope" style={{ fontSize: "13px" }} aria-hidden="true"></i>
                    </div>
                        
                {!this.state.inputEmail ? null
                    :
                    <input type="text" placeholder="Enter your email" name="email inputEmail" id="span-email" onKeyPress={(e) => this.fillInfo(e)} className='span-input-info' />
                }
                </div>
            
                
                

                <div className="label-icons-div">
                    <div className="label-icons">
                        <label className="label-title" htmlFor="span-phone" tag="inputPhone" onClick={(e) => this.toggleForm(e)}>{this.state.phone}</label>
                    </div>
                    <div className="contact-icons-div">
                        <i className="fa fa-mobile" aria-hidden="true" style={{ fontSize: "20px"}}></i>
                    </div>
                    {!this.state.inputPhone ? null
                    :
                    <input type="text" name="phone inputPhone" placeholder="Enter your phone" id="span-phone" onKeyPress={(e) => this.fillInfo(e)} className='span-input-info' />
                }
                </div>


                
                <div className="label-icons-div">
                    <div className="label-icons">
                        <label className="label-title" htmlFor="span-stateCity" tag="inputLocation" onClick={(e) => this.toggleForm(e)}>{this.state.location}</label>
                    </div>
                    <div className="contact-icons-div">
                        <i className="fa fa-map-marker" aria-hidden="true" style={{ fontSize: "16px" }}></i>
                    </div>
                    {!this.state.inputLocation ? null
                    :
                    <input type="text" name="location inputLocation" placeholder="Enter your city/county" id="span-stateCity" onKeyPress={(e) => this.fillInfo(e)} className='span-input-info' />
                }
                </div>

               

                <div className="label-icons-div">
                    <div className="label-icons">
                        <label className="label-title" htmlFor="span-twiter" tag="inputTwiter" onClick={(e) => this.toggleForm(e)}>{this.state.twiter}</label>
                    </div>
                    <div className="contact-icons-div">
                        <i className="fa fa-twitter" aria-hidden="true" style={{ fontSize: "15px" }}></i>
                    </div>
                    {!this.state.inputTwiter ? null
                    :
                    <input type="text" name="twiter inputTwiter" placeholder="Enter your twitter acount" id="span-twiter" onKeyPress={(e) => this.fillInfo(e)} className='span-input-info' />
                }
                </div>

               
            </div>
        )
    }
}


export default ContactWeb;

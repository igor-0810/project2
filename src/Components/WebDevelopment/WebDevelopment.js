import React from 'react';
import { Row, Col } from 'react-bootstrap';
import "./WebDevelopment.css";
import WebDevelopmentResume from '../../Photos/Web Development Resume.png';
import uuid from "react-uuid";
import Tips from "../../Tips";
import Img from "../../FormComponents/Img";
import SkilsWebDm from '../../FormComponents/SkilsWebDm';
import Achievment from '../../FormComponents/Achievmet';
import TitleWeb from './TitleWeb';
import ContactWeb from './ContactWeb';
import FormaWorEx from '../../FormComponents/FormaWorEx';



class WebDevelopment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sugestions: "",
            editMode: false,           
            interests: [],
            hideInterestInput: false,
        }
    }
    onEditing() {
        this.setState({
            editMode: !this.state.editMode
        })
    }
    sendArray(e) {
        let tipsTitle = Tips[e.currentTarget.attributes['tag'].value];
        this.props.onDescriptionList(tipsTitle);
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
            <div>
                        <button className="edit-button" onClick={() => this.onEditing()}>EDIT</button>
                        


                {!this.state.editMode ?
                    <div className="main-div-component maindiv-slika" id="divToPrint" >
                        <img src={WebDevelopmentResume} className="imgResume" alt="" />
                        <div tag="WebtipsHeader" onMouseOver={(e) => this.sendArray(e)} className="title-bg-hover"></div>
                        <div tag="WebtipsPhoto" onMouseOver={(e) => this.sendArray(e)} className="title-photo-hover"></div>
                        <div tag="WebtipsInfos" onMouseOver={(e) => this.sendArray(e)} className="title-contact-hover"></div>
                        <div tag="WebtipsWorkExpirience" onMouseOver={(e) => this.sendArray(e)} className="WoEx-hover-div"></div>
                        <div tag="WebtipsSkils" onMouseOver={(e) => this.sendArray(e)} className="skils-hover-div"></div>
                        <div tag="WebtipsAchivmentsInterests" onMouseOver={(e) => this.sendArray(e)} className="achievement-hover-div"></div>
                    </div>

                    :
                    <div className="main-div-component " id="divToPrint" >

                        <button className="edit-button" onClick={() => this.onEditing()}>EDIT</button>
                      
                        <Row className="first-row">
                            <Col md={6}>
                                <div className="left-main-box">
                                    <div className="black-side-box"></div>
                                    <div tag="WebtipsHeader" onClick={(e) => this.sendArray(e)}>   
                                                             
                                        <TitleWeb />
                                    </div>
                                    <div className="elon-img" tag="WebtipsPhoto" onClick={(e) => this.sendArray(e)}>
                                        <Img />
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="div-icons" tag="WebtipsInfos" onClick={(e) => this.sendArray(e)}>
                                    <ContactWeb />
                                </div>

                            </Col>

                            <div className="row-line"></div>
                        </Row>
                        <Row className="second-row">
                            <Col md={6} >
                                <div  tag="WebtipsWorkExpirience" onClick={(e) => this.sendArray(e)}>
                                    <FormaWorEx name="WORK EXPERIENCE" 
                                    changeDescription="Describe your task"
                                    changetitle="Title/Position" changeplace="Workplace/Company"/>

                                </div>
                                <div tag="WebtipsEdication" onClick={(e) => this.sendArray(e)} >
                                    <FormaWorEx name="EDUCATION" changetitle="Study Program" changeplace="Institution/Place of Education"
                                    changeDescription="Describe your education" />
                                </div>

                             
                            </Col>
                            <Col md={6} className="right-info">
                                <div tag="WebtipsSkils" onClick={(e) => this.sendArray(e)}>
                                    <SkilsWebDm name="SKILS & COMPETENCIENS" />
                                </div>
                                <div tag="WebtipsAchivmentsInterests" onClick={(e) => this.sendArray(e)}>
                                    <Achievment name="ACHIEVEMENTS & CERTIFICATES" />

                                </div>

                                <div className="right-info-boxes">
                                    <label htmlFor="textarea-interests"><h4 tag="hideInterestInput" onClick={(e) => this.toggleForm(e)}><b>INTERESTS</b></h4></label>
                                    <div className="icon-div-flex">
                                        {!this.state.hideInterestInput ? null :
                                            <input className="form-textarea" placeholder="Add your interests" id="textarea-interests" type="text" name="interests " tag="interests hideInterestInput" onKeyPress={(e) => this.addItemOnKeyPress(e)} />

                                        }
                                        {this.state.interests.map((el, index) => (
                                            <div className="interest-p" key={index}>
                                                <p>{el.value}</p>
                                                <div className="trash-box-interest displayNone">
                                                    <i tag="interests hideInterestInput" onClick={(e) => this.onDeleteObj(e, el)}
                                                        className="fas fa-trash-alt trash-interest "></i>
                                                </div>

                                            </div>

                                        ))}

                                    </div>
                                   
                                </div>
                            </Col>
                        </Row>
                    </div>


                }
            </div>

        )
    }
}


export default WebDevelopment;
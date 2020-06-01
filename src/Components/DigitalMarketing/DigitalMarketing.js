import React from 'react';
import { Row, Col } from "react-bootstrap";
import "./DigitalMarketing.css";
import DMresume from '../../Photos/DM-resume.png'
import Tips from '../../Tips';
import TitleScienceMarketing from '../../FormComponents/TitleScienceMarkeding';
import SkilsWebDm from '../../FormComponents/SkilsWebDm';
import Achievment from '../../FormComponents/Achievmet';
import Languages from '../../FormComponents/Languages';
import Img from '../../FormComponents/Img';
import ContactDSDM from '../../FormComponents/ContactDSDM';
import FormaWorEx from '../../FormComponents/FormaWorEx';

class DigitalMarketing extends React.Component {
    constructor() {
        super();
        this.state = {
            editMode: false,           
            sugestions: ""
        }
    }
    onEditing = () => {
        this.setState({
            editMode: !this.state.editMode
        })
    }
    toggleForm = (e) => {
        let name = e.currentTarget.attributes['tag'].value
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
    sendArray(e) {
        let tipsTitle = Tips[e.currentTarget.attributes['tag'].value];
        this.props.onDescriptionList(tipsTitle);
    }
    render() {

        return (
            <div >
                <button className="edit-button" onClick={() => this.onEditing()} >EDIT</button>

                {!this.state.editMode ?
                    <div className="main-div-DM DM-slika-box" id="divToPrint">                        
                        <img src={DMresume} className="img img-responsive DM-slika" alt=""/>
                        <div tag="DigitalMarketingtipsHeader" onMouseOver={(e) => this.sendArray(e)} className="title-bg-hover-Dm"></div>
                        <div tag="DataSciencetipsPhoto" onMouseOver={(e) => this.sendArray(e)} className="title-photo-hover-Dm"></div>
                        <div tag="DataSciencetipsInfos" onMouseOver={(e) => this.sendArray(e)} className="title-contact-hover-Dm"></div>
                        <div tag="DigitalMarketingtipsWorkExpirience" onMouseOver={(e) => this.sendArray(e)} className="WoEx-hover-div-Dm"></div>
                        <div tag="DigitalMarketingtipsSKils" onMouseOver={(e) => this.sendArray(e)} className="skils-hover-div-Dm"></div>
                        <div tag="DigitalMarketingtipsEducation" onMouseOver={(e) => this.sendArray(e)} className="edu-hover-div-Dm"></div>
                        <div tag="DigitalMarketingtipsAchievmens" onMouseOver={(e) => this.sendArray(e)} className="achievement-hover-Dm"></div>
                        <div tag="DigitalMarketingtipsLanguages" onMouseOver={(e) => this.sendArray(e)} className="Lang-hover-Dm"></div>
                        
                    </div>
                    :
                    <div className="main-div-DM" id="divToPrint">
                        <div className="main-box-DM">
                            <div className="DM-img" tag="DataSciencetipsPhoto" onClick={(e) => this.sendArray(e)}>
                                <Img />
                            </div>
                            <div className="inner-box-DM" tag="DigitalMarketintipsHeader" onClick={(e) => this.sendArray(e)}>
                                <TitleScienceMarketing />
                            </div>
                        </div>
                        <div className="DM-row-line" tag="DataSciencetipsInfos" onClick={(e) => this.sendArray(e)}>
                            <ContactDSDM />
                        </div>
                        <Row className="second-row">
                            <Col md={6} >
                                <div className="left-info-DM" tag="DigitalMarketingtipsWorkExpirience" onClick={(e) => this.sendArray(e)}>
                                    <FormaWorEx name="WORK EXPERIENCE"changetitle="Title/Position"
                                    changeDescription="Describe your task" changeplace="Workplace/Company" />
                                </div>
                                <div className="left-info-DM" tag="DigitalMarketingtipsEducation" onClick={(e) => this.sendArray(e)}>
                                    <FormaWorEx name="EDUCATION" changetitle="Study Program" 
                                    changeDescription="Describe your education" changeplace="Institution/Place of Education" />
                                </div>


                            </Col>
                            <Col md={6} className="right-info-DM">
                                <div  tag="DigitalMarketingtipsSKils" onClick={(e) => this.sendArray(e)}>
                                    <SkilsWebDm name="SKILS" />
                                </div>
                                <div tag="DigitalMarketingtipsAchievmens" onClick={(e) => this.sendArray(e)}>
                                    <Achievment name="ACHIEVEMENTS" />

                                </div>
                                <div tag="DigitalMarketingtipsLanguages" onClick={(e) => this.sendArray(e)}>
                                    <Languages />

                                </div>
                            </Col>
                        </Row>
                    </div>



                }

            </div>

        )
    }
}


export default DigitalMarketing;
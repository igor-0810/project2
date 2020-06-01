import React from 'react';
import { Row, Col } from 'react-bootstrap';
import "./DataScience.css";
import Tips from "../../Tips";
import TitleScienceMarketing from '../../FormComponents/TitleScienceMarkeding';
import DsSkils from './DsSkils';
import ProjectsPublication from './ProjectsPublication';
import Languages from '../../FormComponents/Languages';
import InformalEducation from './InformalEducation';
import Img from '../../FormComponents/Img';
import ContactDSDM from '../../FormComponents/ContactDSDM';
import FormaWorEx from '../../FormComponents/FormaWorEx';
import DSpic from "../../Photos/DS-pic.png";



class DataScience extends React.Component {
    constructor() {
        super();
        this.state = {
            editMode: false,
        }
    }
    onEditing = () => {
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
                <button className="edit-button" onClick={() => this.onEditing()} >EDIT</button>
                {!this.state.editMode ?
                    <div className="main-div-DataScience DM-slika" id="divToPrint">
                        <img src={DSpic} alt="" />
                        <div tag="DigitalMarketingtipsHeader" onMouseOver={(e) => this.sendArray(e)} className="title-bg-hover-DS"></div>
                        <div tag="DataSciencetipsPhoto" onMouseOver={(e) => this.sendArray(e)} className="title-photo-hover-DS"></div>
                        <div tag="DataSciencetipsInfos" onMouseOver={(e) => this.sendArray(e)} className="title-contact-hover-DS"></div>
                        <div tag="DataSciencetipsWorkExpirience" onMouseOver={(e) => this.sendArray(e)} className="WoEx-hover-div-DS"></div>
                        <div tag="DataSciencetipsSkils" onMouseOver={(e) => this.sendArray(e)} className="skils-hover-div-DS"></div>
                        <div tag="DataSciencetipsEdication" onMouseOver={(e) => this.sendArray(e)} className="edu-hover-div-DS"></div>
                        <div tag="DataSciencetipsProjectsAndPublication" onMouseOver={(e) => this.sendArray(e)} className="pro-pub-DS"></div>
                        <div tag="DataSciencetipsLanguages" onMouseOver={(e) => this.sendArray(e)} className="Lang-hover-DS"></div>
                        <div tag="DataSciencetipsInformalEducation" onMouseOver={(e) => this.sendArray(e)} className="inf-edu-DS"></div>
                    </div>

                    :

                    <div className="main-div-DataScience" id="divToPrint">
                        <button className="edit-button" onClick={() => this.onEditing()} >EDIT</button>

                        <div className="main-box-DataScience">
                            <div className="data-science-img" tag="DataSciencetipsPhoto" onClick={(e) => this.sendArray(e)}>
                                <Img />
                            </div>
                            <div className="inner-box-dataScience" tag="DigitalMarketingtipsHeader" onClick={(e) => this.sendArray(e)}>
                                <TitleScienceMarketing />
                            </div>
                        </div>
                        <div className="dataScience-row-line" tag="DataSciencetipsInfos" onClick={(e) => this.sendArray(e)}>
                            <ContactDSDM />
                        </div>
                        <Row className="second-row">
                            <Col md={6} className="left-info-DS">
                                <div className="onAdd-DS" tag="DataSciencetipsWorkExpirience" onClick={(e) => this.sendArray(e)}>

                                    <FormaWorEx name="WORK EXPERIENCE"
                                    changeDescription="Describe your task"                                    
                                    changetitle="Title/Position" changeplace="Workplace/Company"/>

                                </div>
                                <div className="onAdd-DS" tag="DataSciencetipsEdication" onClick={(e) => this.sendArray(e)}>

                                    <FormaWorEx name="EDUCATION" changetitle="Study Program" 
                                    changeDescription="Describe your education" changeplace="Institution/Place of Education"/>

                                </div>

                            </Col>
                            <Col md={6} className="right-info-DS">
                                <div tag="DataSciencetipsSkils" onClick={(e) => this.sendArray(e)}>
                                    <DsSkils />
                                </div>
                                <div tag="DataSciencetipsProjectsAndPublication" onClick={(e) => this.sendArray(e)}>
                                    <ProjectsPublication />
                                </div>
                                <div tag="DataSciencetipsLanguages" onClick={(e) => this.sendArray(e)}>
                                    <Languages />

                                </div>
                                <div tag="DataSciencetipsInformalEducation" onClick={(e) => this.sendArray(e)} >
                                    <InformalEducation />

                                </div>
                            </Col>
                        </Row>
                    </div>

                }
            </div>


        )
    }
}


export default DataScience;
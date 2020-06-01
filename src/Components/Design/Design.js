import React from 'react';
import "./Design.css";
import { Row, Col } from "react-bootstrap"
import TitleDesign from './TitleDesign';
import DescriptionDes from './DescriptionDes'
import FormDesign from './FormDesign';
import ContactDesign from './ContactDesign';
import SkilsDes from './SkilsDes';
import Tips from '../../Tips';
import Desresume from '../../Photos/Des-resume.png'

class Design extends React.Component {
    constructor(props) {
        super(props);
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
    sendArray(e) {
        let tipsTitle = Tips[e.currentTarget.attributes['tag'].value];
        this.props.onDescriptionList(tipsTitle);
    }


    render() {

        return (
            <div>
                <button className="edit-button" onClick={() => this.onEditing()} >EDIT</button>

                {!this.state.editMode ?
                    <div className="main-div-design maindiv-slika" id="divToPrint">
                        <img src={Desresume} className="img img-responsive" alt="" />

                        <div tag="DesigntipsPhoto" onMouseOver={(e) => this.sendArray(e)} className="title-photo-hover-Des"></div>
                        <div tag="DesigntipsInfos" onMouseOver={(e) => this.sendArray(e)} className="title-contact-hover-Des"></div>
                        <div tag="DesignWorkExpirience" onMouseOver={(e) => this.sendArray(e)} className="WoEx-hover-div-Des"></div>
                        <div tag="DesigntipsSkils" onMouseOver={(e) => this.sendArray(e)} className="skils-hover-div-Des"></div>
                        <div tag="DesignEdication" onMouseOver={(e) => this.sendArray(e)} className="edu-hover-div-Des"></div>

                    </div>
                    :
                    <div >
                        {/* <button className="edit-button" onClick={() => this.onEditing()} >EDIT</button> */}

                        <div className="main-div-design" id="divToPrint" >
                            {/* <Row >
                                <Col className="col-title">
                                   
                                </Col>
                            </Row> */}
                            <div className="first-row-design" tag="DesigntipsPhoto" onClick={(e) => this.sendArray(e)}>
                            <TitleDesign />
                            </div>
                            <Row className="second-row-design">
                                <Col className="main-col" tag="DesigntipsPhoto" onClick={(e) => this.sendArray(e)}>
                                    <DescriptionDes />

                                    <Row>
                                        <Col md={7}>
                                            <div tag="DesignWorkExpirience" onClick={(e) => this.sendArray(e)}>
                                                <FormDesign name="WORK EXPERIENCE" 
                                                changeDescription="Describe your task"
                                                changetitle="Title/Position" changeplace="Workplace/Company"/>
                                            </div>
                                            <div tag="DesigntipsInfos" onClick={(e) => this.sendArray(e)} >
                                                <ContactDesign />
                                            </div>
                                        </Col>
                                        <Col md={5}>
                                            <div tag="DesignEdication" className="education-Des" onClick={(e) => this.sendArray(e)}>
                                                <FormDesign name="EDUCATION" 
                                                changetitle="Study Program" changeplace="Institution/Place of Education"
                                                changeDescription="Describe your education" />

                                            </div>
                                            <div tag="DesigntipsSkils" onClick={(e) => this.sendArray(e)}>

                                                <SkilsDes />
                                            </div>

                                        </Col>
                                    </Row>
                                </Col>


                            </Row>
                        </div>
                    </div>

                }

            </div>
        )
    }
}




export default Design;
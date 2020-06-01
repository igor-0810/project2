import React, { Fragment, useState } from 'react';
import Laika1 from "../Photos/Laika/Laika1.png";
import Laika2 from "../Photos/Laika/Laika2.png";
import Laika3 from "../Photos/Laika/laika3.png";
import Laika4 from "../Photos/Laika/Laika4.png";
import Laika5 from "../Photos/Laika/Laika5.png";
import { Modal, ButtonToolbar, Button } from "react-bootstrap";
import popup from "../Photos/pop-up.png";



const WeAreLaika = (props) => {
    // console.log(props.tagname);
    const [lgShow, setLgShow] = useState(false);
    const LaikaEmail = {
        width: "100%",
        height: "58%",
        position: "absolute",
        top: "13%",
        // border: "1px solid red"

    }


    const LaikaPortofolio = {
        width: "100%",
        height: "119%",
        position: "absolute",
        top: "72%",
        // border: "1px solid red"

    }

    const LaikaWorkExpirience = {
        width: "100%",
        height: "53%",
        position: "absolute",
        top: "256%",
        // border: "1px solid red"

    }
    const LaikaSkils = {
        width: "100%",
        height: "63%",
        position: "absolute",
        top: '192%',
        // border: "1px solid red"

    }


    const LaikaEducation = {
        width: "100%",
        height: "98%",
        position: "absolute",
        top: "311%",
        left: "0px",
        // border: "1px solid red"


    }
    const LaikaSalary = {
        width: "100%",
        height: "113%",
        position: "absolute",
        top: "410%",
        left: "0px",
        // border: "1px solid red"

    }
    const paneDidMount = (node) => {
        if (node) {
            console.log(node)
            node.addEventListener("scroll", handleScroll);
        }
    }
    const handleScroll = (event) => {
        var node = event.target;
        const bottom = node.scrollHeight - node.scrollTop === node.clientHeight;
        if (bottom) {
            setLgShow(true)
            console.log(setLgShow)
        }
    }
    const h5Finished = {
        position: "absolute",
        top: "90px",
        left: "50px",
        fontWeight: "bold"
    }
    const pFInished = {
        position: 'absolute',
        top: '190px',
        left: '50px',
        fontWeight: 'bold'
    }
    const spanFinished = {
        position: 'absolute',
        left: '50px',
        top: '285px',
        color: '#de4573',
        fontWeight: 'bold',
        fontSize: '13px'
    }

    const imgWidth = { width: "100%" }
    return (
        <Fragment>
            <ButtonToolbar>
                <Button onClick={() => setLgShow(true)} style={{ display: "none" }}>Large modal</Button>

                <Modal
                    size="lg"
                    show={lgShow}
                    onHide={() => setLgShow(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >

                    <Modal.Body>
                        <div>
                            <h5 style={h5Finished}>Did you finish <br /> all three? Way to go!</h5>
                            <p style={pFInished}> Good luck on your next job! If <br /> you need help, counseling or <br />
                                just want to leave a suggestion,<br /> cоntact us at</p>
                            <span style={spanFinished}>hello@wearelaika.com</span>

                            <img src={popup} alt="" style={{ width: "100%", zIndex: "1" }} />

                        </div>

                    </Modal.Body>
                </Modal>
            </ButtonToolbar>
            <div ref={paneDidMount} style={{ height: "78vh", width: "85%", overflowY: "auto", position: "relative" }}>


                <img src={Laika1} alt="" style={imgWidth} />
                <img src={Laika2} alt="" style={imgWidth} />
                <img src={Laika3} alt="" style={imgWidth} />
                <img src={Laika4} alt="" style={imgWidth} />
                <img src={Laika5} alt="" style={imgWidth} />
                <div onMouseOver={props.hoverLinkedInLaika} style={LaikaEmail} className="LaikaEmail"></div>
                <div onMouseOver={props.hoverLinkedInLaika} style={LaikaPortofolio} className="LaikaPortofolio"></div>
                <div onMouseOver={props.hoverLinkedInLaika} style={LaikaWorkExpirience} className="LaikaWorkExpirience"></div>
                <div onMouseOver={props.hoverLinkedInLaika} style={LaikaSkils} className="LaikaSkils"></div>
                <div onMouseOver={props.hoverLinkedInLaika} style={LaikaEducation} className="LaikaEducation"></div>
                <div onMouseOver={props.hoverLinkedInLaika} style={LaikaSalary} className="LaikaSalary"></div>

            </div>
        </Fragment>
    );
}
export default WeAreLaika;
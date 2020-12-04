
import React from 'react';
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import FooterMain from "./FooterMain";
import WeAreLaika from './WeAreLaika';
import LinkedIn from './LinkedIn';
import DataScience from "./DataScience/DataScience";
import Design from './Design/Design';
import WebDevelopment from './WebDevelopment/WebDevelopment';
import DigitalMarketing from './DigitalMarketing/DigitalMarketing';
import html2canvas from 'html2canvas';
import jsPDF from "jspdf";
import Tips from "../Tips";




class MyTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sugestion: "Here's where you get comments on each section of the CV. e.g. you click on the photo and it gives you tips on how it should look like"
        }
    }
    hoverLinkedInLaika = (e) => {
        this.setState({
            sugestion: Tips[e.target.className]
        })
    }
    takeSugestion = (e) => {
        this.setState({
            sugestion: e,
            promenliva: this.props.match.params.type.replace('-', "")
        })
    }
    getPDF = () => {

        var divToPrint = document.querySelector('#divToPrint')
        // divToPrint.style.height = `${divToPrint.scrollHeight}px`
        divToPrint.style.height= "auto"
        var HTML_Width = divToPrint.clientWidth;
        var HTML_Height = divToPrint.clientHeight;
        var top_left_margin = 15;
        var PDF_Width = HTML_Width + (top_left_margin * 2);
        var PDF_Height = (PDF_Width * 1.5) + (top_left_margin * 2);
        var canvas_image_width = HTML_Width;
        var canvas_image_height = HTML_Height;

        var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;


        html2canvas(divToPrint, {
            allowTaint: true,
            scale:5
        }).then(function (canvas) {
            canvas.getContext('2d');
            var imgData = canvas.toDataURL("image/jpeg", 1.0);
            var pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
            pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);

            for (var i = 1; i <= totalPDFPages; i++) {
                pdf.addPage(PDF_Width, PDF_Height);
                pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height * i) + (top_left_margin * 4), canvas_image_width, canvas_image_height);
            }

            pdf.save("cv.pdf");
        });
        divToPrint.style.height= "80vh"

    };


    render() {
        const MyComponent = this.props.match.params.type.replace('-', "")
        const obj = {
            "DataScience": DataScience,
            "Design": Design,
            "WebDevelopment": WebDevelopment,
            "DigitalMarketing": DigitalMarketing
        }
        const DynamicComponent = obj[MyComponent];

        return (

            <div className="main-components">
                <div className="two-main-divs">
                    <div className="cv-box">
                        <Tabs>
                            <TabList className="my-tab-list">
                                <Tab >CV</Tab>
                                <Tab>LINKEDIN</Tab>
                                <Tab>WEARELAIKA</Tab>
                            </TabList>

                            <TabPanel>
                                <DynamicComponent onDescriptionList={(e) => this.takeSugestion(e)} />
                            </TabPanel>
                            <TabPanel>
                                <LinkedIn
                                    promenliva={MyComponent}
                                    hoverLinkedInLaika={this.hoverLinkedInLaika}
                                    onDescriptionList={(e) => this.takeSugestion(e)} />
                            </TabPanel>
                            <TabPanel>
                                <WeAreLaika
                                    promenliva={MyComponent}
                                    hoverLinkedInLaika={this.hoverLinkedInLaika}
                                    onDescriptionList={(e) => this.takeSugestion(e)} />
                            </TabPanel>

                        </Tabs>
                        <button className="download-button" onClick={this.getPDF}>DOWNLOAD</button>

                    </div>

                    <div className="editing-box">{this.state.sugestion}</div>
                </div>
                {/* <div className="footer-position">
                    <FooterMain />

                </div> */}
            </div>



        )
    }
}
export default MyTabs;
import React from 'react';
import Bill1 from "../Photos/bill1.png";
import Bill2 from "../Photos/bill2.png";
import Bill3 from "../Photos/bill3.png";
import Bill4 from "../Photos/bill4.png";

class LinkedIn extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const promenliva = this.props.promenliva
        
        const LinkedInHeader= { 
            width: "100%",
            height: "60%",
            position: "absolute",
            top:"0",
            left: '0',
            // border: "1px solid red"
         //backgroundColor: "green"
        }

      
        const LinledInAbout = {
            width: "100%", 
            height: "35%",
            position:"absolute",
            top:"60%",
            right:0,
            // border: "1px solid red"

           // backgroundColor: "gray"
        }
        const LinkedInWorkexpirience = {
            width:"100%",
            height: "42%",
            position: "absolute",
            top: "165%",
            
           //backgroundColor: "yellow"
        //    border: "1px solid red"

        }
        const LinkedInArtikels ={
            width: "100%", 
            height: "68%",
            position:"absolute",
            top:'96%',
            right:"0",
            // border: "1px solid red"

           //backgroundColor: "blue"
        }
  

        const LinkedInEducation ={
            width: "100%", 
            height: "40%",
            position:"absolute",
            top:"208%",
            
            // border: "1px solid red"

          // backgroundColor: "red"
        }
      
   


        return (
            <div style={{ height: "79vh", overflowY: "auto",marginLeft:"35px", width:"82%", position: "relative" }}>
                <img src={Bill1} alt="" />
                <img src={Bill2} alt="" />
                <img src={Bill3} alt="" />
                <img src={Bill4} alt="" />
                <div  onMouseOver={this.props.hoverLinkedInLaika} style= {LinkedInHeader} className ={`${promenliva}LinkedInHeader`}></div>
                <div  onMouseOver={this.props.hoverLinkedInLaika} style= {LinledInAbout} className ="LinledInAbout"></div>
                <div onMouseOver={this.props.hoverLinkedInLaika} style ={LinkedInWorkexpirience} className="LinkedInWorkexpirience"></div>
                <div onMouseOver={this.props.hoverLinkedInLaika} style ={LinkedInArtikels} className="LinkedInArtikels"></div>
                <div onMouseOver={this.props.hoverLinkedInLaika} style ={LinkedInEducation} className="LinkedInEducation"></div>
                
            </div>
        );
    }
}

export default LinkedIn;
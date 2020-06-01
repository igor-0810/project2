import React from 'react';
import "./TheUltimateCV.css"
import firstPagePic from "../Photos/Background for first page.png"
import FooterMain from './FooterMain';
import {Link} from "react-router-dom"

const TheUltimateCV = () => {

    return (
        <div >            
            <div>
                <div className="flex-container">
                    <div className="left-box">
                        <h1>The Ultimate <br /> CV & Portfolio Check - List</h1>
                        <p>Are you a Wev Developer, Data scientist, Digital Marketer or a Desinger? <br />
                            Have your CV and portfplio in check and create a 5 star representtation <br /> of your skils with this guide.</p>
                            <Link to="/category" className="violet-button">Step inside
                            </Link>
                        
                    </div>
                    <div className="right-box">
                        <img src={firstPagePic} className="img-rigthtBox" alt="" />
                    </div>
                </div>
                {/* <FooterMain /> */}

            </div>
        </div>
    )
}

export default TheUltimateCV;
import React, {useState} from 'react';


const Img = (props) => {

   const [image,setImage] =useState(null);

    const styleImg ={
        width:"100%",
        height:"100%",
        borderRadius: "50%",
        cursor: "pointer"
       
    }
    const styleInput ={
        width:"90px" ,
        height: "90px",
        borderRadius:"50%",
        position: "absolute",
        left: "0",
        top: "0",
        opacity: "0",
        cursor:"pointer"
    }
    const iconStyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        color: "#374455",
        fontSize: "60px"
    }
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage(
               URL.createObjectURL(img)
            ); 
    }
    

    
}
   
    return (
        <div  className="div-img" >
            {image == null ? <i className="fa fa-user-plus" aria-hidden="true" style={iconStyle}></i>
            :
            <img src={image} alt="image" style= {styleImg} />
        }
                <input type="file"
            onChange={onImageChange}
            style={styleInput}
        />
        </div>
    );
    }
export default Img;
import React from 'react';
import {Link} from 'react-router-dom'

const CategoryCard = (props) => {

    return (
        <div className="category-card">
            <h3>{props.name}</h3>
            <Link to={`${props.name.replace(" ", "-" )}`}>Choose</Link>
           
        </div>
    )
}

export default CategoryCard;
import React from 'react';
import CategoryCard from './CategoryCard';

class ChooseCategory extends React.Component {
    constructor() {
        super();
        this.state = {
            name: ['Web Development', "Data Science", "Digital Marketing", "Design"]
        }
    }
    render() {
        return (
            <div className="choose-category">
                <div className='box-title'>
                <h1>Choose Your Category</h1>
                </div>
                 
                    <div className='category-boxes'>
                    {this.state.name.map((el, index) => (
                        <CategoryCard key={index} name={el} />
                    ))}
                    </div>
                   
                

                <div className="choose-category-footer">
                    <div className="category-footer1">
                        <div className="footer1-box">
                            <span>Do you want to learn hands-on digital skils</span>
                            <a href="https://www.wearelaika.com/" target="_blank">visit brainster</a>
                        </div>

                    </div>
                    <div className="category-footer2">
                        <div className="footer2-box">
                            <span>Do you want ro recive jop offers by IT Companies</span>
                            <a href="https://www.wearelaika.com/" target="_blank" >visit laika</a>
                        </div>

                    </div>
                </div>

            </div>
        )
    }

}

export default ChooseCategory;
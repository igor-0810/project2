import React from 'react';
import "../Components/WebDevelopment/WebDevelopment.css";
import uuid from "react-uuid"

class FormaWorEx extends React.Component {
    constructor() {
        super();
        this.state = {
            editingMode: false,
            hideFormWeb: false,
            title: "",
            workplaceCompany: "",
            yearFrom: "",
            yearUntil: "",
            city: "",
            achievement: "Achivements/Task",
            isChecked: true,
            descLi: [],
            id: uuid(),
            addItems: [],
            editItems: {}
        }
    }
    toggleForm = (e) => {
        let name = e.currentTarget.attributes['tag'].value
        this.setState({
            [name]: !this.state[name]
        })
    }
    change = (e) => {
        if (e.target.type === "checkbox") {
            if (e.target.checked === true) {
                this.setState({
                    isChecked: !this.state.isChecked,
                    yearUntil: "Present"
                })
            } else {
                this.setState({
                    isChecked: !this.state.isChecked,
                    yearUntil: ""
                })
            }
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })

        }

    }
    takeList = (e) => {
        if (e.key == "Enter") {
            this.setState({
                descLi: [...this.state.descLi, e.target.value],

            })
            e.target.value = ""
        }

    }
    submit = (e) => {
        e.preventDefault()
        if (this.state.editingMode == false) {
            if(this.state.title=="" || this.state.workplaceCompany == "" || this.state.yearFrom == "" || this.state.yearUntil == "" || this.state.city == "" ){
                alert("Fill all inputs")
            }else {
            let obj = {
                title: this.state.title,
                workplaceCompany: this.state.workplaceCompany,
                yearFrom: this.state.yearFrom,
                yearUntil: this.state.yearUntil,
                city: this.state.city,
                achievement: this.state.achievement,
                isChecked: this.state.isChecked,
                descLi: this.state.descLi,
                id: this.state.id
            }
            this.setState({
                addItems: [...this.state.addItems, obj],
                id: uuid(),
                hideFormWeb: false,
                title: "",
                workplaceCompany: "",
                yearFrom: "",
                yearUntil: "",
                city: "",
                achievement: "Achivements/Task",
                isChecked: false,
                descLi: [],
            
            })
        }
        } else {
          if(this.state.title=="" || this.state.workplaceCompany == "" || this.state.yearFrom == "" || this.state.yearUntil == "" || this.state.city == ""){
              alert("fill all inputs")
          }else{
            let editObj = {
                title: this.state.title,
                workplaceCompany: this.state.workplaceCompany,
                yearFrom: this.state.yearFrom,
                yearUntil: this.state.yearUntil,
                city: this.state.city,
                achievement: this.state.achievement,
                isChecked: this.state.isChecked,
                descLi: this.state.descLi,
                id: this.state.id
            }
            let copyAddItems = this.state.addItems.slice()
            this.state.addItems.forEach((el, index) => {
                if (el.id == editObj.id) {
                    copyAddItems.splice(index, 1, editObj)
                }
            })
            this.setState({
                addItems: copyAddItems,
                hideFormWeb: false,
                editingMode: false,
                id: uuid(),
                hideFormWeb: false,
                title: "",
                workplaceCompany: "",
                yearFrom: "",
                yearUntil: "",
                city: "",
                achievement: "Achivements/Task",
                isChecked: false,
                descLi: [],
            })
        }
        }
    }
    onEditing = (e, el) => {
        this.setState({
            hideFormWeb: true,
            editingMode: true,
            title: el.title,
            workplaceCompany: el.workplaceCompany,
            yearFrom: el.yearFrom,
            yearUntil: el.yearUntil,
            city: el.city,
            achievement: el.achievement,
            isChecked: el.isChecked,
            descLi: [],
            id: el.id
        })
    }
    onDeleteObj = (e, el) => {
        
        // let name = e.currentTarget.attributes['tag'].value.split(" ")[0]
        // let hideElement = e.currentTarget.attributes['tag'].value.split(" ")[1];

        let filtered = this.state.addItems.filter(filter => {
            return filter.id !== el.id;
        })

        this.setState({
            addItems: filtered,
            // [hideElement]: false

        })
        }

    render() {

        return (
            <div >
                <div className="onAdd workEduadd" >
                    <h4 ><b>{this.props.name}</b></h4>
                    <button className="displayNone" tag="hideFormWeb" onClick={(e) => this.toggleForm(e)}>Add</button>
                </div>
                {!this.state.hideFormWeb ? null :
                    <div className="form-work">
                        <input type="text" className="form-title"
                            value={this.state.title}
                            onChange={(e) => this.change(e)}
                            name="title"
                            placeholder={this.props.changetitle} />

                        <input type="text" className="form-title"
                            value={this.state.workplaceCompany}
                            onChange={(e) => this.change(e)}
                            name="workplaceCompany"
                            placeholder={this.props.changeplace} />


                        <input type="text" className="form-year"
                            value={this.state.yearFrom}
                            onChange={(e) => this.change(e)}
                            name="yearFrom"
                            placeholder="mm/yyyy" />

                        <input type="text" placeholder="mm/yyyy"
                            value={this.state.yearUntil}
                            className="form-year"
                            onChange={(e) => this.change(e)}
                            name="yearUntil" />

                        <label htmlFor="present" className="present-Label">Present</label>
                        <input type="checkbox" id="present" className="inpCheck" name="isChecked" value={this.state.isChecked}
                            onChange={(e) => this.change(e)} />
                        <br />

                        <input type="text" className="form-city"
                            value={this.state.city}
                            onChange={(e) => this.change(e)}
                            name="city"
                            placeholder="City/Country" />

                        <input type="text" className="form-achievement"
                            value={this.state.achievement}
                            onChange={(e) => this.change(e)}
                            name="achievement"
                            placeholder="Achivements/Task" />


                        <textarea className="form-textarea" type="text" placeholder={this.props.changeDescription}
                            name="textArea"
                            //   value={this.state.inputVal} 
                            onKeyPress={(e) => this.takeList(e)} />
                        <ul className="form-ul">
                            {this.state.descLi.map((el, index) => (

                                <li className="form-desc-li" key={index}>{el}</li>

                            ))}

                        </ul>
                        <button className="form-web-submit" type="submit" onClick={(e) => this.submit(e)}>Add Info</button>
                    </div>
                }
                {this.state.addItems.map((el, index) => (
                    <div className="left-inner-boxes" key={index}>
                        <div className="color-side-box"></div>
                        <div className="inner-box-content">
                            <i tag="addItems" onClick={(e) => this.onDeleteObj(e, el)}
                                className="fas fa-trash-alt trash-form displayNone"></i>

                            <h5 ><b>{el.title}</b></h5>
                            <h5 >{el.workplaceCompany}</h5>

                            <div className="span-divs">
                                <span className="left-up-spans">{el.yearFrom}/{el.yearUntil}</span>
                                <span className="left-down-spans">{el.achievement}</span>
                                <span className="right-spans">{el.city}</span>
                            </div>
                            <ul className="left-info-ul">
                                {el.descLi.map((list, index) => (
                                    <li key={index}>{list}</li>
                                ))}
                            </ul>

                            <i className="far fa-edit editIcon displayNone" onClick={(e) => this.onEditing(e, el)}></i>

                        </div>
                    </div>
                ))}

            </div>
        )
    }
}


export default FormaWorEx;
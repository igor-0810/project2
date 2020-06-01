import React from 'react';
import uuid from 'react-uuid'

class FormDesign extends React.Component {
    constructor() {
        super();
        this.state = {
            hideForm: false,
            editingMode: false,
            changeItems: {
                year: "",
                workplace: "",
                title: "",
                describe: "",
                id: uuid()
            },
            addItems: []


        }
    }
    toggleForm = (e) => {
        let name = e.currentTarget.attributes['tag'].value
        this.setState({
            [name]: !this.state[name]
        })
    }
    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });

    }

    submit = (e) => {
        e.preventDefault()
        if (this.state.editingMode == false) {
            if (this.state.year == "" || this.state.workplace == "" || this.state.title == "" || this.state.describe == "") {
                alert("fill all inputs")
            } else {
                let obj = {
                    year: this.state.year,
                    workplace: this.state.workplace,
                    title: this.state.title,
                    describe: this.state.describe,
                    id: this.state.id
                }
                this.setState({
                    addItems: [...this.state.addItems, obj],
                    year: "",
                    workplace: "",
                    title: "",
                    describe: "",
                    id: uuid(),
                    hideForm: false
                });
            }

        } else {
            if (this.state.year == "" || this.state.workplace == "" || this.state.title == "" || this.state.describe == "") {
                alert("fill all inputs")
            } else {
                let editObj = {
                    year: this.state.year,
                    workplace: this.state.workplace,
                    title: this.state.title,
                    describe: this.state.describe,
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
                    hideForm: false,
                    editingMode: false,
                    year: "",
                    workplace: "",
                    title: "",
                    describe: "",
                    id: uuid(),
                })
            }

        }
    }
    onEditing = (e, el) => {
        this.setState({
            hideForm: true,
            editingMode: true,
            year: el.year,
            workplace: el.workplace,
            title: el.title,
            describe: el.describe,
            id: el.id
        })

    }

    onDeleteObj = (e, el) => {
        let name = e.currentTarget.attributes['tag'].value.split(" ")[0]

        let filtered = this.state[name].filter(filter => {
            return filter.id !== el.id;
        })

        this.setState({
            [name]: filtered,
            // [hideElement]: false

        })


    }

    render() {

        return (
            <div className="design-inner-boxes ">
                <div className="onAdd-Des">
                    <h4>{this.props.name}</h4>
                    <button className="displayNone" tag="hideForm" onClick={(e) => this.toggleForm(e)}>Add</button>
                </div>

                {!this.state.hideForm ? null :
                    <div >
                        <input type="text" className="form-year-Des"
                            value={this.state.year}
                            onChange={(e) => this.change(e)}
                            name="year"
                            placeholder="mm/yyyy" />
                        <br />

                        <input type="text" className="form-inputs-Des"
                            value={this.state.workplace}
                            onChange={(e) => this.change(e)}
                            name="workplace"
                            placeholder={this.props.changetitle} />
                        <br />

                        <input type="text" className="form-inputs-Des"
                            value={this.state.title}
                            onChange={(e) => this.change(e)}
                            name="title"
                            placeholder={this.props.changeplace} />
                        <br />

                        <textarea type="text" className="form-textarea-Des"
                            value={this.state.describe}
                            onChange={(e) => this.change(e)}
                            name="describe"
                            placeholder={this.props.changeDescription} />
                        <br />

                        <button className="form-Des-submit" type="submit" onClick={(e) => this.submit(e)}>Add Info</button>

                    </div>
                }
                {this.state.addItems.map((el, index) => (
                    <div className="formWork-div-Des" key={index}>
                        <i tag="addItems" onClick={(e) => this.onDeleteObj(e, el)}
                            className="fas fa-trash-alt trash-form-Des displayNone"></i>
                        <p><b>{el.year}</b></p>
                        <p>{el.workplace}</p>
                        <p>{el.title}</p>
                        <p>{el.describe}</p>
                        <i className="far fa-edit editIcon displayNone" onClick={(e) => this.onEditing(e, el)}></i>

                    </div>
                ))}


            </div>
        )
    }
}


export default FormDesign;
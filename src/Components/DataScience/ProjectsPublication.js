import React from 'react';
import uuid from 'react-uuid'

class ProjectsPublication extends React.Component {
    constructor() {
        super();
        this.state = {
            hideInput: false,
            projectsDesc: []
        }
    }
    toggleForm = (e) => {
        let name = e.currentTarget.attributes['tag'].value
        this.setState({
            [name]: !this.state[name]
        })
    }
    addItemOnKeyPress = (e) => {
        let hideElement = e.currentTarget.attributes['tag'].value.split(" ")[1];
        let fillArray = e.currentTarget.attributes['tag'].value.split(" ")[0];
        if (e.key == "Enter") {
            this.setState({
                [fillArray]: [...this.state[fillArray],
                {
                    id: uuid(),
                    value: e.target.value
                }
                ],
                [hideElement]: !this.state[hideElement]
            })
            e.target.value = ""
        }
    }
    onDeleteObj = (e, el) => {
        let name = e.currentTarget.attributes['tag'].value.split(" ")[0]
        let hideElement = e.currentTarget.attributes['tag'].value.split(" ")[1];
      
        let filtered = this.state[name].filter(filter => {
            return filter.id !== el.id;
        })
        this.setState({
            [name]: filtered,
            [hideElement]: false
        })
    }


    render() {
        return (
            <div className="right-info-boxes-DS">
                <label htmlFor="textarea-achievements"><h4 tag="hideInput" onClick={(e) => this.toggleForm(e)}>PROJECTS AND PUBLICATIONS</h4></label>
                {!this.state.hideInput ? null :
                    <textarea className="form-textarea-ds" placeholder="Projects and Publication" id="textarea-achievements" tag="projectsDesc hideInput" type="text" onKeyPress={(e) => this.addItemOnKeyPress(e)} />

                }
                {
                    this.state.projectsDesc.map((el, index) => (
                        <div className="achievements-box-ds" key={index}>
                            <i tag="projectsDesc hideInput" onClick={(e) => this.onDeleteObj(e, el)}
                                className="far fa-trash-alt trash-achievements-ds displayNone"></i>
                            <p >{el.value}</p>
                        </div>

                    ))
                }
            </div>
        )
    }
}


export default ProjectsPublication;
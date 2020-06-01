import React from 'react';

class TitleWeb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Enter Name",
            profession: "Profesional/Title",
            description: "Short engaging about your self",
            inputTitle: false,
            profTitleInput: false,
            descriptionInput: false
        }
    }
    toggleForm = (e) => {
        let name = e.currentTarget.attributes['tag'].value
        this.setState({
            [name]: !this.state[name]
        })
    }
    fillInfo = (e) => {
        let name = e.target.name.split(" ")[0]
        let hide = e.target.name.split(" ")[1]
        if (e.key == "Enter") {
            this.setState({
                [name]: e.target.value,
                [hide]: !this.state[hide]
            })
        }

    }


    render() {
        return (
            <div className="inner-box-content1">
                    <label className="label-title" htmlFor="h5-title">
                    
                        <h3 tag="inputTitle" onClick={(e) => this.toggleForm(e)}
                        >{this.state.name}</h3>

                    </label>

                {!this.state.inputTitle ? null
                    :
                    <input type="text" placeholder="Enter Name" name="name inputTitle" id="h5-title" onKeyPress={(e) => this.fillInfo(e)} className="form-title" />
                }
                <label className="label-title" htmlFor="p-title"><p tag="profTitleInput" onClick={(e) => this.toggleForm(e)}>{this.state.profession}</p></label>
                {!this.state.profTitleInput ? null
                    :
                    <input type="text" placeholder="Your profession title" id="p-title" name="profession profTitleInput" onKeyPress={(e) => this.fillInfo(e)} className="prof-title" />
                }
                <label className="label-title" htmlFor="h6-title"><h6 tag="descriptionInput" onClick={(e) => this.toggleForm(e)}>{this.state.description}</h6></label>
                {!this.state.descriptionInput ? null
                    :
                    <input type="text" id="h6-title" placeholder="Describe about your self" name="description descriptionInput" onKeyPress={(e) => this.fillInfo(e)} className="form-title" />
                }
            </div>
        )
    }
}

export default TitleWeb;
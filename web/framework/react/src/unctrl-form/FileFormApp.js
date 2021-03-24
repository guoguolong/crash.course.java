import React from 'react'

export default class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.fileInput.current.files)
        alert(`A name was submitted: ${this.fileInput.current.files[0].name}`);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
            <input type="file" ref={this.fileInput} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
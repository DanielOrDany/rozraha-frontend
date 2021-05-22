import React from "react";

export default class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    submitHandler = (event) => {
        event.preventDefault();
    };

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div>
                    <label htmlFor="title">Post Title</label>
                    <input type="text" id="title" />
                </div>
                <button type="submit">Create</button>
            </form>
        );
    }
}

import React, { Component } from "react";

import styled from "styled-components";

const FormBlock = styled.form`
display: flex;
margin-top: 20px;
input {
    width: auto;
    flex-grow: 1;
    margin-right: 3px;
  }
`;

class PostAddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    onValueChange = (e) => {
        this.setState({ text: e.target.value })
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({ text: '' });
    }
    render() {
        return (
            <FormBlock
                onSubmit={this.onSubmit}
            >
                <input
                    type="text"
                    placeholder="О чем Вы думаете сейчас?"
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary"
                >
                    Добавить
                </button>
            </FormBlock>
        )
    }
}

export default PostAddForm;
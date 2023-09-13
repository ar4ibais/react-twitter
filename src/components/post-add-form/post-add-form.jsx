import React from "react";

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

const PostAddForm = () => {
    return (
        <FormBlock>
            <input
                type="text"
                placeholder="О чем Вы думаете сейчас?"
                className="form-control new-post-label"
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

export default PostAddForm;
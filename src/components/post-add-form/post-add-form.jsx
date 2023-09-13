import React from "react";

import styled from "styled-components";

const FormBlock = styled.div`
display: flex;
margin-top: 20px;
input {
    width: auto;
    flex-grow: 1;
    margin-right: 3px;
  }
`;

const PostAddForm = ({ onAdd }) => {
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
                onClick={() => onAdd('Hello')}
            >
                Добавить
            </button>
        </FormBlock>
    )
}

export default PostAddForm;
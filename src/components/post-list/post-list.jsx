import React from "react";

import PostListItem from "../post-list-item";
import { ListGroup } from "reactstrap";

import styled from "styled-components";

const ListItem = styled.li`
padding: 20px 35px 10px 35px;
margin-top: 10px;
`;

const PostList = ({ posts }) => {
    return (
        <ListGroup style={{ marginTop: "50px" }}>
            {
                posts.map(post => (
                    <ListItem key={post.id} className="list-group-item" >
                        <PostListItem
                            label={post.label}
                            important={post.important}
                            onDelete={() => console.log('Deleted')}
                        />
                    </ListItem>
                ))
            }
        </ListGroup >
    );
};

export default PostList;
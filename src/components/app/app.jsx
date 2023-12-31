import React, { Component } from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import styled from "styled-components";

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { label: 'Going to learn React', important: true, like: false, id: 1 },
                { label: 'That is so good', important: false, like: false, id: 2 },
                { label: 'I need a break...', important: false, like: false, id: 3 },
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 4;
    }
    deleteItem = (id) => {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id == id);
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
            return {
                data: newArr
            }
        });
    }
    addItem = (body) => {
        const newElem = {
            label: body,
            important: false,
            id: this.maxId++
        }
        this.setState(({ data }) => {
            if (body != '') {
                const newArr = [...data, newElem];
                return {
                    data: newArr
                }
            }
        })
    }
    onToggleImportant = (id) => {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id == id);

            const old = data[index];
            const newItem = { ...old, important: !old.important }
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        })
    }
    onToggleLiked = (id) => {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id == id);

            const old = data[index];
            const newItem = { ...old, like: !old.like }
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        })
    }
    searchPost = (items, term) => {
        if (term.length == 0) {
            return items;
        }
        return items.filter(item => item.label.indexOf(term) > -1)
    }
    fliterPost = (items, filter) => {
        if (filter == 'like') {
            return items.filter(item => item.like)
        } else {
            return items;
        }
    }
    onUpdateSearch = (term) => {
        this.setState({ term })
    }
    onFilterSelect = (filter) => {
        this.setState({ filter })
    }
    render() {
        const { data, term, filter } = this.state;

        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;

        const visiblPosts = this.fliterPost(this.searchPost(data, term), filter);

        return (
            <AppBlock>
                <AppHeader
                    liked={liked}
                    allPosts={allPosts}
                />
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}
                    />
                    <PostStatusFilter
                        filter={this.state.filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>
                <PostList
                    posts={visiblPosts}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}
                />
                <PostAddForm
                    onAdd={this.addItem}
                />
            </AppBlock >
        )
    }
}

export default App;
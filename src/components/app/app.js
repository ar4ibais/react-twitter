import React from "react";


import AppHeader from "../app-header/";
import SearchPanel from "../search-panel";
import StatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import './app.css';

const App = () => {

    const data = [
        {label: 'Going to learn React', important: true, id: 'uwe'},
        {label: "That's so good", important: false, id: 'hfutfh'},
        {label: "I need a break...", important: false, id: 'oeitgit'}

    ];

    return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <StatusFilter />
            </div>
            <PostList posts={data} />
            <PostAddForm />
        </div>
    );
};

export default App;
import React from "react";


import AppHeader from "../app-header/";
import SearchPanel from "../search-panel";
import StatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

const App = () => {
    return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <StatusFilter />
            </div>
            <PostList />
            <PostAddForm />
        </div>
    );
};

export default App;
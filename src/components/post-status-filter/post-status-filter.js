import React from "react";

import './post-status-filter.css';

const StatusFilter = () => {
    return (
        <div className="btn-group">
            <button type="button" className="btn btn-info">Все</button>
            <button type="button" className="btn btn-outline-secondary">Понравилось</button>
        </div>
    );
};

export default StatusFilter;
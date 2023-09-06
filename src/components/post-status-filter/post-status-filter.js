import React from "react";

import './post-status-filter.css';

const StatusFilter = () => {
    return (
        <div className="btn-group">
            <button>Все</button>
            <button>Понравилось</button>
        </div>
    );
};

export default StatusFilter;
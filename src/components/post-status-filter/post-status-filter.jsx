import React, { Component } from "react";

class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            { name: 'all', lable: 'Все' },
            { name: 'like', lable: 'Понравилось' }
        ]
    }
    render() {
        const { filter, onFilterSelect } = this.props;
        const buttons = this.buttons.map(({ name, lable }) => {
            const active = filter == name;
            const clazz = active ? 'btn-info' : 'btn-outline-secondary';
            return (
                <button
                    key={name}
                    type="button"
                    className={`btn ${clazz}`}
                    onClick={() => onFilterSelect(name)}
                >{lable}</button>
            )
        });
        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}

export default PostStatusFilter;
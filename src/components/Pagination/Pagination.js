import React from 'react';
import './Pagination.css';

const pagination = (props) => (
    <article className="Pagination">
        <div className="pagination">
            <span id ="1" onClick={props.onClick}>&laquo;</span>
            <span id="1" className={props.classOne} onClick={props.onClick}>1</span>
            <span id="2" className={props.classTwo} onClick={props.onClick}>2</span>
            <span id ="2" onClick={props.onClick}>&raquo;</span>
        </div>
</article>
);

export default pagination;
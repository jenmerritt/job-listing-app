import React from "react";
import { connect } from "react-redux";
import './Filter.css';
import store from '../store/store';
import {clearFilters, removeFilter} from '../actions/actions';

const mapStateToProps = state => {
  return { selectedFilters: state.selectedFilters};
};

const ConnectedFilters = ({ selectedFilters }) => (
    <>
        <div id="spacer"></div>
        <section id="filter-wrapper">
            <ul id="filter-list">
                <div id="filter-left">
                    {selectedFilters.map(filter => (
                    <li className="filter-item">
                        <div className="filter-name">{filter.title}</div> 
                        <div onClick={() => store.dispatch(removeFilter(filter))} className="filter-remove">X</div>
                    </li>
                    ))}
                </div>
                <div id="filter-right">
                    <div id="clear-filters">
                        <p onClick={() => store.dispatch(clearFilters())}>Clear</p>
                    </div>
                </div>
            </ul>
        </section>
    </>
);

const Filter = connect(mapStateToProps)(ConnectedFilters);

export default Filter;
import React, {Component,PropTypes} from 'react';
import ConsignListComponent from "../components/ConsignListComponent";
import {connect} from "react-redux";
/*import {
    addConsign,
    removeConsign,
    setConsignIndex,
    setConsignList,
    setFilter
} from "../../../modules/ducks/Consign"*/
import {UserConsignContentView} from "ROUTES/Consign";
import {deleteConsign, getConsignContent, getConsignList, newConsign} from "SERVICES/ConsignService";
import {addTabAction} from "MODULES/ducks/Layout";
import {setConsignFilter} from "../../../modules/ducks/Consign";

const mapStateToProps = (state) => {
    return {
        dataSource: state.Consign.list.filter(state.Consign.listFilter),
        enableNew: true,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        showContent: (index, id) => {
            dispatch(addTabAction('id', '委托详情', UserConsignContentView));
            getConsignContent(dispatch, index, id);
            dispatch(setConsignIndex(index));
        },
        newConsign: () => newConsign(dispatch),
        getConsignList: () => getConsignList(dispatch),
        deleteConsign: (id) => deleteConsign(dispatch, id),
        setListFilter: (listFilter) => dispatch(setConsignFilter(listFilter)),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ConsignListComponent);

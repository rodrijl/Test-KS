import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {getPatientData} from './actions/actions';
import TableList from './components/TableList';

import 'semantic-ui-css/semantic.min.css'

/**
 * App main view
 * @param {object} props 
 */
const App = (props) =>{

    /**
     * call getPatientData action just once
     */
    useEffect(() => {
        props.getPatientData();
    }, []);

    return (
        <section>
            <TableList patients={props.patients}/>
        </section>
    );
};

const mapStateToProps = state => ({
    patients: state.patients,
});

const mapDispatchToProps = dispatch => ({
    getPatientData: () => getPatientData(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

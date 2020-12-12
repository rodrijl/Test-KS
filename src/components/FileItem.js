import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table, Icon, Button } from 'semantic-ui-react'

import {deletePatient, savePatient} from '../actions/actions';

/**
 * File item, each row with its values
 * @param {object} props
 */
const FileItem = ({patient, savePatient, deletePatient}) => {

    useEffect(() => {
        setPatient(patient.name);
        setdentist(patient.dentist);
        setXrayPlate(patient.xRayPlate);
        setStartTreatment(patient.startTreatment);
        setEndTreatment(patient.endTreatment);
    }, [patient.name, patient.dentist, patient.xRayPlate, patient.startTreatment, patient.endTreatment])

    const [editMode, setEditMode] = useState(false);
    const [name, setPatient] = useState(patient.name);
    const [dentist, setdentist] = useState(patient.dentist);
    const [xRayPlate, setXrayPlate] = useState(patient.xRayPlate);
    const [startTreatment, setStartTreatment] = useState(patient.startTreatment);
    const [endTreatment, setEndTreatment] = useState(patient.endTreatment);

    /**
     * Deletes patient using patient.id
     */
    const handleRemovePatient = () => deletePatient(patient.id);

    /**
     * Sets editMode to true
     */
    const handleEditRow = () => setEditMode(true);

    /**
     * Calls savePatient action with updatedPatient, and set editMode to false
     */
    const handleSaveRow = () => {
        const updatedPatient = {
            name: name,
            dentist: dentist,
            xRayPlate: xRayPlate,
            startTreatment: startTreatment,
            endTreatment: endTreatment,
            id: patient.id
        };
        savePatient(updatedPatient);
        setEditMode(false);
    };

    /**
     * Sets editMode to false
     */
    const handleCancel = () => setEditMode(false);

    /**
     * Changes pacient value
     * @param {object} event
     */
    const handleChangePatient = (event) => {
        const newValue = event.target.value;
        setPatient(newValue);
    }

    /**
     * Changes dentist value
     * @param {object} event
     */
    const handleChangedentist = (event) => {
        const newValue = event.target.value;
        setdentist(newValue);
    }

    /**
     * Changes placa value
     * @param {object} event
     */
    const handleChangexRayPlate = (event) => {
        const newValue = event.target.value;
        setXrayPlate(newValue);
    }

    /**
     * Changes inicio tratamiento value
     * @param {object} event
     */
    const handleChangeStartTreatment = (event) => {
        const newValue = event.target.value;
        setStartTreatment(newValue);
    }

    /**
     * Changes fin tratamiento value
     * @param {object} event
     */
    const handleChangeEndTreatment = (event) => {
        const newValue = event.target.value;
        setEndTreatment(newValue);
    }

    let row;
    if (editMode) {
        row = (
            <Table.Row>
                <Table.Cell><input type="text" value={name} onChange={handleChangePatient} /></Table.Cell>
                <Table.Cell><input type="text" value={dentist} onChange={handleChangedentist} /></Table.Cell>
                <Table.Cell><input type="number" value={xRayPlate} onChange={handleChangexRayPlate}/></Table.Cell>
                <Table.Cell><input type="date" value={startTreatment} onChange={handleChangeStartTreatment}/></Table.Cell>
                <Table.Cell><input type="date" value={endTreatment} onChange={handleChangeEndTreatment}/></Table.Cell>
                <Table.Cell><Button positive onClick={handleSaveRow}>Guardar</Button></Table.Cell>
                <Table.Cell><Button onClick={handleCancel}>Cancelar</Button></Table.Cell>
            </Table.Row>
        );
    } else {
        row = (
            <Table.Row>
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell>{dentist}</Table.Cell>
                <Table.Cell>{xRayPlate}</Table.Cell>
                <Table.Cell>{startTreatment}</Table.Cell>
                <Table.Cell>{endTreatment}</Table.Cell>
                <Table.Cell><Icon color='blue' name='edit' onClick={handleEditRow} /></Table.Cell>
                <Table.Cell><Icon color='red' name='remove circle' onClick={handleRemovePatient}/></Table.Cell>
            </Table.Row>
        );
    }

    return (
        <>
            {row}
        </>
    );
};

FileItem.propTypes = {
    pacients: PropTypes.object,
};

const mapDispatchToProps = dispatch => ({
    deletePatient: (id) => deletePatient(dispatch, id),
    savePatient: (name) => savePatient(dispatch, name)
});

export default connect(null, mapDispatchToProps)(FileItem);

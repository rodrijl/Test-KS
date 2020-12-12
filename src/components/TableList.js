import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';

import FileItem from './FileItem';
import {ListContainer} from './styles/Containers';

/**
 * Table that shows the first 20 patients
 * @param {object} props 
 */
const TableList = (props) => {
    return (
        <ListContainer>
            <Table striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Paciente</Table.HeaderCell>
                        <Table.HeaderCell>Profesional</Table.HeaderCell>
                        <Table.HeaderCell>Placas</Table.HeaderCell>
                        <Table.HeaderCell>Inicio de Tratamiento</Table.HeaderCell>
                        <Table.HeaderCell>Fin de Tratamiento</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        props.patients.map((patient, index) => {
                            return <FileItem key={index} patient={patient}/>;
                        })
                    }
                </Table.Body>
            </Table>
        </ListContainer>
    );
};

TableList.propTypes = {
    patients: PropTypes.array,
};

export default TableList
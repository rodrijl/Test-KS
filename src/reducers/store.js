import {createStore} from 'redux';
import Immutable from 'seamless-immutable';

/**
 * Initial state
 */
const initialState = Immutable({
    patients: []
});

const patientStore = (state = initialState, action) => {
    switch(action.type) {
        case 'SUCCESS_GET_PATIENTS':
            return state.merge({
                patients: action.patients,
            });
        case 'DELETE_PATIENT':
            const id = action.id;
            const filterPatients = state.patients.filter(patient => patient.id !== id);
            return state.merge({
                patients: filterPatients
            });
        case 'SUCCESS_SAVE_PATIENT':
            const updatedPatient = action.updatedPatient;
            const updatedList = state.patients.map(patient => {
                if (patient.id === updatedPatient.id) {
                    return updatedPatient;
                }
                return patient;
            });
            return state.merge({
                patients: updatedList
            });
        default:
            return state;
    }
}

const store = createStore(patientStore);

export default store;
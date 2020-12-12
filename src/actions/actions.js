const data = [{
    id: 1,
    name: 'name1',
    dentist: 'dentist1',
    xRayPlate: 3,
    startTreatment: "2020-04-10",
    endTreatment:"2020-05-10"
},{
    id: 2,
    name: 'name1',
    dentist: 'dentist1',
    xRayPlate: 3,
    startTreatment: "2020-04-10",
    endTreatment:"2020-05-10"

},{
    id: 3,
    name: 'name2',
    dentist: 'dentist2',
    xRayPlate: 2,
    startTreatment: "2020-04-10",
    endTreatment:"2020-05-10"
},{
    id: 4,
    name: 'name1',
    dentist: 'dentist1',
    xRayPlate: 3,
    startTreatment: "2020-04-10",
    endTreatment:"2020-05-10"
},{
    id: 5,
    name: 'name1',
    dentist: 'dentist1',
    xRayPlate: 3,
    startTreatment: "2020-04-10",
    endTreatment:"2020-05-10"
},{
    id: 6,
    name: 'name1',
    dentist: 'dentist1',
    xRayPlate: 3,
    startTreatment: "2020-04-10",
    endTreatment:"2020-05-10"
},{
    id: 7,
    name: 'name1',
    dentist: 'dentist1',
    xRayPlate: 3,
    startTreatment: "2020-04-10",
    endTreatment:"2020-05-10"
},{
    id: 8,
    name: 'name1',
    dentist: 'dentist1',
    xRayPlate: 3,
    startTreatment: "2020-04-10",
    endTreatment:"2020-05-10"
},{
    id: 9,
    name: 'name1',
    dentist: 'dentist1',
    xRayPlate: 3,
    startTreatment: "2020-04-10",
    endTreatment:"2020-05-10"
},{
    id: 10,
    name: 'name1',
    dentist: 'dentist1',
    xRayPlate: 3,
    startTreatment: "2020-04-10",
    endTreatment:"2020-05-10"
},{
    id: 11,
    name: 'name1',
    dentist: 'dentist1',
    xRayPlate: 3,
    startTreatment: "2020-04-10",
    endTreatment:"2020-05-10"
},{
    id: 12,
    name: 'name1',
    dentist: 'dentist1',
    xRayPlate: 3,
    startTreatment: "2020-04-10",
    endTreatment:"2020-05-10"
},{
    id: 13,
    name: 'name1',
    dentist: 'dentist1',
    xRayPlate: 3,
    startTreatment: "2020-04-10",
    endTreatment:"2020-05-10"
},{
    id: 14,
    name: 'name1',
    dentist: 'dentist1',
    xRayPlate: 3,
    startTreatment: "2020-04-10",
    endTreatment:"2020-05-10"
},{
    id: 15,
    name: 'name1',
    dentist: 'dentist1',
    xRayPlate: 3,
    startTreatment: "2020-04-10",
    endTreatment:"2020-05-10"
},{
    id: 16,
    name: 'name1',
    dentist: 'dentist1',
    xRayPlate: 3,
    startTreatment: "2020-04-10",
    endTreatment:"2020-05-10"
},{
    id: 17,
    name: 'name1',
    dentist: 'dentist1',
    xRayPlate: 3,
    startTreatment: "2020-04-10",
    endTreatment:"2020-05-10"
},{
    id: 18,
    name: 'name1',
    dentist: 'dentist1',
    xRayPlate: 3,
    startTreatment: "2020-04-10",
    endTreatment:"2020-05-10"
},{
    id: 19,
    name: 'name1',
    dentist: 'dentist1',
    xRayPlate: 3,
    startTreatment: "2020-04-10",
    endTreatment:"2020-05-10"
},{
    id: 20,
    name: 'name1',
    dentist: 'dentist1',
    xRayPlate: 3,
    startTreatment: "2020-04-10",
    endTreatment:"2020-05-10"
}];

/**
 * Get all patients
 * @param {function} dispatch 
 */
const getPatientData = (dispatch) =>{
    dispatch({
        type: 'SUCCESS_GET_PATIENTS',
        patients: data
    })
};

/**
 * updates updatedPatient in patients list in store
 * @param {function} dispatch
 * @param {object} updatedPatient
 */
const savePatient = (dispatch, updatedPatient) => {
    dispatch({
        type: 'SUCCESS_SAVE_PATIENT',
        updatedPatient
    });
};

/**
 * Deletes patient with id in store
 * @param {function} dispatch 
 * @param {number} id 
 */
const deletePatient = (dispatch, id) =>{
    dispatch({
        type: 'DELETE_PATIENT',
        id: id
    })
};

export  {
    getPatientData,
    deletePatient,
    savePatient
}

import axios from 'axios';

const medicosApi = axios.create({
    baseURL: "http://localhost:8000/galenos/api/v1/Medicos/"
});

export const getAllMedicos = () => medicosApi.get('/');

export const getMedicoById = (id) => medicosApi.get(`/${id}/`);

export const createMedico = (medico) => medicosApi.post('/', medico);

export const deleteMedico = (id) => medicosApi.delete(`/${id}`);

export const updateMedico = (id, medico) => medicosApi.put(`/${id}/`, medico);
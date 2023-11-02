import axios from 'axios';

const pacientesApi = axios.create({
    baseURL: "http://localhost:8000/galenos/api/v1/Pacientes/"
});

export const getAllPacientes = () => pacientesApi.get('/');

export const getPacienteById = (id) => pacientesApi.get(`/${id}/`);

export const createPaciente = (paciente) => pacientesApi.post('/', paciente);

export const deletePaciente = (id) => pacientesApi.delete(`/${id}`);

export const updatePaciente = (id, paciente) => pacientesApi.put(`/${id}/`, paciente);
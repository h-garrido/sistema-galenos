import axios from 'axios';

const citasApi = axios.create({
    baseURL: "http://localhost:8000/galenos/api/v1/Citas/"
});

export const getAllCitas = () => citasApi.get('/');

export const getCitaById = (id) => citasApi.get(`/${id}/`);

export const createCita = (cita) => citasApi.post('/', cita);

export const deleteCita = (id) => citasApi.delete(`/${id}`);

export const updateCita = (id, cita) => citasApi.put(`/${id}/`, cita);
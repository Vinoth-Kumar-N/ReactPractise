import axios from 'axios';

const API = 'https://66e526dd5cc7f9b6273c6b09.mockapi.io';


const getProjects = () => axios.get(`${API}/projects`);
const addProject = (projectdata) => axios.post(`${API}/projects`, projectdata);
const deletepro = (id) => axios.delete(`${API}/projects/${id}`);

export {getProjects, addProject, deletepro}
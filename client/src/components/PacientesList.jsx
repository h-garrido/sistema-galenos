import { useEffect, useState } from "react";
import { getAllPacientes } from '../api/pacientes.api';
import { PacienteCard } from './PacientesCard';

export function PacientesList() {
    const [pacientes, setPacientes] = useState([]);

    useEffect(() => {
        async function loadPacientes() {
            const res = await getAllPacientes();
        setPacientes(res.data);
        }
        loadPacientes();
    }, []);
    return (
    <div className="grid grid-cols-3 gap-3">
        {pacientes.map(paciente => (
            <PacienteCard key={paciente.id_paciente} paciente={paciente} />
        ))}
    </div>
    );    
}
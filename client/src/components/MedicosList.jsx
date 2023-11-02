import { useEffect, useState } from "react";
import { getAllMedicos } from '../api/medicos.api';
import { MedicoCard } from './MedicosCard';

export function MedicosList() {
    const [medicos, setMedicos] = useState([]);

    useEffect(() => {
        async function loadMedicos() {
            const res = await getAllMedicos();
        setMedicos(res.data);
        }
        loadMedicos();
    }, []);
    return (
    <div className="grid grid-cols-3 gap-3">
        {medicos.map(medico => (
            <MedicoCard key={medico.id_medico} medico={medico} />
        ))}
    </div>
    );    
}
import { useEffect, useState } from "react";
import { getAllCitas } from '../api/citas.api';
import { CitaCard } from './CitasCard';

export function CitasList() {
    const [citas, setCitas] = useState([]);

    useEffect(() => {
        async function loadCitas() {
            const res = await getAllCitas();
        setCitas(res.data);
        }
        loadCitas();
    }, []);
    return (
    <div className="grid grid-cols-3 gap-3">
        {citas.map(cita => (
            <CitaCard key={cita.id_cita} cita={cita} />
        ))}
    </div>
    );
}  

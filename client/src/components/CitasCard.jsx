import { useNavigate } from 'react-router-dom';

export function CitaCard({ cita }) {
    
        const navigate = useNavigate()
    
        return (
            <div className='bg-cyan-800 p-3 hover:bg-cyan-700 hover:cursor-pointer rounded-lg'
    
                onClick={() => {
                    navigate(`/citas/${cita.id_cita}`)
                }}
            >
                
                <p className='text-slate-400'>Paciente: {cita.paciente}</p>
                <p className='text-slate-400'>Médico: {cita.medico}</p>
                <p className='text-slate-400'>Fecha: {cita.fecha}</p>
                <p className='text-slate-400'>Hora: {cita.hora}</p>
                <p className='text-slate-400'>Motivo: {cita.motivo}</p>
                <p className='text-slate-400'>Diagnóstico: {cita.diagnostico}</p>
                <hr />
            </div>
        )
}
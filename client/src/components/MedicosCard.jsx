import { useNavigate } from 'react-router-dom';

export function MedicoCard({ medico }) {

    const navigate = useNavigate()

    return (
        <div className='bg-cyan-800 p-3 hover:bg-cyan-700 hover:cursor-pointer rounded-lg'

            onClick={() => {
                navigate(`/medicos/${medico.id_medico}`)
            }}
        >
            
            <p className='text-slate-400'>Nombres: {medico.nombre}</p>
            <p className='text-slate-400'>Apellidos: {medico.apellido}</p>
            <p className='text-slate-400'>RUT: {medico.rut}</p>
            
        </div>
    )
}
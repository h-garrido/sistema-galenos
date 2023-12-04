import { useNavigate } from 'react-router-dom';

export function PacienteCard({ paciente }) {

    const navigate = useNavigate()

    return (
        <div className='bg-cyan-800 p-3 hover:bg-cyan-700 hover:cursor-pointer rounded-lg'

            onClick={() => {
                navigate(`/pacientes/${paciente.id_paciente}`)
            }}
        >

            <p className='text-slate-400'>Nombres: {paciente.nombre}</p>
            <p className='text-slate-400'>Apellidos: {paciente.apellido}</p>
            <p className='text-slate-400'>RUT: {paciente.rut}</p>
            <hr />
        </div>
    )
}
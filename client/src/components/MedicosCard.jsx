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
            <p className='text-slate-400'>Fecha de Nacimiento: {medico.fecha_nacimiento}</p>
            <p className='text-slate-400'>Edad: {medico.edad}</p>
            <p className='text-slate-400'>Género: {medico.genero}</p>
            <p className='text-slate-400'>Dirección: {medico.direccion}</p>
            <p className='text-slate-400'>Teléfono: {medico.telefono}</p>
            <p className='text-slate-400'>Email: {medico.email}</p>
            <p className='text-slate-400'>Matrícula: {medico.matricula}</p>
            <p className='text-slate-400'>Especialidad: {medico.especialidad}</p>
            <p className='text-slate-400'>Médico: {paciente.medico}</p>
            <hr />
        </div>
    )
}
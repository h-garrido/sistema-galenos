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
            <p className='text-slate-400'>Fecha de Nacimiento: {paciente.fecha_nacimiento}</p>
            <p className='text-slate-400'>Edad: {paciente.edad}</p>
            <p className='text-slate-400'>Género: {paciente.genero}</p>
            <p className='text-slate-400'>Dirección: {paciente.direccion}</p>
            <p className='text-slate-400'>Teléfono: {paciente.telefono}</p>
            <p className='text-slate-400'>Email: {paciente.email}</p>
            <p className='text-slate-400'>Sistema de Salud: {paciente.sistema_salud}</p>
            <p className='text-slate-400'>Medicación: {paciente.medicacion}</p>
            <p className='text-slate-400'>Médico: {paciente.medico}</p>
            <hr />
        </div>
    )
}
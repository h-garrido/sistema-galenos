import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div className='flex justify-between py-3'>
            {currentPath.startsWith('/pacientes') && (
                <>
                    {/* Navegación para Pacientes */}
                    <Link to="/pacientes">
                        <h1 className='font-bold text-3xl mb-4'>Listado de Pacientes</h1>
                    </Link>
                    <button className='bg-indigo-500 px-3 py-2 rounded-lg'>
                        <Link to="/pacientes/crear">Nuevo Paciente</Link>
                    </button>
                </>
            )}

            {currentPath.startsWith('/medicos') && (
                <>
                    {/* Navegación para Médicos */}
                    <Link to="/medicos">
                        <h1 className='font-bold text-3xl mb-4'>Listado de Médicos</h1>
                    </Link>
                    <button className='bg-indigo-500 px-3 py-2 rounded-lg'>
                        <Link to="/medicos/crear">Nuevo Médico</Link>
                    </button>
                </>
            )}

            {currentPath.startsWith('/calendario') && (
                <>
                    {/* Navegación para Calendario */}
                    <Link to="/calendario">
                        <h1 className='font-bold text-3xl mb-4'>Calendario de Médicos</h1>
                    </Link>
                </>
            )}

            {currentPath.startsWith('/citas') && (
                <>
                    {/* Navegación para Citas Médicas */}
                    <Link to="/citas">
                        <h1 className='font-bold text-3xl mb-4'>Gestión de Citas</h1>
                    </Link>
                    <button className='bg-indigo-500 px-3 py-2 rounded-lg'>
                        <Link to="/citas/crear">Nueva Cita</Link>
                    </button>
                </>
            )}
        </div>
    )
}

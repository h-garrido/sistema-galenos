import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div className='flex flex-col justify-between py-3'>
            {/* Botón para volver al Dashboard */}
            {currentPath !== '/dashboard' && (
                <div className="mb-4">
                    <Link to="/dashboard" className="bg-indigo-500 px-3 py-2 rounded-lg text-white hover:bg-indigo-600 transition duration-300">
                        Volver al Dashboard
                    </Link>
                </div>
            )}

            {currentPath.startsWith('/pacientes') && (
                <div className='flex justify-between items-center mb-4'>
                    {/* Navegación para Pacientes */}
                    <h1 className='font-bold text-3xl mb-4'>Listado de Pacientes</h1>
                    <button className='bg-indigo-500 px-3 py-2 rounded-lg'>
                        <Link to="/pacientes/crear">Nuevo Paciente</Link>
                    </button>
                </div>
            )}

            {currentPath.startsWith('/medicos') && (
                <div className='flex justify-between items-center mb-4'>
                    {/* Navegación para Médicos */}
                    <h1 className='font-bold text-3xl mb-4'>Listado de Médicos</h1>
                    <button className='bg-indigo-500 px-3 py-2 rounded-lg'>
                        <Link to="/medicos/crear">Nuevo Médico</Link>
                    </button>
                </div>
            )}

            {currentPath.startsWith('/calendario') && (
                <>
                    {/* Navegación para Calendario */}
                    <h1 className='font-bold text-3xl mb-4'>Calendario de Médicos</h1>
                </>
            )}

            {currentPath.startsWith('/citas') && (
                <div className='flex justify-between items-center mb-4'>
                    {/* Navegación para Citas Médicas */}
                    <h1 className='font-bold text-3xl mb-4'>Gestión de Citas</h1>
                    <button className='bg-indigo-500 px-3 py-2 rounded-lg'>
                        <Link to="/citas/crear">Nueva Cita</Link>
                    </button>
                </div>
            )}

            {currentPath.startsWith('/login') && (
                <div className='flex justify-between items-center mb-4'>
                    {/* Navegación para Citas Médicas */}
                    <h1 className='font-bold text-3xl mb-4'>Iniciar Sesión</h1>
                </div>
            )}
        </div>
    )
}

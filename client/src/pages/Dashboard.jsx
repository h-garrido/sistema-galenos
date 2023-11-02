import { Link } from 'react-router-dom';
import { Header } from '../components/Header';  // Asegúrate de importar los componentes
import { Footer } from '../components/Footer';

export function Dashboard() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className='flex-grow container mx-auto p-4'>
                <h1 className="font-bold text-4xl mb-8">Dashboard</h1>
                <div className="grid grid-cols-2 gap-6">
                    {/* Tarjeta para Pacientes */}
                    <div className="card bg-indigo-500 p-6 rounded-lg">
                        <h2 className="font-bold text-2xl mb-4">Pacientes</h2>
                        <Link to="/pacientes" className="text-white">Ver Listado</Link>
                    </div>

                    {/* Tarjeta para Médicos */}
                    <div className="card bg-indigo-500 p-6 rounded-lg">
                        <h2 className="font-bold text-2xl mb-4">Médicos</h2>
                        <Link to="/medicos" className="text-white">Ver Listado</Link>
                    </div>

                    {/* Tarjeta para Calendario */}
                    <div className="card bg-indigo-500 p-6 rounded-lg">
                        <h2 className="font-bold text-2xl mb-4">Calendario</h2>
                        <Link to="/calendario" className="text-white">Ver Calendario</Link>
                    </div>

                    {/* Tarjeta para Citas Médicas */}
                    <div className="card bg-indigo-500 p-6 rounded-lg">
                        <h2 className="font-bold text-2xl mb-4">Citas Médicas</h2>
                        <Link to="/citas" className="text-white">Gestionar Citas</Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Dashboard;

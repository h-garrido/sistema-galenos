export function Header() {
    return (
        <header className="bg-indigo-600 p-6 text-white shadow-md rounded">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo y nombre de la aplicación */}
                <div className="flex items-center">
                    {/* Puedes incluir un logo aquí si tienes uno */}
                    <img src="src/assets/img/galenos-logo.png" alt="Logo" className="mr-4 w-10 h-10 rounded-lg" />
                    <h1 className="font-bold text-3xl">Sistema de Gestión Médica - Galenos</h1>
                </div>

                {/* Barra de navegación (opcional) */}
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#" className="hover:text-indigo-300 transition duration-300">Inicio</a></li>
                        <li><a href="#" className="hover:text-indigo-300 transition duration-300">Acerca de</a></li>
                        <li><a href="#" className="hover:text-indigo-300 transition duration-300">Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

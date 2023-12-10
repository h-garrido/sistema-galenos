import { useState } from 'react';
import axios from 'axios';

// eslint-disable-next-line react/prop-types
function LoginFormPage({ onLoginSuccess }) {
    const [rut, setRut] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            // Ajusta la URL según el endpoint específico de inicio de sesión
            const response = await axios.post('/api/login/', {
                rut: rut,
                password: password,
            });

            // Aquí se maneja la respuesta y la autenticación exitosa
            // Por ejemplo, guardando el token en el almacenamiento local y redirigiendo al usuario
            localStorage.setItem('authToken', response.data.token);
            onLoginSuccess(response.data); // Ejecuta la función callback para manejar el inicio de sesión exitoso
        } catch (error) {
            if (error.response) {
                // La solicitud fue hecha y el servidor respondió con un código de estado
                // que cae fuera del rango de 2xx
                setError(error.response.data.message);
            } else {
                setError('No se pudo conectar con el servicio de autenticación.');
            }
        }
    };

    return (
        <div className='max-w-xl mx-auto px-4 sm:px-6 lg:px-8'>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="rut">RUT</label>
                    <input 
                        className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                        id="rut"
                        type="text"
                        value={rut}
                        onChange={(e) => setRut(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input
                        className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p>{error}</p>}
                <button className='bg-indigo-500 p-3 rounded-lg block w-full mt-9 mb-6' type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
}

export default LoginFormPage;

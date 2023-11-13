import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { createCita, updateCita, getCitaById, deleteCita } from '../api/citas.api';
import { getAllPacientes } from '../api/pacientes.api'
import { getAllMedicos } from '../api/medicos.api'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function CitasFormPage() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();

    const navigate = useNavigate();
    const params = useParams();
    const [medicos, setMedicos] = useState([]);
    const [pacientes, setPacientes] = useState([]);

    const onSubmit = handleSubmit(async data => {
        if (params.id_cita) {
            await updateCita(params.id_cita, data);
            toast.success('Cita actualizada', {
                duration: 4000,
                position: 'top-right',
                style: {
                    background: '#333',
                    color: '#fff',
                }
            })
        } else {
            await createCita(data);
            toast.success('Cita creada', {
                duration: 4000,
                position: 'top-right',
                style: {
                    background: '#333',
                    color: '#fff',
                }

            })
        }
        navigate('/citas');
    })

    useEffect(() => {
        async function loadCita() {
            if (params.id_cita) {
                const res = await getCitaById(params.id_cita);
                console.log(res);

                const fields = [
                    'paciente', 'medico', 'fecha', 'hora', 'motivo',
                    'diagnostico', 'receta'
                ];

                fields.forEach(field => {
                    setValue(field, res.data[field]);
                });
            }
        }
        loadCita();
    }, []);

    useEffect(() => {
        async function loadMedicosPacientes() {
            try {
                const pacientesRes = await getAllPacientes();
                setPacientes(pacientesRes.data);
                const medicosRes = await getAllMedicos();
                setMedicos(medicosRes.data);
            } catch (error) {
                console.error("Error cargando los datos", error);
            }
        }
        loadMedicosPacientes();
    }, []);

    return (
        <div className='max-w-xl mx-auto'>
            <form onSubmit={onSubmit}>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='paciente'>
                        Paciente
                    </label>
                    <select
                        {...register('paciente', { required: true })}
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='paciente'
                    >
                        <option value="" disabled selected>Seleccione un paciente</option>
                        {pacientes.map(paciente => (
                            <option key={paciente.id} value={paciente.id}>
                                {paciente.nombre}
                            </option>
                        ))}
                    </select>
                    {errors.paciente && <span className='text-red-500'>Este campo es requerido</span>}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='medico'>
                        Médico
                    </label>
                    <select
                        {...register('medico', { required: true })}
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='medico'
                    >
                        <option value="" disabled selected>Seleccione un médico</option>
                        {medicos.map(medico => (
                            <option key={medico.id} value={medico.id}>
                                {medico.nombre}
                            </option>
                        ))}
                    </select>
                    {errors.medico && <span className='text-red-500'>Este campo es requerido</span>}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='fecha'>
                        Fecha
                    </label>
                    <input
                        {...register('fecha', { required: true })}
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='fecha'
                        type='date'
                        placeholder='Fecha'
                    />
                    {errors.fecha && <span className='text-red-500'>Este campo es requerido</span>}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='hora'>
                        Hora
                    </label>
                    <input
                        {...register('hora', { required: true })}
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='hora'
                        type='time'
                        placeholder='Hora'
                    />
                    {errors.hora && <span className='text-red-500'>Este campo es requerido</span>}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='motivo'>
                        Motivo
                    </label>
                    <input
                        {...register('motivo', { required: true })}
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='motivo'
                        type='text'
                        placeholder='Motivo'
                    />
                    {errors.motivo && <span className='text-red-500'>Este campo es requerido</span>}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='diagnostico'>
                        Diagnóstico
                    </label>
                    <input
                        {...register('diagnostico', { required: true })}
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='diagnostico'
                        type='text'
                        placeholder='Diagnóstico'
                    />
                    {errors.diagnostico && <span className='text-red-500'>Este campo es requerido</span>}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='receta'>
                        Receta
                    </label>
                    <input
                        {...register('receta', { required: true })}
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='receta'
                        type='text'
                        placeholder='Receta'
                    />
                    {errors.receta && <span className='text-red-500'>Este campo es requerido</span>}
                </div>
                <button
                    className='bg-indigo-500 p-3 rounded-lg block w-full mt-9 mb-6'
                >
                    Guardar
                </button>
            </form>
            {params.id_cita && (
                <button
                    onClick={async () => {
                        await deleteCita(params.id_cita);
                        navigate('/citas');
                    }}
                    className='bg-red-500 p-3 rounded-lg block w-full mt-3 mb-6'
                >
                    Eliminar
                </button>
            )}
        </div>
    )
}
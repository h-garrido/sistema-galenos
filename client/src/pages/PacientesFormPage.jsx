import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { createPaciente, deletePaciente, updatePaciente, getPacienteById } from '../api/pacientes.api';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function PacientesFormPage() {
    const { register, handleSubmit, formState: {errors}, setValue} = useForm();

    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async data => {
        if (params.id_paciente) {
            await updatePaciente(params.id_paciente, data);
            toast.success('Paciente actualizado', {
                duration: 4000,
                position: 'top-right',
                style: {
                    background: '#333',
                    color: '#fff',
                }
            })
        } else {
            await createPaciente(data);
            toast.success('Paciente creado', {
                duration: 4000,
                position: 'top-right',
                style: {
                    background: '#333',
                    color: '#fff',
                }
            
            }) 
        }
        navigate('/pacientes');
    })

    useEffect(() => {
        async function loadPaciente() {
            if (params.id_paciente) {
                const res = await getPacienteById(params.id_paciente);
                console.log(res);
    
                const fields = [
                    'nombre', 'apellido', 'edad', 'rut', 'fecha_nacimiento', 
                    'genero', 'direccion', 'telefono', 'email', 'sistema_salud'
                ];
    
                fields.forEach(field => {
                    setValue(field, res.data[field]);
                });
            }
        }
        loadPaciente();
    }, []);

    return (
        <div className='max-w-xl mx-auto'>
            <form onSubmit={onSubmit}>
                <label>Nombres:
                    <input type="text" placeholder="Nombres" {...register('nombre', {required: true})}
                    className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                    />
                    {errors.nombre && <span>"Este campo es requerido"</span>}
                </label>
                <label>Apellidos:
                    <input type="text" placeholder="Apellidos" {...register('apellido', {required: true})}
                    className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                    />
                    {errors.apellido && <span>"Este campo es requerido"</span>}
                </label>
                <label>Edad:
                    <input type="number" placeholder="Edad" {...register('edad', {required: true})} 
                    className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                    />
                    {errors.edad && <span>"Este campo es requerido"</span>}
                </label>    
                <label>RUT:
                    <input type="text" placeholder="RUT" {...register('rut', {required: true})} 
                    className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                    />
                    {errors.rut && <span>"Este campo es requerido"</span>}
                </label>
                <label>Fecha de Nacimiento:
                    <input type="date" placeholder="Fecha de Nacimiento" {...register('fecha_nacimiento', {required: true})} 
                    className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                    />
                    {errors.fecha_nacimiento && <span>"Este campo es requerido"</span>}
                </label>
                <label>Género:
                    <select {...register('genero', { required: true })} className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'>
                        <option value="">Seleccione un género</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                    </select>
                    {errors.genero && <span>"Este campo es requerido"</span>}
                </label>

                <label>Dirección:
                    <input type="text" placeholder="Dirección" {...register('direccion', {required: true})} 
                    className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                    />
                    {errors.direccion && <span>"Este campo es requerido"</span>}
                </label>
                <label>Teléfono:
                    <input type="text" placeholder="Teléfono" {...register('telefono', {required: true})} 
                    className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                    />
                    {errors.telefono && <span>"Este campo es requerido"</span>}
                </label>
                <label>Email:
                    <input type="email" placeholder="Email" {...register('email', {required: true})} 
                    className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                    />
                    {errors.email && <span>"Este campo es requerido"</span>}
                </label>
                <label>Sistema de Salud:
                    <input type="text" placeholder="Sistema de Salud" {...register('sistema_salud', {required: true})} 
                    className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                    />
                    {errors.sistema_salud && <span>"Este campo es requerido"</span>}
                </label>
               
                <button
                className='bg-indigo-500 p-3 rounded-lg block w-full mt-9'>Guardar</button>
            </form>
            {params.id_paciente && (
            <button className='bg-red-500 p-3 rounded-lg w-48 mt-3 mb-6'
                onClick={async () => {
                const accepted = window.confirm('¿Está seguro de eliminar?')
                if (accepted) {
                    await deletePaciente(params.id)
                    toast.success('Paciente eliminado', {
                        duration: 4000,
                        position: 'top-right',
                        style: {
                            background: '#333',
                            color: '#fff',
                        }
                    
                    }) 
                    navigate('/pacientes')
                }
            }}>Eliminar</button>)}
        </div>
    )
}
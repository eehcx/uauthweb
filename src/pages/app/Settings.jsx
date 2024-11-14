import { useState, useEffect } from "react"
import { Button, Avatar } from "@chakra-ui/react"
import { IoTrashOutline } from "react-icons/io5";
import '../../components/styles/base.styles.css'
import { useSelector } from "react-redux"

const ConfigItem = ({title, value}) => {
    return(
        <div className="px-5 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm leading-5 font-overview text-gray-600">{title}</dt>
            <dd className="mt-1 text-sm font-medium leading-6 font-overview text-black sm:col-span-2 sm:mt-0">{value}</dd>
        </div>
    )
}

function SettingsPage () {
    const [Users, setUsers] = useState([]);
    const Project = useSelector(state => state.project)

    useEffect(() => {
        fetch(`http://localhost:8080/v1/projects/${Project.projectNumber}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la solicitud');
                }
                return response.json();
            })
            .then(data => setUsers(data.usuarios))
            .catch(error => console.error('Error al obtener los datos:', error));
        //console.log(Users)
    }, []);

    return(
        <>
            <div>
                <div className="flex items-center justify-start space-x-2 mt-10 mx-1 mb-5">
                    <h2 className=" text-2xl font-overview font-medium text-slate-800">Configuración del proyecto</h2>
                </div>
                <div className="mt-6">
                    <dl>
                        <ConfigItem title='Nombre del proyecto' value={Project.name} />
                        <ConfigItem title='Base de datos' value={Project.dbName} />
                        <ConfigItem title='Número de proyecto' value={Project.projectNumber} />
                        <ConfigItem title='Token del proyecto' value={Project.token} />

                        <div className="mt-6 border-t border-gray-100" />

                        <h3 className=" text-sm font-semibold text-black my-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">Entorno</h3>

                        <p className="text-sm mb-4 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Este parámetro de configuración permite personalizar tu proyecto para las diferentes etapas del ciclo de vida de la app</p>

                        <ConfigItem title='Tipo de entorno' value='Producción' />

                        <div className="mt-6 border-t border-gray-100" />

                        <h3 className=" text-sm font-semibold text-black my-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">Configuración pública</h3>

                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm leading-5 font-overview text-gray-600">Información</dt>
                            <dd className="mt-1 text-sm font-normal leading-6 font-overview text-black sm:col-span-2 sm:mt-0">
                            Consulta la información pública del proyecto, incluyendo los usuarios registrados y sus roles actuales.
                            Configura los permisos de cada usuario y asegúrate de que solo tengan acceso a las funciones de autenticación que necesitan. Utiliza esta configuración para personalizar el comportamiento de tu sistema de autenticación y adaptarlo a las necesidades de seguridad de tu aplicación.
                            </dd>
                        </div>

                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm leading-5 font-overview text-gray-600">Usuarios y permisos</dt>
                            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                                {Users.map((item, index) => (
									<li 
                                        key={index} 
                                        className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6"
                                    >
                                        <div className="flex w-0 flex-1 items-center">
                                            <Avatar name={item.email} height={10} width={10} />
                                            <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                                <p className="truncate text-base font-overview font-medium">{item.email}</p>
                                            </div>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <a href="#" className=" text-sm font-semibold font-overview text-blue-600 hover:text-blue-500">
                                            Creador
                                            </a>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>

            <div className="mt-6 border-t border-gray-100" />

            <div className="flex justify-center items-center my-10">
                <Button
                    leftIcon={<IoTrashOutline size={20} />}
                    colorScheme="gray"
                    variant="ghost"
                >
                    Borrar proyecto
                </Button>
            </div>
        </>
    )
}

export default SettingsPage
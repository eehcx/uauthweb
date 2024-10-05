import { IoGitCompare, IoLogoGithub, IoCloudUpload } from "react-icons/io5";
import '../styles/base.styles.css'
import { useSelector } from "react-redux";

const ArticleCard = ({alt, src, title, description, href}) => {
    return(
        <article className="overflow-hidden rounded-xl shadow transition hover:shadow-xl">
            <img
                alt={alt}
                src={src}
                className=" h-36 w-full object-cover"
            />

            <div className="bg-slate-100 p-4 sm:p-6">
                <a href={href}>
                    <h3 className="mt-0.5 text-lg font-overview font-medium text-gray-900">{title}</h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                {description}
                </p>
            </div>
        </article>
    )
}

function MainComponent() {
    const Name = useSelector(state => state.project.name)
    return(
        <div className="items-start">

            <article className="rounded-xl bg-slate-100 mt-9 p-4 ring-4 ring-blue-400 sm:p-6 lg:p-8">
                <div className="flex items-start sm:gap-8">
                    <div
                        className="hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-slate-300 bg-slate-200"
                    >
                        <IoGitCompare size={40} />
                    </div>

                    <div>
                        <h3 className="mt-4 text-xl font-medium sm:text-2xl font-overview">
                            <a href="/#acerca" className="hover:underline"> Acelera nuestro desarrollo</a>
                        </h3>

                        <p className="mt-1 text-sm text-gray-700 font-overview">
                            Dale alas a nuestro sueño: un refugio digital donde la confianza florece y cada usuario encuentra su voz. Juntos, creamos un paisaje donde la seguridad y la libertad danzan en armonía, tejiendo conexiones que trascienden lo ordinario.
                        </p>

                        <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                            <div className="flex items-center gap-1 text-gray-500">
                                <IoLogoGithub size={17} />
                                <p className="text-xs font-medium font-logo">Open Source</p>
                            </div>

                            <span className="hidden sm:block" aria-hidden="true">&middot;</span>

                            <p className="mt-2 text-xs font-medium font-overview text-gray-500 sm:mt-0">
                            Colabora con <a href="https://github.com/Peter2k3/microusers" className="underline hover:text-gray-700">uauth</a>
                            </p>
                        </div>
                    </div>
                </div>
            </article>

            <div className="flex items-center justify-start space-x-2 mt-10 mx-1 mb-5">
                <IoCloudUpload size={20} />
                <h2 className=" text-xl font-overview font-medium text-slate-800">Funciones en la nube</h2>
            </div>
            
            <div  className="flex flex-wrap gap-5">
                <ArticleCard src='https://www.gstatic.com/mobilesdk/230516_mobilesdk/Authentication_-_Discovery_light.png' title='Autenticación de usuarios' description='Una solución de identidad de usuarios' href={`/project/${Name}/users`} />
                <ArticleCard src='https://www.gstatic.com/mobilesdk/230516_mobilesdk/Remote_Config_-_Discovery_light.png' title='Registros del sistema (LOGS)' description='Opten información sobre los regitros del sistema' />
                <ArticleCard src='https://www.gstatic.com/mobilesdk/230516_mobilesdk/Cloud_Messaging_-_Discovery_light.png' title='Explora las actualizaciones' description='Ver todas nuestras soluciones en el tiempo' href='/' />
            </div>
            
        </div>
    )
}

export default MainComponent
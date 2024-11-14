import { Avatar } from "@chakra-ui/react"
import { IoLogOut, IoOptions, IoPeopleSharp, IoTerminal, IoServer, IoHomeSharp, IoDocumentText } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { logout } from "../../features/userSlice";
import { clear } from "../../features/projectSlice"
import { persistor } from '../../app/store.js';

const SideItem = ({ title, url, Icon }) => {
    return(
        <>
            <li>
                <Link
                    to={url}
                    className="group relative flex justify-center rounded-md px-2 py-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-500"
                >
                    {Icon && <Icon size={22} />}
                    <span
                        className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                    >
                        {title}
                    </span>
                </Link>
            </li>
        </>
    )
}

function SidebarComponent() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
        dispatch(clear())
        persistor.purge()
        navigate('/')
    }

    return(
        <div
        	className="flex w-16 flex-col justify-between border-e rounded-l-2xl bg-slate-100 z-50"
        >
            <div>
                <div className="inline-flex size-16 items-center justify-center">
                    <Avatar height={8} width={8} bg='#94a3b8' />
                </div>

                <div className="border-t border-gray-100">
                    <div>

                        <ul className="space-y-1 border-t border-gray-300 pt-4">
                            < SideItem title='Inicio' url='overview' Icon={IoHomeSharp} />
                            < SideItem title='Plantillas' url='templates' Icon={IoDocumentText} />
                            < SideItem title='Usuarios' url='users' Icon={IoPeopleSharp} />
                            < SideItem title='Registros' url='logs' Icon={IoTerminal} />
                            {/*< SideItem title='Servidor' url='overview' Icon={IoServer} />*/}
                            < SideItem title='Configuración' url='settings' Icon={IoOptions} />
                        </ul>
                    </div>
                </div>
            </div>

            <div className="sticky inset-x-0 bottom-0 border-t rounded-bl-2xl border-slate-300 bg-slate-100 p-2">
                <form onSubmit={handleLogout}>
                    <button
                        type="submit"
                        className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-slate-100 hover:text-gray-700"
                    >
                        <IoLogOut size={24} />

                        <span
                        className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                        >
                            Logout
                        </span>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SidebarComponent

import { Avatar } from "@chakra-ui/react"
import { IoLogOut, IoOptions, IoPeopleSharp, IoTerminal, IoServer, IoHomeSharp } from "react-icons/io5";

function SidebarComponent() {
    return(
        <div className="flex w-16 flex-col justify-between border-e rounded-l-2xl bg-slate-50 z-50">
            <div>
                <div className="inline-flex size-16 items-center justify-center">
                    <Avatar height={8} width={8} />
                </div>

                <div className="border-t border-gray-100">
                    <div className="px-2">
                        <div className="py-4">
                            <a
                                href="#"
                                className="t group relative flex justify-center rounded bg-blue-50 px-2 py-1.5 text-blue-700"
                            >
                                <IoOptions size={24} />

                                <span
                                className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                                >
                                General
                                </span>
                            </a>
                        </div>

                        <ul className="space-y-1 border-t border-gray-100 pt-4">
                            <li>
                                <a
                                    href="#"
                                    className="group relative flex justify-center rounded px-2 py-1.5 text-slate-400 hover:bg-gray-50 hover:text-slate-500"
                                >
                                    <IoHomeSharp size={22} />

                                    <span
                                        className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                                    >
                                        Inicio
                                    </span>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="group relative flex justify-center rounded px-2 py-1.5 text-slate-400 hover:bg-gray-50 hover:text-slate-500"
                                >
                                    <IoPeopleSharp size={22} />

                                    <span
                                        className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                                    >
                                        Usuarios
                                    </span>
                                </a>
                            </li>

                            <li>
                                <a
                                href="#"
                                className="group relative flex justify-center rounded px-2 py-1.5 text-slate-400 hover:bg-gray-50 hover:text-slate-500"
                                >
                                    <IoTerminal size={22}/>

                                    <span
                                        className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                                    >
                                        Registros
                                    </span>
                                </a>
                            </li>

                            <li>
                                <a
                                href="#"
                                className="group relative flex justify-center rounded px-2 py-1.5 text-slate-400 hover:bg-gray-50 hover:text-slate-500"
                                >
                                    <IoServer size={22} />

                                    <span
                                        className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                                    >
                                        Servidor
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="sticky inset-x-0 bottom-0 border-t rounded-bl-2xl border-gray-100 bg-white p-2">
                <form action='#'>
                    <button
                        type="submit"
                        className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
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
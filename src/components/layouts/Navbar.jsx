import { ChevronRightIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Divider } from "@chakra-ui/react"
import { useState } from "react"
import { useSelector } from "react-redux"

import logo from '../../assets/react.svg'
import '../styles/base.styles.css'

function NavbarComponent({ changePage }) {
    const [state, setState] = useState(false);
    const ButtonBar = useSelector(state => state.user);

    const navigation = [
        { title: "Inicio", path: "/" },
        { title: "Acerca", path: "/" },
        { title: "Recursos", path: "/" },
        { title: "Docs", path: "/" },
        { title: "Precios", path: "/" }
    ];

    const Brand = () => (
        <div className="flex items-center justify-between py-5 md:block">
            <a href="/">
                <img
                    src={logo}
                    style={{ width: '30px', height: '30px' }}
                    alt="logo de empresa"
                />
            </a>
            <div className="md:hidden">
                <button className="menu-btn text-gray-400 hover:text-gray-300"
                    onClick={() => setState(!state)}
                >
                    {state ? <CloseIcon /> : <HamburgerIcon />}
                </button>
            </div>
        </div>
    );

    return (
        <div className="bg-09 sticky top-0">
            <div className={`md:hidden ${state ? "mx-2 pb-2" : "hidden"}`}>
                <Brand />
            </div>
            <nav className={`pb-2 md:text-sm ${state ? "absolute z-20 top-0 inset-x-0 bg-zinc-900 rounded-xl mx-2 mt-2 md:mx-0 md:mt-0 md:relative md:bg-transparent" : ""}`}>
                <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
                    <Brand />
                    <div className={`flex-1 items-center mt-8 md:mt-0 md:flex ${state ? 'block' : 'hidden'}`}>
                        <ul className="flex-1 justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                            {
                                navigation.map((item, idx) => (
                                    <li key={idx} className="text-gray-300 font-bold font-overview hover:text-blue-500">
                                        <a
                                            onClick={() => changePage(idx)} // Cambiado a una función de flecha
                                            className="block"
                                        >
                                            {item.title}
                                        </a>
                                    </li>
                                ))
                            }
                            <li>
                                <a
                                    href={ButtonBar.url || '/login'}
                                    className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-semibold bg-blue-600 font-overview hover:bg-blue-500 active:bg-blue-700 duration-150 rounded-full md:inline-flex"
                                >
                                    {ButtonBar.title || 'Ingresar'}
                                    <ChevronRightIcon />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Divider borderColor="gray.800" />
        </div>
    );
}

export default NavbarComponent
;
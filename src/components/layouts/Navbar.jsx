import { ChevronRightIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Divider, Text } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom';

import '../styles/base.styles.css'

function NavbarComponent({ changePage }) {
    const [state, setState] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const ButtonBar = useSelector(state => state.user);
    const navigate = useNavigate();

    const navigation = [
        { title: "Acerca", path: "/about" },
        { title: "Recursos", path: "/resources" },
        { title: "Docs", path: "/docs" },
        { title: "Precios", path: "/pricing" }
    ];

    const handleNavigation = (route) => {
        navigate(route); 
    };

    const Brand = () => (
        <div className="flex items-center justify-between py-5 md:block">
            <a href="/">
                {/*
                <img
                    src={logo}
                    style={{ width: '30px', height: '30px' }}
                    alt="logo de empresa"
                />
                */}
                <Text fontFamily='SUSE' fontWeight={600} fontSize={25} color='white' >upcauth</Text>
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

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setIsVisible(false); 
            } else {
                setIsVisible(true);
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`bg-[#121212] sticky top-0 z-50 transition-transform duration-300 ${isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'}`} >
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
                                    <li key={idx} className="text-gray-300 font-bold font-overview hover:text-blue-500 cursor-pointer">
                                        <a
                                            onClick={() => handleNavigation(item.path)}
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
                                    className="flex items-center justify-center gap-x-1 py-1 pl-3 pr-2 text-white font-semibold bg-zinc-800 font-overview border border-zinc-700 hover:bg-zinc-700 active:bg-zinc-700 duration-150 rounded-lg md:inline-flex"
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

export default NavbarComponent;
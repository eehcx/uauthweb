import { useState, useEffect } from "react"
import { Outlet, useParams } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Box, LinkBox, LinkOverlay } from "@chakra-ui/react"
import { ChevronRightIcon, AddIcon } from '@chakra-ui/icons'
import { Link, useNavigate } from 'react-router-dom';
import { IoFingerPrint } from "react-icons/io5";
import { useSelector } from "react-redux"

import SidebarComponent from "../../components/layouts/Sidebar";

function DashboardPage() {
    const navigate = useNavigate()
    const Project = useSelector(state => state.project)
    useEffect(() => {
        document.title = 'Dashboard | Autenticación fácil, rápida y gestionable para implementar';
    }, []);

    return(
        <>
            <div className="flex justify-between items-center 2xl:mx-9 xl:mx-5 lg:mx-5 md:mx-5 sm:mx-5 ">
                <Breadcrumb marginX={10} paddingTop={8} paddingBottom={2} color={'#fafafa'} spacing='8px' separator={<ChevronRightIcon color='white' />}>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='/'>Inicio</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href='/console'>Consola</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href='#'>Dashboard</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
            
            <div className="2xl:mx-20 xl:mx-10 lg:mx-10 md:mx-0 sm:mx-0 mt-5 2xl:mb-20 xl:mb-10 lg:mb-10 md:mb-0 sm:mb-0 bg-slate-50 2xl:rounded-2xl xl:rounded-2xl lg:rounded-2xl md:rounded-none sm:rounded-none flex min-h-screen">
                <SidebarComponent />

                <div className="flex-1 p-7 overflow-auto">
                    <div className="flex items-center flex-row">
                        <h1 className="font-logo text-neutral-900 text-4xl font-semibold"> {(Project.name || 'null').toUpperCase()}</h1>
                        <Box className="hidden md:flex zflex-row px-2 mx-2 items-center border-slate-400 border bg-slate-100 rounded-2xl">
                            <IoFingerPrint className="mr-1" />
                            <p className="font-logo font-medium">{Project.plan}</p>
                        </Box>

                    </div>

                    <Outlet className="flex-1" />
                </div>
            </div>
        </>
    )
}

export default DashboardPage
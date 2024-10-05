import { useState, useEffect } from "react"
import { Outlet, useParams } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Box, LinkBox, LinkOverlay } from "@chakra-ui/react"
import { ChevronRightIcon, AddIcon } from '@chakra-ui/icons'
import { IoFingerPrint } from "react-icons/io5";
import { useSelector } from "react-redux"

import SidebarComponent from "../../components/layouts/Sidebar";

function DashboardPage() {
    const Project = useSelector(state => state.project)
    useEffect(() => {
        document.title = 'Dashboard | Autenticación fácil, rápida y gestionable para implementar';
    }, []);

    return(
        <>
            <div className="flex justify-between items-center mx-5 py-2">
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
            
            <div className="mx-10 mt-5 mb-10 bg-slate-50 rounded-2xl flex">
                <SidebarComponent />

                <div className="p-7">
                    <div className="flex items-center flex-row">
                        <h1 className="font-logo text-neutral-900 text-4xl font-semibold"> {(Project.name || 'null').toUpperCase()}</h1>
                        <Box className="flex zflex-row px-2 mx-2 items-center border-slate-400 border bg-slate-300 rounded-2xl" >
                            <IoFingerPrint className="mr-1" />
                            <p className="font-logo font-medium">{Project.plan}</p>
                        </Box>
                    </div>

                    <LinkBox className="flex flex-row px-3 py-1 mt-3 mb-6 w-28 items-center bg-blue-600 hover:bg-blue-700 rounded-2xl" >
                        <AddIcon w={3} h={3} color='gray.200' className="mr-2" />
                        <LinkOverlay color='gray.200' className="font-logo font-medium" href='/dashboard/template'>Plantillas</LinkOverlay>
                    </LinkBox>

                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default DashboardPage
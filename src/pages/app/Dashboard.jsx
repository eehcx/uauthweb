import { useState, useEffect } from "react"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Tabs, TabList, TabPanels, Tab, TabPanel, Avatar, Box, LinkBox, LinkOverlay } from "@chakra-ui/react"
import { ChevronRightIcon, AddIcon } from '@chakra-ui/icons'
import { IoFingerPrint } from "react-icons/io5";
import { useSelector } from "react-redux"

import SidebarComponent from "../../components/layouts/Sidebar";
import TableList from "../../components/layouts/TablesList";
import MainComponent from "../../components/layouts/Main";

function DashboardPage() {
    const Project = useSelector(state => state.project)

    const headers = ['Identificador', 'Creación', 'ID']
    const keys = ['email', 'creationDate', 'id']

    const data = [
        { email: 'user1@example.com', creationDate: '22 feb 2024', id: 1 },
        { email: 'user2@example.com', creationDate: '26 abr 2023', id: 2 },
        { email: 'user3@example.com', creationDate: '25 abr 2023', id: 3 },
        { email: 'user1@example.com', creationDate: '22 feb 2024', id: 4 },
        { email: 'user2@example.com', creationDate: '26 abr 2023', id: 5 },
        { email: 'user2@example.com', creationDate: '26 abr 2023', id: 6 },
    ]

    useEffect(() => {
        document.title = 'Dashboard | Autenticación fácil, rápida y gestionable para implementar';
    }, []);

    return(
        <>
            <div className="flex justify-between items-center mx-10 py-2">
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
            
            <div className="mx-10 mt-5 mb-10 bg-slate-100 rounded-2xl flex">
                <SidebarComponent />

                <div className="p-7">
                    <div className="flex items-center flex-row">
                        <h1 className="font-logo text-neutral-900 text-4xl font-semibold">{Project.name.toUpperCase()}</h1>
                        <Box className="flex zflex-row px-2 mx-2 items-center border-slate-400 border bg-slate-300 rounded-2xl" >
                            <IoFingerPrint className="mr-1" />
                            <p className="font-logo font-medium">{Project.plan}</p>
                        </Box>
                    </div>

                    <LinkBox className="flex flex-row px-3 py-1 mt-3 mb-6 w-28 items-center bg-blue-600 hover:bg-blue-700 rounded-2xl" >
                        <AddIcon w={3} h={3} color='gray.200' className="mr-2" />
                        <LinkOverlay color='gray.200' className="font-logo font-medium" href='/dashboard/template'>Plantillas</LinkOverlay>
                    </LinkBox>

                    <MainComponent />
                </div>
            </div>
        </>
    )
}

export default DashboardPage

/*
<Tabs align="end">
    <TabList>
        <Tab>Principal</Tab>
        <Tab>Usuarios</Tab>
        <Tab>Historial</Tab>
    </TabList>
    <TabPanels>
        <TabPanel>
            <MainComponent />
        </TabPanel>
        <TabPanel>
            <TableList caption="Registro de usuarios" headers={headers} keys={keys} data={data} />
        </TabPanel>
        <TabPanel>
            <p></p>
        </TabPanel>
    </TabPanels>
</Tabs>
*/
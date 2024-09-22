import { useState, useEffect } from "react"
import { Box, Heading, Button, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'
import '../../components/styles/base.styles.css'

function LoginPage (){
    useEffect(() => {
        document.title = 'Iniciar sesión | Autenticación fácil, rápida y gestionable para implementar';
    }, [])
    return(
        <>
            <div className="LoginPage">
                <Breadcrumb marginX={10} paddingTop={8} paddingBottom={2} color={'#fafafa'} spacing='8px' separator={<ChevronRightIcon color='white' />}>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='/'>Inicio</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href='#'>Iniciar sesión</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
        </>
    )
}

export default LoginPage
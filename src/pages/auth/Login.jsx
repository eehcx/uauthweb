import { useState, useEffect } from "react"
import { Heading, Button, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useNavigate } from "react-router-dom"
import '../../components/styles/base.styles.css'
import TextInput from "../../components/common/TextInput"
import { useDispatch } from "react-redux"
import { login } from "../../features/userSlice";

function LoginPage (){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [Email, setEmail] = ('')

    const isError = Email === ''

    const handleLogin = () => {
        dispatch(login())
        navigate('/console'); 
    }

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
                        <BreadcrumbLink href='#'>Bienvenido</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>

                <div className=" mx-10">
                    <div className="my-10">
                        <Heading fontFamily='SUSE' className="font-logo text-gray-200 font-medium" as='h1' size='2xl'>Bienvenido, desarrolla y <span className="hidden lg:inline"> <br /> </span>potencia tus proyectos.</Heading>
                    </div>

                    <TextInput isInvalid={isError} value={Email} onChange={setEmail} placeholder='Ingresa tu correo electrónico' placeholderSM='Ingresa tu correo electrónico' fontSize={45} type='email' />

                    <div className="flex my-8 justify-end">
                        <Button colorScheme='blue' size='lg' onClick={()=> handleLogin()} >
                            Continuar
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage
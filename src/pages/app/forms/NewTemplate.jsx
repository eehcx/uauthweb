import { useState, useEffect } from "react"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Heading, Box, Button } from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useNavigate } from "react-router-dom"

function NewTemplate() {

    const handleUpdate = () => {
        //
    }

    useEffect(() => {
        document.title = 'Nueva plantilla | Autenticación fácil, rápida y gestionable para implementar';
    }, []);
    return(
        <div className="NewTemplatePage">
            <Breadcrumb marginX={10} paddingTop={8} paddingBottom={2} color={'#fafafa'} spacing='8px' separator={<ChevronRightIcon color='white' />}>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>Inicio</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='/dashboard'>Dashboard</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>Plantilla</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>

            <div className="mx-10">
                <Box className="flex justify-start items-center my-10">
                    <Heading fontWeight={500} fontFamily='SUSE' className="font-logo text-gray-200 " as='h1' size='2xl'>
                        Arrojanos tu formato 
                        <span className="hidden lg:inline"> <br /> </span> personalizado de usuario.
                    </Heading>
                </Box>

                <div className="h-40 w-auto flex items-center justify-center">
                    <label htmlFor="file" className="cursor-pointer rounded-2xl border-zinc-800 border-dashed border text-center p-4 md:p-8">
                        <svg className="w-10 h-10 mx-auto" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.1667 26.6667C8.48477 26.6667 5.5 23.6819 5.5 20C5.5 16.8216 7.72428 14.1627 10.7012 13.4949C10.5695 12.9066 10.5 12.2947 10.5 11.6667C10.5 7.0643 14.231 3.33334 18.8333 3.33334C22.8655 3.33334 26.2288 6.19709 27.0003 10.0016C27.0556 10.0006 27.1111 10 27.1667 10C31.769 10 35.5 13.731 35.5 18.3333C35.5 22.3649 32.6371 25.7279 28.8333 26.5M25.5 21.6667L20.5 16.6667M20.5 16.6667L15.5 21.6667M20.5 16.6667L20.5 36.6667" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className="mt-3 text-gray-700 max-w-xs mx-auto">Da click para <span className="font-medium text-blue-600">subir tu archivo</span> o arrastra el archivo aquí</p>
                    </label>
                    <input id="file" type="file" className="hidden" />
                </div>

                {/*
                    <Box marginY={8} className="flex justify-center items-center">
                        <Button colorScheme='blue' size='lg' onClick={handleUpdate} >
                            Continuar
                        </Button>
                    </Box>
                    */}
            </div>
        </div>
    )
}

export default NewTemplate
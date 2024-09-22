import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, useBreakpointValue, Heading, Button } from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useNavigate } from "react-router-dom"
import '../../components/styles/base.styles.css'
import TextInput from "../../components/common/TextInput"

function RegisterPage() {
    const [Name, setName] = ('')
    //const [isError, setIsError] = useState(false);
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/dashboard'); 
    };

    const handleInputChange = (e) => setInput(e.target.value)

    const isError = Name === ''

    return(
        <div className="RegisterPage">
            <Breadcrumb marginX={10} paddingTop={8} paddingBottom={2} color={'#fafafa'} spacing='8px' separator={<ChevronRightIcon color='white' />}>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>Inicio</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>Consola</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>Registro</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>

            <Box style={{ margin: 40 }}>
                <Box className="my-10">
                    <Heading fontFamily='SUSE' className="font-logo text-gray-200 font-medium " as='h1' size='2xl'>Comencemos con el nombre <span className="hidden lg:inline"> <br /> </span> de tu proyecto. </Heading>
                </Box>
                <TextInput isInvalid={isError} value={Name} onChange={handleInputChange} placeholder='Ingresa el nombre de tu proyecto' placeholderSM='Nombre del proyecto' fontSize={45} type='text' />
                <Box marginY={8} className="flex justify-end">
                    <Button colorScheme='blue' size='lg' onClick={handleNavigate} >
                        Continuar
                    </Button>
                </Box>
            </Box>
        </div>
    )
}

export default RegisterPage
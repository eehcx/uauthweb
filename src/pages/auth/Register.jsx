import { useDisclosure, Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, useBreakpointValue, Heading, Button, IconButton } from "@chakra-ui/react"
import { ChevronRightIcon, SmallAddIcon } from '@chakra-ui/icons'
import { useNavigate } from "react-router-dom"
import '../../components/styles/base.styles.css'
import TextInput from "../../components/common/TextInput"
import FormModalComponent from "../../components/common/FormModal"

function RegisterPage() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [Name, setName] = ('')
    //const [isError, setIsError] = useState(false);
    const navigate = useNavigate();

    const handleNavigate = () => {
        console.log(Name);
        navigate(`/project/${Name}`); 
    };

    //const handleInputChange = (e) => setName(e.target.value)

    const isError = Name === ''

    return(
        <div className="RegisterPage">
            <Breadcrumb marginX={10} paddingTop={8} paddingBottom={2} color={'#fafafa'} spacing='8px' separator={<ChevronRightIcon color='white' />}>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>Inicio</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='/console'>Consola</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>Registro</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>

            <FormModalComponent isOpen={isOpen} onClose={onClose} title='Email alternativo' />

            <Box style={{ margin: 40 }}>
                <Box className="my-10">
                    <Heading fontFamily='SUSE' className="font-logo text-gray-200 font-medium " as='h1' size='2xl'>Comencemos con el nombre <span className="hidden lg:inline"> <br /> </span> de tu proyecto. </Heading>
                </Box>
                <TextInput isInvalid={isError} value={Name} onChange={setName} placeholder='Ingresa el nombre de tu proyecto' placeholderSM='Nombre del proyecto' fontSize={45} type='text' />

                <Box marginY={8} className="flex justify-between">
                    <IconButton 
                        rounded={9} 
                        variant='outline' 
                        color='#f4f4f5' 
                        aria-label='add custom email' 
                        icon={<SmallAddIcon />} 
                        _hover={{
                            color: '#60a5fa',
                            bg: '#090909', 
                            borderColor: '#60a5fa' 
                        }}
                        onClick={onOpen}
                    />
                    <Button colorScheme='blue' size='lg' onClick={handleNavigate} >
                        Continuar
                    </Button>
                </Box>
            </Box>
        </div>
    )
}

export default RegisterPage
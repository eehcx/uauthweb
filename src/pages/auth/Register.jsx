import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, useBreakpointValue, Heading, Button } from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useNavigate } from "react-router-dom"
import '../../components/styles/base.styles.css'

function RegisterPage() {
    const [Name, setName] = ('')
    //const [isError, setIsError] = useState(false);
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/dashboard'); 
    };

    const handleInputChange = (e) => setInput(e.target.value)

    const isError = Name === ''

    const placeholder = useBreakpointValue({
        base: 'Nombre del proyecto',
        sm: '',
        md: 'Ingresa el nombre de tu proyecto',
        lg: 'Ingresa el nombre de tu proyecto',
        xl: 'Ingresa el nombre de tu proyecto'
    })

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
                <Box className=" my-10">
                    <Heading fontFamily='SUSE' className="font-logo text-gray-200 font-medium " as='h1' size='2xl'>Comencemos con el nombre <span className="hidden lg:inline"> <br /> </span> de tu proyecto. </Heading>
                </Box>
                <FormControl isInvalid={isError}>
                    <Input 
                        value={Name}
                        onChange={handleInputChange}
                        type="text"
                        fontFamily='SUSE'
                        fontWeight={300}
                        className="font-overview" 
                        paddingY={7}
                        fontSize={{
                            base: '24px',
                            sm: '30px',
                            md: '35px',
                            lg: '40px',     
                            xl: '45px',    
                        }}
                        variant='flushed' 
                        placeholder={placeholder}
                        color='#fafafa'
                        sx={{
                            '::placeholder': {
                                color: 'gray.400', 
                                opacity: 1,
                            },
                            borderColor: 'gray.400',
                            _focus: {
                                borderColor: 'blue.600',
                                boxShadow: 'none',
                                borderWidth: 0.7,
                            },
                            _hover: {
                                //borderColor: 'blue.600',
                                //borderWidth: 0.9
                            },
                            _disabled: {
                                borderColor: 'gray.900', 
                            }
                        }}
                    />
                </FormControl>
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
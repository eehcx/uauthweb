import { useState } from "react"
import { useDisclosure, Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, useBreakpointValue, Heading, Button, IconButton, useToast } from "@chakra-ui/react"
import { ChevronRightIcon, SmallAddIcon } from '@chakra-ui/icons'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { registerProject, clear } from "../../features/projectSlice"
import '../../components/styles/base.styles.css'
import handleReplace from "../../utils/InputHelper"
//import usePostData from "../../hooks/usePostData"
import TextInput from "../../components/common/TextInput"
import FormModalComponent from "../../components/common/FormModal"

function RegisterPage() {
	const dispatch = useDispatch()
    const toast = useToast()
    const navigate = useNavigate()
    const { isOpen, onOpen, onClose } = useDisclosure()
    //const { data, loading, error, postData } = usePostData('http://localhost:4000/resources/v1/project')

    const user = useSelector(state => state.user)
    const [Name, setName] = useState('')
    const [CustomEmail, setCustomEmail] = useState('')
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleNavigate = async () => {
        if (Name.trim() == "") {
            toast({
                description: "Tiene que tener un nombre",
                status: "warning",
                duration: 1500,
                isClosable: true,
            });
            return;
        }
        try {
            setIsLoading(true)
            const formData = new FormData();

            formData.append("idUsuario", user.userNumber)
            formData.append("email", CustomEmail || user.email)
            formData.append("projectName", Name)

            const responseSpring = await fetch("http://localhost:8080/v1/projects", {
                method: "POST",
                body: formData
            });

            if (!responseSpring.ok) { 
                throw new Error('Failed to create project in Spring API');
            }

            const message = await responseSpring.json();
            //console.log("Spring: ", message)

            const responseMongo = await fetch("http://localhost:4000/resources/v1/project", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    projectNumber: message.idProyecto,
                    developerId: user.id,
                    projectName: Name,
                    projectToken: message.uuid
                })
            });

            if (!responseMongo.ok) {
                throw new Error('Failed to register project in Resource API');
            }

            const data = await responseMongo.json();
            dispatch(registerProject({ 
                name: data.projectName, 
                projectNumber: data.projectNumber, 
                token: data.projectToken, 
                dbName: data.dbName 
            }))

            navigate(`/project/${Name}/overview`);

            toast({
                description: "Creado exitosamente",
                status: "success",
                duration: 1500,
                isClosable: true,
            });
        } catch (error) {
            toast({
                description: "No se pudo registrar el proyecto",
                status: "error",
                duration: 1500,
                isClosable: true,
            });
            //console.error("Error al enviar los datos:", error);
        } finally { 
            setIsLoading(false);
        }
    };

    const handleChange = (event) => {
        const name = event.target.value;
        const { value, isValid } = handleReplace(name);

        if (!isValid) {
            toast({
                description: "El nombre solo puede contener letras y números.",
                status: "warning",
                duration: 3000,
                isClosable: true,
            })
        }

        setName(value)
        setIsError(!isValid)
    }

    return(
        <div className="RegisterPage">
            <Breadcrumb
                marginX={10}
                paddingTop={8}
                paddingBottom={2}
                color={'#fafafa'}
                spacing='8px'
                separator={<ChevronRightIcon color='white'/>}
            >
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

            <FormModalComponent
                isOpen={isOpen}
                onClose={onClose}
                inputValue={CustomEmail}
                setInputValue={setCustomEmail}
            />

            <Box style={{ margin: 40 }}>
                <Box className="my-10">
                    <Heading
                        fontFamily='SUSE'
                        className="font-logo text-gray-200 font-medium"
                        as='h1' size='2xl'
                    >Comencemos con el nombre<span className="hidden lg:inline"> <br /> </span> de tu proyecto.</Heading>
                </Box>
                <TextInput
                    value={Name}
                    onChange={handleChange}
                    placeholder='Ingresa el nombre de tu proyecto'
                    isInvalid={isError}
                    placeholderSM='Nombre del proyecto'
                    fontSize={45}
                    type='text'
                />

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
                    <Button
                    	colorScheme='blue'
                    	size='lg'
                    	disabled={isLoading}
                    	onClick={handleNavigate}
                    >
                        {isLoading ? 'Registrando...' : 'Continuar'}
                    </Button>
                </Box>
            </Box>
        </div>
    )
}

export default RegisterPage

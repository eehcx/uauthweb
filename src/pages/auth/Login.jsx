import { useState, useEffect } from "react"
import { Heading, Button, Breadcrumb, BreadcrumbItem, Box, BreadcrumbLink, useToast } from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useNavigate } from "react-router-dom"
import '../../components/styles/base.styles.css'
import DynamicFormComponent from "../../components/forms/DynamicForm"
import { useDispatch } from "react-redux"
import { login } from "../../features/userSlice"

const formSteps = [
    [
        {
            name: 'email',
            placeholder: 'Ingresa tu correo electrónico',
            placeholderSM: 'Ingresa tu correo electrónico',
            type: 'email',
            isRequired: true,
        },
    ],
    [
        {
            name: 'password',
            placeholder: 'Escribe tu contraseña',
            placeholderSM: 'Escribe tu contraseña',
            type: 'password',
            isRequired: true,
        },
    ],
];

function LoginPage (){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const toast = useToast()
    const [currentForm, SetCurrentForm] = useState(1)
    const [formData, setFormData] = useState({ email: '', password: '' })
    const [Loading, setLoading] = useState(false)

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (currentForm === 1 && !formData.email) {
                return;
            }
            if (currentForm === 2 && !formData.password) {
                return;
            }

            if (currentForm === 1) {
                SetCurrentForm(2);
            } else {
                const data = {
                    email: formData.email,
                    password: formData.password,
                };

                const response = await fetch('http://localhost:8080/users/v1/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                    body: JSON.stringify(data),
                });

                if (!response.ok) {
                    throw new Error("Error al consultar la API");
                }

                const session = await response.json();

                if (session) {
                    //console.log(session)
                    let mongoId = null;
                    try {
                        const res = await fetch(`http://localhost:9000/resources/v1/user?email=${session.email}`, {
                            method: 'GET',
                        });

                        if (!res.ok) {
                            throw new Error('No se pudo obtener el mongoId');
                        }

                        const data = await res.json();
                        mongoId = data._id;
                    } catch (error) {
                        //console.error(error);
                        toast({
                            description: "Error al obtener el _id.",
                            status: "error",
                            duration: 2000,
                            isClosable: true,
                        });
                        setLoading(false);
                        return;
                    }

                    dispatch(login({
                        id: mongoId,
                        userNumber: session.idUsuario,
                        email: session.email,
                        role: session.rol,
                    }));
                    navigate('/console')
                } else {
                    toast({
                        description: "No se pudo iniciar sesión.",
                        status: "error",
                        duration: 2000,
                        isClosable: true,
                    });
                }
            }
        } catch (error) {
            toast({
                description: "Sesión inválida.",
                status: "error",
                duration: 2000,
                isClosable: true,
            });
        } finally {
            setLoading(false);
        }
    }

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
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

                <div className="mx-10">
                    <div className="my-10">
                        <Heading fontFamily='SUSE' className="font-logo text-gray-200 font-medium" as='h1' size='2xl'>Bienvenido, desarrolla y <span className="hidden lg:inline"> <br /> </span>potencia tus proyectos.</Heading>
                    </div>

                    <form onSubmit={handleLogin}>
                        <DynamicFormComponent
                            fields={formSteps[currentForm - 1]}
                            values={formData}
                            onChange={handleChange}
                        />
                        {/*{error && <p className=" text-red-600 text-lg font-medium">{error}</p>}*/}

                        <Box marginY={8} className="flex justify-end">
                            <Button colorScheme='blue' size='lg' disabled={Loading} as="button" type="submit">
                                {Loading ? 'Registrando...' : 'Continuar'}
                            </Button>
                        </Box>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginPage

import { useState, useEffect } from "react"
import { Box, Heading, Button, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useNavigate } from "react-router-dom"
import '../../components/styles/base.styles.css'
import TextInput from "../../components/common/TextInput"
import useRegisterUser from "../../hooks/useRegisterUser"
import usePostData from "../../hooks/usePostData"
import { formSteps } from "../../components/forms/FormStep"

const DynamicForm = ({ fields, values, onChange }) => {
    return (
        <>
            {fields.map((field, index) => (
                <TextInput
                    key={index}
                    value={values[field.name]}
                    onChange={(e) => onChange(field.name, e.target.value)}
                    placeholder={field.placeholder}
                    placeholderSM={field.placeholderSM}
                    fontSize={35}
                    marginBottom={4}
                    type={field.type}
                    isRequired={field.isRequired}
                />
            ))}
        </>
    );
}

function SignUpPage (){
    const navigate = useNavigate()
    const [currentForm, SetCurrentForm] = useState(1)
    const [formData, setFormData] = useState({ email: '', password: '' })
    // Manejo de errores y debug
    const { registerUser, isLoading, error, success } = useRegisterUser()
    const { data, loading, error: e, postData } = usePostData('http://localhost:4000/resources/v1/user')

    const handleNext = async (e) => {
        e.preventDefault();
        
        if (currentForm === 1 && !formData.email) {
            return;
        }
        if (currentForm === 2 && !formData.password) {
            return; 
        }
    
        if (currentForm === 1) {
            SetCurrentForm(2);
        } else {
            const result = await registerUser(formData.email, formData.password)

            if (result) {
                await postData({ email: formData.email })
                navigate('/login')
            }
        }
    };

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    }

    useEffect(() => {
        document.title = 'Regístrate | Autenticación fácil, rápida y gestionable para implementar';
    }, [])

    return(
        <>
            <div className="SignUpPage">
                <Breadcrumb marginX={10} paddingTop={8} paddingBottom={2} color={'#fafafa'} spacing='8px' separator={<ChevronRightIcon color='white' />}>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='/'>Inicio</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href='#'>Registro</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>

                <Box style={{ margin: 40 }}>
                    <div className="my-10">
                        <Heading fontFamily='SUSE' className="text-gray-200 font-medium " as='h2' size='2xl'>Crea una cuenta para<span className="hidden lg:inline"> <br /> </span> empezar a crear.</Heading>
                    </div>

                    <form onSubmit={handleNext}>
                        <DynamicForm
                            fields={formSteps[currentForm - 1]}
                            values={formData}
                            onChange={handleChange}
                        />
                        {error && <p className=" text-red-600 text-lg font-medium">{error}</p>}
                        {success && <p className=" text-emerald-600 text-lg font-medium">Registro exitoso</p>}

                        <Box marginY={8} className="flex justify-end">
                            <Button colorScheme='blue' size='lg' disabled={isLoading} as="button" type="submit">
                            {isLoading ? 'Registrando...' : 'Continuar'}
                            </Button>
                        </Box>
                    </form>
                </Box>
                
            </div>
        </>
    )
}

export default SignUpPage


/*
const handleRegister = async (email, password) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
        const response = await fetch('http://localhost:8080/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: { email, password },
            //credentials: "include"
        });

        if (!response.ok) {
            const errorData = await response.json();
            setError(errorData); 
            return null;
        }

        const responseData = await response.json();
        setSuccess(true);
        return responseData; 
    } catch (err) {
        setError('Error al registrar (sin conexión)');
        //console.error(err);
        return null; 
    } finally {
        setIsLoading(false);
    }
};
*/
import { Box, OrderedList, UnorderedList, ListItem, Text, Heading, Code, Link, Divider } from '@chakra-ui/react'
import { jwtGenerate, jwtHeader, postUser, getUser } from '../../../utils/codeBlocks';

const UsageAPI = () => {
    return (
        <>
            <Text color="#DCDCDC" mt={2} mb={5} >
                UPC Authentication proporciona una API RESTful fácil de usar para integrar la autenticación de usuarios en tus aplicaciones. Sigue estos pasos para empezar.
            </Text>

            <Heading color="#FAFAFA" fontFamily="SUSE" as="h3" size="md" mb={4}>Pre-requisitos</Heading>

            <Text color="#DCDCDC" mt={2} mb={3} >
                Antes de comenzar, asegúrate de contar con:
            </Text>

            <OrderedList color="#DCDCDC" mb={5}>
                <ListItem>Una cuenta en nuestra plataforma y un proyecto creado.</ListItem>
                <ListItem>La API Key generada al registrar tu proyecto.</ListItem>
                <ListItem>Un entorno para realizar solicitudes API (por ejemplo, Postman o bibliotecas como axios o fetch en tu código).</ListItem>
            </OrderedList>

            <Heading color="#FAFAFA" fontFamily="SUSE" as="h3" size="md" mb={4}>Registrar un Proyecto</Heading>

            <Text color="#DCDCDC" mt={2} mb={5} >
                Si aún no tienes un proyecto registrado, asegúrate de contar con un proyecto en nuestra la plataforma, solo tienes que ingresar {' '}
                <Link color='blue.300' href='/console/register'>
                    aquí
                </Link> y registrar tu aplicación.
            </Text>

            <Heading color="#FAFAFA" fontFamily="SUSE" as="h3" size="md" mb={4}>Autenticación del Proyecto</Heading>

            <Text color="#DCDCDC" mt={2} mb={5} >
                Las solicitudes a la API requieren un JWT firmado con tu{' '}
                <Code colorScheme="blue">apiKey</Code> .
            </Text>

            <Heading color="#FAFAFA" fontFamily="SUSE" as="h4" size="sm" mb={5}>Generar un JWT</Heading>

            <Text color="#DCDCDC" mt={2}>
                Usa cualquier biblioteca de JWT en tu lenguaje de programación. Aquí tienes un ejemplo en Node.js:
            </Text>

            <Box bg="#121212" py={7} borderRadius="md">
                <Code bgColor="#181818" color="#fff" p={4} borderRadius="md" w="full" display="block" whiteSpace="pre" fontSize="sm">
                    {jwtGenerate}
                </Code>
            </Box>

            <Heading color="#FAFAFA" fontFamily="SUSE" as="h4" size="sm" mb={5}>Configurar el encabezado de autenticación</Heading>

            <Text color="#DCDCDC" mt={2}>
            Incluye el token en todas tus solicitudes HTTP:
            </Text>

            <Box bg="#121212" py={7} borderRadius="md">
                <Code bgColor="#181818" color="#fff" p={4} borderRadius="md" w="full" display="block" whiteSpace="pre" fontSize="sm">
                    {jwtHeader}
                </Code>
            </Box>

            <Heading color="#FAFAFA" fontFamily="SUSE" as="h3" size="md" mb={4}>Creación del Esquema de Usuarios</Heading>

            <Text color="#DCDCDC" mt={2} mb={5} >
                Si aún no tienes un esquema o plantilla registrado, solo accede al dashboard de tu proyecto y navega hasta el apartado de plantillas o solo ingresar {' '}
                <Link color='blue.300' href='/console/'>
                    aquí
                </Link> para ir a la consola.
            </Text> 

            <Text color="#DCDCDC" mt={2} mb={3} >
                Por defecto nosotros creamos y manejamos los siguientes campos:
            </Text>

            <UnorderedList color="#DCDCDC" mb={5}>
                <ListItem><Code>email:</Code> Para acceso y otras funciones</ListItem>
                <ListItem><Code>password:</Code> Manejamos el hash</ListItem>
                <ListItem><Code>createdAt:</Code> Fecha de creación</ListItem>
                <ListItem><Code>lastLoginAt:</Code> Último acceso a tu app</ListItem>
            </UnorderedList>

            <Text color="#DCDCDC" mt={2} mb={5} >
            Los esquemas se manejan utilizando los formatos de AJV basados en JSON Schemas. Para más información sobre la personalización de las plantillas de usuarios, consulta {' '}
                <Link color='blue.300' href='/docs#schemas'>
                    aquí
                </Link> la documentación.
            </Text>

            <Heading color="#FAFAFA" fontFamily="SUSE" as="h3" size="md" mb={4}>Crear un Usuario
            </Heading>

            <Text color="#DCDCDC" mt={2} mb={5} >
            Registra un nuevo usuario con los atributos por defecto y los personalizados definidos en tu esquema:
            </Text>
            
            <Code colorScheme="red">POST /uauth/v1/user/register</Code>

            <Box bg="#121212" py={7} borderRadius="md">
                <Code bgColor="#181818" color="#fff" p={4} borderRadius="md" w="full" display="block" whiteSpace="pre" fontSize="sm">
                    {postUser}
                </Code>
            </Box>

            <Heading color="#FAFAFA" fontFamily="SUSE" as="h3" size="md" mb={4}>Verificar el Usuario Creado
            </Heading>

            <Text color="#DCDCDC" mt={2} mb={5} >
            Consulta la lista de usuarios en tu proyecto:
            </Text>

            <Code colorScheme="green">GET /uauth/v1/user/</Code>

            <Box bg="#121212" py={3} borderRadius="md">
                <Code bgColor="#181818" color="#fff" p={4} borderRadius="md" w="full" display="block" whiteSpace="pre" fontSize="sm">
                    {getUser}
                </Code>
            </Box>

            <Divider borderColor="#505050"/>

            <Heading color="#FAFAFA" fontFamily="SUSE" as="h3" size="md" mt={7} mb={5}>Próximos Pasos
            </Heading>

            <UnorderedList color="#DCDCDC" mb={5}>
                <ListItem>Explora cómo gestionar sesiones de usuario en {' '} 
                    <Link color='blue.300' href='/docs#auth'>
                        Autenticación
                    </Link>.
                </ListItem>
                <ListItem>Aprende sobre todas las capacidades de la API en {' '} 
                    <Link color='blue.300' href='/docs#auth'>
                    Referencia API
                    </Link>.
                </ListItem>
                <ListItem>Personaliza tu esquema de usuarios con más atributos en {' '} 
                    <Link color='blue.300' href='/docs#auth'>
                    Esquemas JSON
                    </Link>.
                </ListItem>
            </UnorderedList>
        </>
    );
};

export default UsageAPI;
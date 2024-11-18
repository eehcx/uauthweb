import { Box, Heading, Text, VStack, SimpleGrid, Icon, Link } from '@chakra-ui/react';
import { FaBook, FaHeadset, FaServer, FaShieldAlt, FaFileAlt } from 'react-icons/fa';
import NavbarComponent from "../../components/layouts/Navbar"
import Footer from "../landing/HomeFooter";

const ResourcesPage = () => {
    return (
        <>
        <NavbarComponent/>
        <Box bg="#121212" color="gray.200" minHeight="100vh" px={10} py={20}>
            <VStack spacing={8} textAlign="center" mb={12}>
                <Heading size="2xl" color="white">Recursos</Heading>
                <Text fontSize="xl" color="gray.400" maxW="3xl">
                    Accede a nuestros recursos y documentación para aprovechar al máximo nuestra plataforma. Aquí encontrarás toda la información que necesitas para utilizar el producto, desde guías hasta políticas de privacidad.
                </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>

                {/* Documentación */}
                <VStack bg="#121212" p={6} borderRadius="md" textAlign="center">
                    <Icon as={FaBook} w={8} h={8} color="blue.600" />
                    <Heading size="md" mt={4} color="white">Documentación</Heading>
                    <Text mt={2} color="gray.400">
                        Guías detalladas sobre cómo usar el producto, incluyendo tutoriales paso a paso y ejemplos prácticos para una fácil integración.
                    </Text>
                    <Link href="#" color="blue.600" mt={4} fontWeight="bold">
                        Leer Documentación
                    </Link>
                </VStack>

                {/* Soporte */}
                <VStack bg="#121212" p={6} borderRadius="md" textAlign="center">
                    <Icon as={FaHeadset} w={8} h={8} color="blue.600" />
                    <Heading size="md" mt={4} color="white">Soporte</Heading>
                    <Text mt={2} color="gray.400">
                        ¿Tienes alguna pregunta o necesitas ayuda? Ponte en contacto con nuestro equipo de soporte técnico, disponible 24/7 para asistirte.
                    </Text>
                    <Link href="#" color="blue.600" mt={4} fontWeight="bold">
                        Contactar Soporte
                    </Link>
                </VStack>

                {/* Estado del Sistema */}
                <VStack bg="#121212" p={6} borderRadius="md" textAlign="center">
                    <Icon as={FaServer} w={8} h={8} color="blue.600" />
                    <Heading size="md" mt={4} color="white">Estado del Sistema</Heading>
                    <Text mt={2} color="gray.400">
                        Consulta el estado actual de nuestra plataforma en tiempo real para verificar el rendimiento y disponibilidad de nuestros servicios.
                    </Text>
                    <Link href="#" color="blue.600" mt={4} fontWeight="bold">
                        Ver Estado del Sistema
                    </Link>
                </VStack>

                {/* Seguridad y Cumplimiento */}
                <VStack bg="#121212" p={6} borderRadius="md" textAlign="center">
                    <Icon as={FaShieldAlt} w={8} h={8} color="blue.600" />
                    <Heading size="md" mt={4} color="white">Seguridad y Cumplimiento</Heading>
                    <Text mt={2} color="gray.400">
                        Nos tomamos la seguridad en serio. Cumplimos con SOC2 Tipo 2 y estamos alineados con los estándares de HIPAA para proteger tus datos.
                    </Text>
                    <Link href="#" color="blue.600" mt={4} fontWeight="bold">
                        Más Información sobre Seguridad
                    </Link>
                </VStack>

                {/* Política de Privacidad */}
                <VStack bg="#121212" p={6} borderRadius="md" textAlign="center">
                    <Icon as={FaFileAlt} w={8} h={8} color="blue.600" />
                    <Heading size="md" mt={4} color="white">Política de Privacidad</Heading>
                    <Text mt={2} color="gray.400">
                        Aprende cómo manejamos y protegemos los datos de nuestros usuarios, asegurando privacidad y transparencia en nuestras operaciones.
                    </Text>
                    <Link href="#" color="blue.600" mt={4} fontWeight="bold">
                        Leer Política de Privacidad
                    </Link>
                </VStack>

            </SimpleGrid>
        </Box>
        <Footer/>
        </>
    );
};

export default ResourcesPage;

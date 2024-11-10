import { Box, Button, Heading, HStack, Icon, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import { FaCloud, FaCode, FaDatabase, FaLock, FaSync, FaUserShield } from 'react-icons/fa';

const MainLanding = () => {
    return (
        <Box bg="gray.900" color="gray.200" minHeight="100vh">

            {/* Hero Section */}
            <Box textAlign="center" py={20} bg="gray.900">
                <Heading size="2xl" color="white">Maneja tus usuarios de manera fácil</Heading>
                <Text fontSize="xl" mt={4} color="gray.400">
                    Flexible, escalable, y seguro manejo de usuarios con MongoDB.
                </Text>
                <HStack justify="center" mt={6} spacing={4}>
                    <Button bg="#2563EB" _hover={{ bg: "#1D4ED8" }} color="white" size="lg">Start Your Project</Button>
                    <Button bg="transparent" color="#2563EB" border="1px" borderColor="#2563EB" _hover={{ bg: "#1D4ED8", color: "white" }} size="lg">Pedir una demo</Button>
                </HStack>
            </Box>

            {/* Features Section */}
            <Box py={20} px={10} bg="gray.800" id="features">
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
                    <Box bg="gray.700" p={6} borderRadius="md" boxShadow="lg" textAlign="center">
                        <Icon as={FaDatabase} w={10} h={10} color="#2563EB" />
                        <Heading size="md" mt={4} color="white">Base de Datos NoSQL</Heading>
                        <Text mt={2} color="gray.400">Estructuras de datos flexibles y escalables impulsadas por MongoDB.</Text>
                    </Box>
                    <Box bg="gray.700" p={6} borderRadius="md" boxShadow="lg" textAlign="center">
                        <Icon as={FaUserShield} w={10} h={10} color="#2563EB" />
                        <Heading size="md" mt={4} color="white">Autenticación de Usuarios</Heading>
                        <Text mt={2} color="gray.400">Inicio de sesión seguro con validación avanzada.</Text>
                    </Box>
                    <Box bg="gray.700" p={6} borderRadius="md" boxShadow="lg" textAlign="center">
                        <Icon as={FaCode} w={10} h={10} color="#2563EB" />
                        <Heading size="md" mt={4} color="white">Integración API</Heading>
                        <Text mt={2} color="gray.400">API fácil de usar para integrar la gestión de usuarios en tu aplicación.</Text>
                    </Box>
                    <Box bg="gray.700" p={6} borderRadius="md" boxShadow="lg" textAlign="center">
                        <Icon as={FaCloud} w={10} h={10} color="#2563EB" />
                        <Heading size="md" mt={4} color="white">Nativo en la Nube</Heading>
                        <Text mt={2} color="gray.400">Totalmente compatible con entornos en la nube.</Text>
                    </Box>
                    <Box bg="gray.700" p={6} borderRadius="md" boxShadow="lg" textAlign="center">
                        <Icon as={FaLock} w={10} h={10} color="#2563EB" />
                        <Heading size="md" mt={4} color="white">Alta Seguridad</Heading>
                        <Text mt={2} color="gray.400">Encriptación y protección para datos sensibles.</Text>
                    </Box>
                    <Box bg="gray.700" p={6} borderRadius="md" boxShadow="lg" textAlign="center">
                        <Icon as={FaSync} w={10} h={10} color="#2563EB" />
                        <Heading size="md" mt={4} color="white">Actualizaciones en Tiempo Real</Heading>
                        <Text mt={2} color="gray.400">Sincronización instantánea de datos en todas tus plataformas.</Text>
                    </Box>
                </SimpleGrid>
            </Box>

        </Box>
    );
};

export default MainLanding;

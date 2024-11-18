import { useState } from "react"
import NavbarComponent from "../components/layouts/Navbar"
import { Box, Button, Heading, HStack, Icon, SimpleGrid, Text, Flex } from '@chakra-ui/react';
import React from 'react';
import { FaCloud, FaCode, FaDatabase, FaLock, FaSync, FaUserShield } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../components/styles/base.styles.css'
import Footer from "./landing/HomeFooter"

const grid = [
    { title: "Base de datos NoSQL", text: "Estructuras de datos flexibles y escalables impulsadas por MongoDB.", icon: FaDatabase },
    { title: "Autenticación de Usuarios", text: "Inicio de sesión seguro con validación avanzada.", icon: FaUserShield },
    { title: "Integración API", text: "API fácil de usar para integrar la gestión de usuarios en tu aplicación.", icon: FaCode },
    { title: "Nativo en la Nube", text: "Totalmente compatible con entornos en la nube.", icon: FaCloud },
    { title: "Alta Seguridad", text: "Encriptación y protección para datos sensibles.", icon: FaLock },
    { title: "Actualizaciones en Tiempo Real", text: "Sincronización instantánea de datos en todas tus plataformas.", icon: FaSync }
];

function HomePage() {
    const navigate = useNavigate()
    return (
        <div className="HomePage">
            <NavbarComponent />
            <Box bg="#121212" color="gray.200" minHeight="100vh">
                {/* Hero Section */}
                <Box textAlign="center" py={20} bg="#121212">
                    <Heading fontFamily='SUSE' size="2xl" color="white">Maneja tus usuarios de manera fácil</Heading>
                    <Text fontFamily='Inter' fontSize="xl" mt={4} color="gray.400">
                        Flexible, escalable, y seguro manejo de usuarios con MongoDB.
                    </Text>
                    <HStack justify="center" mt={6} spacing={4}>
                        <Button 
                            fontFamily='Inter' 
                            bg="#1D4ED8" _hover={{ bg: "#2563eb" }} 
                            color="white" 
                            size="md"
                            border="1px solid"
                            borderColor="#3b82f6"
                            onClick={()=> navigate('/signup')}
                        >
                            Inicia un proyecto
                        </Button>
                        <Button 
                            fontFamily='Inter' 
                            bg="#27272a" 
                            color="white" 
                            border="1px" 
                            borderColor="#52525b" 
                            _hover={{ bg: "#3f3f46", color: "white" }} 
                            size="md"
                        >
                            Pedir una demo
                        </Button>
                    </HStack>
                </Box>

                {/* Features Section */}
                <Box py={20} px={10} bg="#121212" id="features">
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} mb={12}>
                        {grid.map((item, index) => (
                            <Box 
                                key={index} 
                                bg="#181818" 
                                p={6} 
                                borderRadius="md" 
                                boxShadow="lg" 
                                textAlign="center"
                                border="1px solid"
                                borderColor="#27272a"
                            >
                                <Flex align="center" direction="row" gap={4}>
                                    <Icon as={item.icon} w={6} h={6} color="#fff" />
                                    <Heading fontFamily='SUSE' fontWeight={500} size="md" color="white">
                                        {item.title}
                                    </Heading>
                                </Flex>
                                <Text align='left' fontFamily='Inter' mt={2} p={5} color="#71717a">{item.text}</Text>
                            </Box>
                        ))}
                    </SimpleGrid>
                </Box>

            </Box>
            <Footer />
        </div>
    );
}

export default HomePage;
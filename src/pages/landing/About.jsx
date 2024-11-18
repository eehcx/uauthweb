import { useState } from "react"
import { Flex, Box, Button, Divider, Heading, Icon, Link, SimpleGrid, Text, VStack, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion'
import { IoLockClosed, IoPeople, IoServer } from "react-icons/io5";
import { FaLightbulb, FaShieldAlt, FaCube } from 'react-icons/fa'
import NavbarComponent from "../../components/layouts/Navbar"
import Footer from "../landing/HomeFooter";
import '../../components/styles/base.styles.css'

const MotionBox = motion(Box)

const grid = [
    { title: "Autenticación Segura", text: "Inicio de sesión seguro con validación avanzada.", icon: IoLockClosed },
    { title: "Gestión de Roles", text: "Asigna y gestiona roles de usuario fácilmente.", icon: IoPeople },
    { title: "Integración API", text: "API fácil de usar para integrar la gestión de usuarios en tu aplicación.", icon: IoServer }
];

const AboutPage = () => {

    const values = [
        { icon: FaLightbulb, title: 'Innovación', description: 'Nos esforzamos por estar a la vanguardia de la tecnología.' },
        { icon: FaShieldAlt, title: 'Seguridad', description: 'La protección de los datos de nuestros usuarios es nuestra prioridad.' },
        { icon: FaCube, title: 'Simplicidad', description: 'Creemos en soluciones simples y efectivas.' },
    ]
    return (
        <>
            <NavbarComponent/>
            <Box bg="#121212" color="gray.200" minHeight="100vh" px={0} py={0}>
                {/* Introducción */}
                <Box textAlign="center" py={10} bg="#121212">
                    <VStack spacing={5} textAlign="center" m={50}>
                        <Heading size="2xl">Bienvenido a UPCAuth</Heading>
                        <Text fontSize="xl" color="gray.400" maxW="3xl">
                            La solución definitiva para la gestión de usuarios. Nuestra plataforma está diseñada para simplificar y asegurar la administración de usuarios en tu aplicación.
                        </Text>
                    </VStack>
                </Box>

                {/* Historia de la Empresa */}
                <VStack spacing={4} textAlign="center" mb={12} mt={15}>
                    <Heading size="lg" color="white">Nuestra Historia</Heading>
                    <Text color="gray.400" maxW="3xl">
                        Fundada ayer, UPCAuth nació de la necesidad de una gestión de usuarios más eficiente y segura. Desde entonces, hemos crecido y evolucionado para convertirnos en líderes en el sector.
                    </Text>
                </VStack>

                {/* Misión y Visión */}
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb={12}>
                    <VStack spacing={4} textAlign="center">
                        <Heading size="lg" color="white">Nuestra Misión</Heading>
                        <Text color="gray.400" maxW="xl">
                            Proporcionar una plataforma de gestión de usuarios que sea segura, escalable y fácil de usar.
                        </Text>
                    </VStack>
                    <VStack spacing={4} textAlign="center">
                        <Heading size="lg" color="white">Nuestra Visión</Heading>
                        <Text color="gray.400" maxW="xl">
                            Aspiramos a ser la herramienta de referencia para la gestión de usuarios en aplicaciones de todo el mundo.
                        </Text>
                    </VStack>
                </SimpleGrid>

                {/* Valores */}
                <VStack spacing={4} textAlign="center" mb={12}>
                    <Heading size="lg" color="white">Nuestros Valores</Heading>
                    <Text color="gray.400" maxW="3xl">
                        <strong>Innovación:</strong> Nos esforzamos por estar a la vanguardia de la tecnología.<br />
                        <strong>Seguridad:</strong> La protección de los datos de nuestros usuarios es nuestra prioridad.<br />
                        <strong>Simplicidad:</strong> Creemos en soluciones simples y efectivas.
                    </Text>
                </VStack>


                <Box py={20} px={10} bg="#121212">
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
                                    <Icon as={item.icon} w={6} h={6} color="#fafafa" />
                                    <Heading fontFamily='SUSE' fontWeight={500} size="md" color="white">
                                        {item.title}
                                    </Heading>
                                </Flex>
                                
                                <Text  align='left' fontFamily='Inter' mt={2} color="#71717a">{item.text}</Text>
                            </Box>
                        ))}
                    </SimpleGrid>
                </Box>

                {/* Testimonios */}
                <VStack spacing={4} textAlign="center" mb={12}>
                    <Heading size="lg" color="white">Testimonios y Casos de Éxito</Heading>
                    <Text color="gray.400" maxW="3xl">
                        "Desde que implementamos UPCAuth, la gestión de usuarios ha sido mucho más sencilla y segura." - [Cliente Satisfecho]
                    </Text>
                </VStack>

                {/* Certificaciones y Cumplimiento */}
                <VStack spacing={4} textAlign="center" mb={12}>
                    <Heading size="lg" color="white">Certificaciones y Cumplimiento</Heading>
                    <Text color="gray.400" maxW="3xl">
                        - SOC 2 Tipo 2 Certificado<br />
                        - Cumplimiento con HIPAA
                    </Text>
                </VStack>

                <Divider my={12} borderColor="gray.600" />

                <VStack spacing={4} textAlign="center">
                    <Text fontSize="xl" color="gray.400">¿Listo para mejorar la gestión de usuarios en tu aplicación?</Text>
                    <Button as={Link} colorScheme="blue" size="lg">Solicita una demo</Button>
                </VStack>
            </Box>
            <Footer/>
        </>
    );
};

export default AboutPage;

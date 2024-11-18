import React, { useEffect } from 'react';
import { Box, Flex, VStack, Heading, Text, Button, Tabs, TabList, TabPanels, Tab, TabPanel, List, ListItem, Code } from '@chakra-ui/react'
import { IoBook, IoKeyOutline, IoLockClosedOutline } from "react-icons/io5";
import { IoLogoNodejs, IoLogoLaravel, IoLogoPython } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../../components/styles/base.styles.css'
import { jsonSchema, sdk } from '../../utils/codeBlocks';

import UsageAPI from './docs/UsageAPI';
import UsageCDN from './docs/UsageCDN';

const sidebar = [
    { title: "Primeros Pasos", },
    { title: "Autenticación" },
    { title: "Referencia de API" },
    { title: "Esquemas JSON" }
];

const DocsPage = () => {
    const navigate = useNavigate();
    const user = useSelector(state=>state.user);

    const handleNavigation = (route) => {
        navigate(route); 
    };

    useEffect(() => {
        document.title = 'Documentación | Autenticación fácil, rápida y gestionable para implementar';
    }, []);

    return (
        <Flex h="100vh" bg="#121212">
            <Box w="64" borderRight="1px" borderColor="#181818">
                <Flex p={4} borderBottom="1px" borderColor="#181818" justify="space-between" align="center">
                    <Heading color="#fafafa" fontFamily="SUSE" size="lg">
                        <a href='/'> Docs </a>
                    </Heading>
                </Flex>
                <VStack align="stretch" spacing={0} overflowY="auto" h="calc(100vh - 5rem)">
                    {sidebar.map((item, index) => (
                        <Button 
                            key={index}
                            color="#fafafa" 
                            _hover={{ bg: "#181818", color: "white" }} 
                            variant="ghost" 
                            justifyContent="flex-start" 
                            rounded="none"
                        >
                            {item.title}
                        </Button>
                    ))}
                </VStack>
            </Box>

            <Box flex={1} overflowY="auto">
                <Flex p={4} borderBottom="1px" borderColor="#181818" justify="space-between" align="center">
                    <Flex position="relative" w="full" maxW="md">
                        
                    </Flex>
                    <Button 
                        fontFamily="SUSE"
                        color="white" 
                        border="1px" 
                        borderColor="#52525b" 
                        bg="#27272a"
                        _hover={{ bg: "#3f3f46", color: "white" }}
                        h={8}
                        onClick={()=>handleNavigation(user.url)}
                    >
                        {user.title}
                    </Button>
                </Flex>
                <Box p={6} maxW="4xl" mx="auto">
                    <Heading color="#FAFAFA" fontFamily="SUSE" as="h2" size="xl" mb={4}>Primeros pasos con uauth</Heading>
                    <Text color="#DCDCDC" fontSize="lg" mb={6}>
                        UPC Authentication se integra perfectamente con MongoDB para esquematizar y almacenar colecciones dinámicas de usuarios, acelerando tu tiempo de desarrollo y adaptándose a los requerimientos específicos de tu proyecto.
                    </Text>

                    <Text color="#DCDCDC" fontSize="lg" mb={6}>
                        Es flexible, fiable y fácil de implementar.
                    </Text>
                    
                    <Heading color="#fafafa" fontFamily="SUSE" as="h3" size="md"  mb={4}>Uso</Heading>

                    <Tabs mb={6}>
                        <TabList borderColor="#181818">
                            <Tab
                                _selected={{ 
                                    color: "blue.400",
                                    borderColor: "blue.400"
                                }}
                                color="#3C3C3C"
                                fontWeight={600}
                            >
                                API
                            </Tab>
                            <Tab
                                _selected={{ 
                                    color: "blue.400",
                                    borderColor: "blue.400"
                                }}
                                color="#3C3C3C"
                                fontWeight={600}
                                isDisabled
                            >
                                CLI
                            </Tab>
                            <Tab
                                _selected={{ 
                                    color: "blue.400",
                                    borderColor: "blue.400"
                                }}
                                color="#3C3C3C"
                                fontWeight={600}
                                isDisabled
                            >
                                CDN
                            </Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <UsageAPI />
                            </TabPanel>
                            <TabPanel>
                                
                            </TabPanel>
                            <TabPanel>
                                <UsageCDN/>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
                {/*<Footer/> */}
            </Box>
        </Flex>

    );
};

export default DocsPage;

/*
es un proyecto de código abierto de autenticación, nacido en la Universidad Politécnica del Centro impulsado por estudiantes. Nuestro objetivo es hacer la vida más fácil para los desarrolladores de todos los niveles, automatizando y gestionando la seguridad de usuarios de manera efectiva. Ya seas un principiante o un experto, UPCAuth te proporciona las herramientas necesarias para manejar la autenticación de manera sencilla y segura.
*/
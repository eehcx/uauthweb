import { Box, Heading, SimpleGrid, Text, Icon, Stack, Table, Thead, Tbody, Tr, Th, Td, Divider } from '@chakra-ui/react';
import { FaDollarSign, FaCheck, FaCreditCard, FaQuestionCircle } from 'react-icons/fa';

const Pricing = () => {
    return (
        <Box bg="gray.800" color="gray.200" py={20} px={10} minHeight="100vh">
            <Heading as="h1" size="2xl" textAlign="center" color="white" mb={10}>
                Planes y Precios
            </Heading>

            {/* Descripción de los planes */}
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mb={10}>
                {/* Plan Básico */}
                <Box bg="gray.800" p={6} borderRadius="md" boxShadow="lg" textAlign="center">
                    <Icon as={FaDollarSign} w={10} h={10} color="blue.600" />
                    <Heading size="md" mt={4} color="white">Plan Básico</Heading>
                    <Text mt={2} color="gray.400">$10 / mes</Text>
                    <Text mt={4} color="gray.400">
                        Ideal para pequeñas empresas que necesitan gestión de usuarios básica.
                    </Text>
                    <Stack spacing={2} mt={4} color="gray.400">
                        <Text>✔ Autenticación básica</Text>
                        <Text>✔ Hasta 100 usuarios</Text>
                        <Text>✔ Soporte por correo</Text>
                    </Stack>
                </Box>
                
                {/* Plan Pro */}
                <Box bg="gray.800" p={6} borderRadius="md" boxShadow="lg" textAlign="center">
                    <Icon as={FaDollarSign} w={10} h={10} color="blue.600" />
                    <Heading size="md" mt={4} color="white">Plan Pro</Heading>
                    <Text mt={2} color="gray.400">$25 / mes</Text>
                    <Text mt={4} color="gray.400">
                        Perfecto para empresas en crecimiento que requieren funciones avanzadas.
                    </Text>
                    <Stack spacing={2} mt={4} color="gray.400">
                        <Text>✔ Todo en Plan Básico</Text>
                        <Text>✔ Hasta 500 usuarios</Text>
                        <Text>✔ Autenticación de dos factores</Text>
                        <Text>✔ Soporte prioritario</Text>
                    </Stack>
                </Box>
                
                {/* Plan Empresarial */}
                <Box bg="gray.800" p={6} borderRadius="md" boxShadow="lg" textAlign="center">
                    <Icon as={FaDollarSign} w={10} h={10} color="blue.600" />
                    <Heading size="md" mt={4} color="white">Plan Empresarial</Heading>
                    <Text mt={2} color="gray.400">$50 / mes</Text>
                    <Text mt={4} color="gray.400">
                        La solución completa para empresas con necesidades avanzadas de gestión.
                    </Text>
                    <Stack spacing={2} mt={4} color="gray.400">
                        <Text>✔ Todo en Plan Pro</Text>
                        <Text>✔ Usuarios ilimitados</Text>
                        <Text>✔ Integraciones personalizadas</Text>
                        <Text>✔ Soporte dedicado 24/7</Text>
                    </Stack>
                </Box>
            </SimpleGrid>

            {/* Comparación de Planes */}
            <Heading as="h2" size="lg" color="white" textAlign="center" mb={6}>
                Comparación de Planes
            </Heading>
            <Box overflowX="auto">
                <Table variant="simple" colorScheme="blue">
                    <Thead>
                        <Tr>
                            <Th>Característica</Th>
                            <Th textAlign="center">Básico</Th>
                            <Th textAlign="center">Pro</Th>
                            <Th textAlign="center">Empresarial</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Autenticación básica</Td>
                            <Td textAlign="center"><Icon as={FaCheck} color="blue.600" /></Td>
                            <Td textAlign="center"><Icon as={FaCheck} color="blue.600" /></Td>
                            <Td textAlign="center"><Icon as={FaCheck} color="blue.600" /></Td>
                        </Tr>
                        <Tr>
                            <Td>Autenticación de dos factores</Td>
                            <Td textAlign="center">-</Td>
                            <Td textAlign="center"><Icon as={FaCheck} color="blue.600" /></Td>
                            <Td textAlign="center"><Icon as={FaCheck} color="blue.600" /></Td>
                        </Tr>
                        <Tr>
                            <Td>Usuarios permitidos</Td>
                            <Td textAlign="center">100</Td>
                            <Td textAlign="center">500</Td>
                            <Td textAlign="center">Ilimitados</Td>
                        </Tr>
                        <Tr>
                            <Td>Soporte</Td>
                            <Td textAlign="center">Correo</Td>
                            <Td textAlign="center">Prioritario</Td>
                            <Td textAlign="center">Dedicado 24/7</Td>
                        </Tr>
                        <Tr>
                            <Td>Integraciones personalizadas</Td>
                            <Td textAlign="center">-</Td>
                            <Td textAlign="center">-</Td>
                            <Td textAlign="center"><Icon as={FaCheck} color="blue.600" /></Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Box>

            {/* Preguntas Frecuentes (FAQs) */}
            <Heading as="h2" size="lg" color="white" textAlign="center" my={10}>
                Preguntas Frecuentes (FAQs)
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Box>
                    <Icon as={FaQuestionCircle} w={5} h={5} color="blue.600" />
                    <Text mt={2} color="gray.400">
                        <strong>¿Puedo cambiar de plan en cualquier momento?</strong><br />
                        Sí, puedes actualizar o degradar tu plan en cualquier momento desde la configuración de tu cuenta.
                    </Text>
                </Box>
                <Box>
                    <Icon as={FaQuestionCircle} w={5} h={5} color="blue.600" />
                    <Text mt={2} color="gray.400">
                        <strong>¿Hay algún descuento por pago anual?</strong><br />
                        Sí, ofrecemos un 20% de descuento si optas por la facturación anual en cualquier plan.
                    </Text>
                </Box>
                <Box>
                    <Icon as={FaQuestionCircle} w={5} h={5} color="blue.600" />
                    <Text mt={2} color="gray.400">
                        <strong>¿Qué métodos de pago aceptan?</strong><br />
                        Aceptamos todas las tarjetas de crédito y débito principales, así como PayPal y transferencias bancarias.
                    </Text>
                </Box>
                <Box>
                    <Icon as={FaQuestionCircle} w={5} h={5} color="blue.600" />
                    <Text mt={2} color="gray.400">
                        <strong>¿Cómo se factura el uso?</strong><br />
                        La facturación es mensual, con opción a facturación anual con descuento.
                    </Text>
                </Box>
            </SimpleGrid>

            {/* Información de Facturación */}
            <Divider my={10} />
            <Box textAlign="center">
                <Heading as="h2" size="lg" color="white" mb={4}>
                    Información de Facturación
                </Heading>
                <Text color="gray.400">
                    Aceptamos tarjetas de crédito y débito, PayPal, y transferencias bancarias. Puedes elegir entre facturación mensual o anual, y cambiar tu método de pago en cualquier momento desde tu cuenta.
                </Text>
            </Box>
        </Box>
    );
};

export default Pricing;

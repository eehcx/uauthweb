import NavbarComponent from "../../components/layouts/Navbar"
import Footer from "../landing/HomeFooter";
import { Box, Heading, SimpleGrid, Text, Icon, Stack, Divider } from '@chakra-ui/react';
import { FaTimes, FaCheck, FaInfoCircle, FaQuestionCircle } from 'react-icons/fa';
import '../../components/styles/base.styles.css'

const pricing = [
    { 
        plan: "Gratis", 
        price: "$0 / mes", 
        description: "Ideal para proyectos personales o pequeños equipos que comienzan a explorar la plataforma.", 
        benefits: [
            "✔ Autenticación por correo/contraseña",
            "✔ Hasta 10,000 usuarios activos mensuales",
            "✔ Reglas básicas de seguridad"
        ] 
    },
    { 
        plan: "Pro", 
        price: "$25 / mes", 
        description: "Diseñado para negocios en crecimiento con necesidades de autenticación avanzadas.", 
        benefits: [
            "✔ Todo en el Plan Gratis",
            "✔ Hasta 100,000 usuarios activos mensuales",
            "✔ Reglas avanzadas de seguridad",
            "✔ Autenticación de dos factores",
            "✔ Personalización básica de dominios"
        ] 
    },
    { 
        plan: "Empresarial", 
        price: "Personalizado", 
        description: "Solución completa para grandes empresas con requisitos avanzados de autenticación.", 
        benefits: [
            "✔ Todo en el Plan Pro",
            "✔ Usuarios activos mensuales ilimitados",
            "✔ Personalización completa de dominios",
            "✔ Reglas de seguridad avanzadas",
            "✔ Soporte técnico dedicado 24/7"
        ] 
    }
];

const features = [
    { name: 'Usuarios activos mensuales', free: '10,000', pro: '100,000', enterprise: 'Ilimitado', tooltip: 'Usuarios únicos que pueden autenticarse cada mes' },
    { name: 'Claims personalizados en JWT', free: 'Básico', pro: 'Avanzado', enterprise: 'Totalmente personalizable', tooltip: 'Controla y define las claims de los tokens JWT para usuarios autenticados' },
    { name: 'Control de acceso basado en roles (RBAC)', free: false, pro: true, enterprise: true, tooltip: 'Gestiona los permisos de acceso utilizando controles basados en roles' },
    { name: 'Autenticación por correo y contraseña', free: true, pro: true, enterprise: true, tooltip: 'Permite a los usuarios autenticarse utilizando su correo electrónico y contraseña' },
    { name: 'Autenticación por teléfono', free: false, pro: true, enterprise: true, tooltip: 'Permite a los usuarios autenticarse utilizando sus números de teléfono' },
    { name: 'Autenticación multifactor', free: false, pro: true, enterprise: true, tooltip: 'Aumenta la seguridad con autenticación multifactor' },
    { name: 'Dominios personalizados', free: false, pro: '1', enterprise: 'Ilimitado', tooltip: 'Aloja los endpoints de autenticación en tu propio dominio' },
    { name: 'Plantillas de correo personalizadas', free: false, pro: true, enterprise: true, tooltip: 'Personaliza las plantillas de correo electrónico para acciones como restablecimiento de contraseña' },
    { name: 'Configuración de tokens de sesión', free: 'Estándar', pro: 'Configurable', enterprise: 'Avanzado', tooltip: 'Controla la duración y los atributos de los tokens de sesión' },
    { name: 'Reglas de seguridad avanzadas', free: false, pro: true, enterprise: true, tooltip: 'Define políticas de seguridad granulares para la autenticación' },
    { name: 'Soporte prioritario', free: false, pro: false, enterprise: true, tooltip: 'Accede a soporte prioritario para resolver problemas técnicos' },
];

const FeatureValue = ({ value }) => {
    if (typeof value === 'boolean') {
        return value ? <FaCheck className="text-green-500 mx-auto" /> : <FaTimes className="text-red-500 mx-auto" />
    }
    return <span className="text-gray-300">{value}</span>
}

const PricingPage = () => {
    return (
        <>
            <NavbarComponent />
            <Box bg="#121212" color="gray.200" py={20} px={10} minHeight="100vh">
                <Heading fontFamily='SUSE' as="h1" size="2xl" textAlign="center" color="white" mb={10}>
                    Planes y Precios
                </Heading>

                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={7} mb={20}>
                    {pricing.map((item, index) => (
                        <Box 
                            key={index} 
                            bg="#181818" 
                            p={6} 
                            borderRadius="md" 
                            boxShadow="lg" 
                            border="1px solid"
                            borderColor="#27272a"
                        >
                            {/*<Icon as={FaDollarSign} w={10} h={10} color="blue.600" /> */}
                            <Heading size="md" mt={4} color="white">{item.plan}</Heading>
                            <Text mt={2} color="#a1a1aa">{item.price}</Text>
                            <Text mt={4} color="#a1a1aa">{item.description}</Text>
                            <Stack spacing={2} mt={5} mb={5} color="#a1a1aa">
                                {item.benefits.map((benefit, index) => (
                                    <Text key={index} m={1}>{benefit}</Text>
                                ))}
                            </Stack>
                        </Box>
                    ))}
                </SimpleGrid>

                <div 
                    className="mt-12 overflow-x-auto bg-[#181818] border border-[#27272a] rounded-md shadow-lg"
                >
                    <table className="w-full">
                        <thead>
                            <tr className="bg-[#181818]">
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                    Feature
                                </th>
                                {pricing.map((item, index) => (
                                    <th key={index} className="px-6 py-3 text-center">
                                        <div>
                                            <div className="text-2xl font-logo font-semibold text-white">{item.plan}</div>
                                            {/*<div className="text-2xl font-logo font-medium text-white">{item.price}</div> */}
                                        </div>
                                        {/*
                                        <a
                                            href="#"
                                            className="flex items-center justify-center gap-x-1 py-1 pl-3 pr-2 text-white font-semibold bg-[#1D4ED8] font-overview border border-[#3b82f6] hover:bg-[#2563eb] active:bg-[#2563eb] duration-150 rounded-lg md:inline-flex"
                                        >
                                            Comenzar
                                        </a>
                                        */}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-[#181818] divide-y divide-[#27272a]">
                            {features.map((feature) => (
                                <tr key={feature.name}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                                        <div className="flex items-center">
                                            {feature.name}
                                            {feature.tooltip && (
                                                <FaInfoCircle className="ml-2 text-gray-500 cursor-help" title={feature.tooltip} />
                                            )}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap font-overview text-sm text-center">
                                        <FeatureValue value={feature.free} />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap font-overview text-sm text-center">
                                        <FeatureValue value={feature.pro} />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap font-overview text-sm text-center">
                                        <FeatureValue value={feature.enterprise} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/*
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

                <Divider my={10} />
                <Box textAlign="center">
                    <Heading as="h2" size="lg" color="white" mb={4}>
                        Información de Facturación
                    </Heading>
                    <Text color="gray.400">
                        Aceptamos tarjetas de crédito y débito, PayPal, y transferencias bancarias. Puedes elegir entre facturación mensual o anual, y cambiar tu método de pago en cualquier momento desde tu cuenta.
                    </Text>
                </Box>
                */}

            </Box>
            <Footer />
        </>
    );
};

export default PricingPage;

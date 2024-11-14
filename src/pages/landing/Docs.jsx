import { Box, Heading, SimpleGrid, Text, Icon } from '@chakra-ui/react';
import { FaPlayCircle, FaCode, FaLock, FaPlug, FaQuestionCircle } from 'react-icons/fa';

const Docs = () => {
    return (
        <Box bg="gray.800" color="gray.200" py={20} px={10} minHeight="100vh">
            <Heading as="h1" size="2xl" textAlign="center" color="white" mb={10}>
                Documentación y Recursos
            </Heading>
            
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
                {/* Guías de Inicio Rápido */}
                <Box bg="gray.800" p={6} borderRadius="md" boxShadow="lg" textAlign="center">
                    <Icon as={FaPlayCircle} w={10} h={10} color="blue.600" />
                    <Heading size="md" mt={4} color="white">Guías de Inicio Rápido</Heading>
                    <Text mt={2} color="gray.400">
                        Aprende a usar UPCAuth en minutos con nuestras guías rápidas. Desde el registro hasta la configuración inicial, te acompañamos en cada paso.
                    </Text>
                    <Text mt={2} color="gray.400">
                        Ejemplo de inicio rápido:
                        - Paso 1: Regístrate y verifica tu correo.
                        - Paso 2: Configura tu primer proyecto.
                        - Paso 3: Personaliza la autenticación de usuarios.
                    </Text>
                </Box>
                
                {/* API y SDKs */}
                <Box bg="gray.800" p={6} borderRadius="md" boxShadow="lg" textAlign="center">
                    <Icon as={FaCode} w={10} h={10} color="blue.600" />
                    <Heading size="md" mt={4} color="white">API y SDKs</Heading>
                    <Text mt={2} color="gray.400">
                        Accede a nuestra API REST y SDKs en varios lenguajes para integrar fácilmente la gestión de usuarios en tu aplicación.
                    </Text>
                    <Text mt={2} color="gray.400">
                        Ejemplo de API:
                        
                    </Text>
                </Box>
                
                {/* Autenticación y Seguridad */}
                <Box bg="gray.800" p={6} borderRadius="md" boxShadow="lg" textAlign="center">
                    <Icon as={FaLock} w={10} h={10} color="blue.600" />
                    <Heading size="md" mt={4} color="white">Autenticación y Seguridad</Heading>
                    <Text mt={2} color="gray.400">
                        Implementa autenticación segura con nuestras guías. Aprende sobre autenticación de dos factores, encriptación de contraseñas, y más.
                    </Text>
                    <Text mt={2} color="gray.400">
                        Ejemplo de implementación de autenticación de dos factores:
                        - Paso 1: Activa 2FA en el perfil de usuario.
                        - Paso 2: Usa una app de autenticación para generar códigos.
                        - Paso 3: Verifica el código al iniciar sesión.
                    </Text>
                </Box>
                
                {/* Integraciones */}
                <Box bg="gray.800" p={6} borderRadius="md" boxShadow="lg" textAlign="center">
                    <Icon as={FaPlug} w={10} h={10} color="blue.600" />
                    <Heading size="md" mt={4} color="white">Integraciones</Heading>
                    <Text mt={2} color="gray.400">
                        Conecta UPCAuth con herramientas como Slack, Zapier, y más. Mejora la experiencia del usuario con integraciones automatizadas.
                    </Text>
                    <Text mt={2} color="gray.400">
                        Ejemplo de integración con Slack:
                        - Paso 1: Conecta tu cuenta de Slack en el panel de integraciones.
                        - Paso 2: Configura alertas para eventos importantes.
                        - Paso 3: Recibe notificaciones en tu canal de Slack.
                    </Text>
                </Box>
                
                {/* Preguntas Frecuentes (FAQs) */}
                <Box bg="gray.800" p={6} borderRadius="md" boxShadow="lg" textAlign="center">
                    <Icon as={FaQuestionCircle} w={10} h={10} color="blue.600" />
                    <Heading size="md" mt={4} color="white">Preguntas Frecuentes (FAQs)</Heading>
                    <Text mt={2} color="gray.400">
                        Respuestas a las dudas comunes sobre nuestra plataforma. Encuentra información sobre precios, configuración y funcionalidades.
                    </Text>
                    <Text mt={2} color="gray.400">
                        Ejemplos de FAQs:
                        - **¿Es compatible con dispositivos móviles?** Sí, UPCAuth es responsive y funciona en dispositivos móviles.
                        - **¿Hay un plan gratuito?** Sí, ofrecemos un plan gratuito con funciones limitadas.
                    </Text>
                </Box>
            </SimpleGrid>
        </Box>
    );
};

export default Docs;

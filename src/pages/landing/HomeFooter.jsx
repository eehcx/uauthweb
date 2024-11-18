import { Box, Divider, Grid, HStack, Link, Text, VStack } from '@chakra-ui/react';
import { FaDiscord, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';
import '../../components/styles/base.styles.css'

const Footer = () => {
  return (
    <Box bg="#0f0f0f" color="gray.400" py={10} px={{ base: 4, md: 10 }}>
      <VStack spacing={4} textAlign="center">
        <Text fontSize="sm" color="gray.500">
          Protegemos tus datos. Más información en Seguridad
        </Text>
        <Text fontSize="sm" color="gray.500">
          SOC2 Tipo 2 Certificado • HIPAA Cumplimiento
        </Text>
      </VStack>

      <Grid templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }} gap={6} mt={10}>
        <VStack align="start">
          <Text fontSize="lg" fontFamily='SUSE' color="gray.100" fontWeight="bold">upcauth</Text>
          <HStack spacing={4}>
            <Link href="https://github.com" isExternal>
              <FaGithub size="24px" />
            </Link>
            <Link href="https://twitter.com" isExternal>
              <FaTwitter size="24px" />
            </Link>
            <Link href="https://discord.com" isExternal>
              <FaDiscord size="24px" />
            </Link>
            <Link href="https://youtube.com" isExternal>
              <FaYoutube size="24px" />
            </Link>
          </HStack>
        </VStack>

        <VStack align="start">
          <Text fontSize="md" color="gray.500" fontWeight="bold">Producto</Text>
          <Link href="#auth">Autenticación</Link>
          <Link href="#email-verification">Verificación de Email</Link>
          <Link href="#password-recovery">Recuperación de Contraseña</Link>
          <Link href="#user-management">Gestión de Usuarios</Link>
          <Link href="#pricing">Precios</Link>
        </VStack>

        <VStack align="start">
          <Text fontSize="md" color="gray.500" fontWeight="bold">Recursos</Text>
          <Link href="#support">Soporte</Link>
          <Link href="#status">Estado del Sistema</Link>
          <Link href="#docs">Documentación</Link>
          <Link href="#security">Seguridad y Cumplimiento</Link>
          <Link href="#privacy">Política de Privacidad</Link>
        </VStack>

        <VStack align="start">
          <Text fontSize="md" color="gray.500" fontWeight="bold">Compañía</Text>
          <Link href="#about">Sobre Nosotros</Link>
          <Link href="#careers">Empleos</Link>
          <Link href="#blog">Blog</Link>
          <Link href="#events">Eventos y Webinars</Link>
          <Link href="#terms">Términos de Servicio</Link>
        </VStack>
      </Grid>

      <Divider my={6} borderColor="#71717a" />

      <VStack spacing={2}>
        <Text fontSize="sm" color="gray.500">
          © {new Date().getFullYear()} UPCAuth Inc.
        </Text>
        <Text fontSize="sm" color="gray.500">
          Usamos cookies de terceros para mejorar nuestros servicios. <Link href="#privacy" color="blue.400">Más información</Link>
        </Text>
      </VStack>
    </Box>
  );
};

export default Footer;

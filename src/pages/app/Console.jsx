import { useState, useEffect } from "react"
import { Box, Text, Heading, LinkBox, LinkOverlay, Divider, Grid, GridItem, Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@chakra-ui/react"
import { AddIcon, ChevronRightIcon } from '@chakra-ui/icons'

import '../../components/styles/base.styles.css'
// Componentes
import NavigateCard from "../../components/common/NavigateCard"

function ConsolePage () {
    useEffect(() => {
        document.title = 'Consola de autenticación';
    }, []);
    const [Proyects, setProyects] = useState([
        {id: 1, name: "registros", link: "#" },
        {id: 2, name: "jeeimkg", link: "#" },
        {id: 3, name: "nitrorestau", link: "#" },
        {id: 4, name: "ciispalma", link: "#" },
        {id: 5, name: "dotgames", link: "#" },
        {id: 6, name: "sucaric", link: "#" },
        {id: 7, name: "turismotab", link: "#" }
    ])

    return (
        <div className="ConsolePage">
            {/*
            <Text className='font-logo' fontWeight='bold' marginX={10} paddingTop={15} size='2xl' color='#fafafa'>AUTH</Text>
            */}

            <Breadcrumb marginX={10} paddingTop={8} paddingBottom={2} color={'#fafafa'} spacing='8px' separator={<ChevronRightIcon color='white' />}>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>Inicio</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='/console/register'>Consola</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <Grid 
                templateColumns={{
                    base: 'repeat(1, 1fr)',   
                    sm: 'repeat(2, 1fr)',     
                    md: 'repeat(3, 1fr)',    
                    lg: 'repeat(3, 1fr)',     
                    xl: 'repeat(4, 1fr)', 
                }}
                gap={6} 
                p={4}
                marginX={4}
                flex="1" 
            >
                <GridItem>
                    <LinkBox
                        as="article"
                        p={4}
                        rounded='xl'
                        boxShadow='2xl'
                        bg="gray.900"
                        color="white"
                        _hover={{ bg: "blue.700", cursor: "pointer" }}
                        transition="background-color 0.3s ease"
                        w='100%' 
                        minH={{ base: "60px", md: "175px", lg: "175px", xl: "175px" }} 
                        maxH={{ base: "120px", md: "175px", lg: "175px", xl: "175px" }}
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <LinkOverlay href='/console/register'>
                            <AddIcon boxSize={6} />
                        </LinkOverlay>
                    </LinkBox>
                </GridItem>
                {Proyects.map((item, index ) => (
                    <>
                        <GridItem key={index}>
                            <NavigateCard
                                link={item.link}
                                name={item.name}
                                id={item.id}
                            />
                        </GridItem>
                    </>
                ))}
            </Grid>
        </div>
    )
}

export default ConsolePage
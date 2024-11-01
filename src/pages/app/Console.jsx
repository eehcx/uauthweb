import { useState, useEffect } from "react"
import { Box, Text, Heading, LinkBox, LinkOverlay, Divider, Grid, GridItem, Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@chakra-ui/react"
import { AddIcon, ChevronRightIcon } from '@chakra-ui/icons'
//import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { registerProject, clear } from "../../features/projectSlice"

import '../../components/styles/base.styles.css'
// Componentes
import NavigateCard from "../../components/common/NavigateCard"
//hooks
import useGetData from "../../hooks/useGetData"

function ConsolePage () {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const { data: projects, loading, error } = useGetData(`http://localhost:4000/resources/v1/user/${user.id}/projects`);

    useEffect(() => {
        document.title = 'Consola de autenticación';
        console.log(user)
    }, []);

    if (loading) return <p>Cargando proyectos...</p>;
    if (error) return <p>Error: {error}</p>;

    const handleNext = (name, token, dbName) => {
        dispatch(clear());
        dispatch(registerProject({ name, token, dbName }));
        //console.log(id, name);
    }


    return (
        <div className="ConsolePage">
            <Breadcrumb
            	marginX={16}
            	paddingTop={10}
            	paddingBottom={2}
            	color={'#fafafa'}
            	spacing='8px'
            	separator={<ChevronRightIcon color='white' />}
            >
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
                marginX={5}
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
                {projects.map((item, index) => (
                    <GridItem key={index}>
                        <NavigateCard
                            link={`/project/${item.projectName}`}
                            name={item.projectName}
                            db={item.dbName}
                            onClick={() => handleNext(item.projectName, item.projectToken, item.dbName)}
                        />
                    </GridItem>
                ))}
            </Grid>
        </div>
    )
}

export default ConsolePage

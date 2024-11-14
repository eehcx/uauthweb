import { useState, useEffect } from "react"
import { Box, Text, Heading, LinkBox, LinkOverlay, Divider, Grid, GridItem, Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@chakra-ui/react"
import { AddIcon, ChevronRightIcon } from '@chakra-ui/icons'
//import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { registerProject, clear } from "../../features/projectSlice"

import '../../components/styles/base.styles.css'
// Componentes
import NavigateCard from "../../components/common/NavigateCard"
import LoadingLayout from "../../components/layouts/Loading"
//hooks
import useGetData from "../../hooks/useGetData"

function ConsolePage () {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const { data: projects, loading, error } = useGetData(`http://localhost:4000/resources/v1/user/${user.id}/projects`);

    useEffect(() => {
        document.title = 'Consola de autenticación';
        //console.log(projects)
    }, []);

    if (loading) return <LoadingLayout background='#09090b' />;
    if (error) return <p>Error: {error}</p>;

    const handleNext = (name, projectNumber, token, dbName) => {
        dispatch(clear());
        dispatch(registerProject({ name, projectNumber, token, dbName }));
        //console.log(name, number, token, dbName);
    }


    return (
        <div className="ConsolePage">
            <Breadcrumb
            	marginX={10}
            	paddingTop={8}
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
                    sm: 'repeat(1, 1fr)',
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
                        bg="#18181b"
                        color="white"
                        borderWidth="4px"            
                        borderColor="blue.400"  
                        _hover={{ 
                            bg: "#27272a", 
                            cursor: "pointer" 
                        }}
                        transition="background-color 0.3s ease"
                        w='100%'
                        minH={{ base: "60px", md: "175px", lg: "175px", xl: "175px" }}
                        maxH={{ base: "120px", md: "175px", lg: "175px", xl: "175px" }}
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <LinkOverlay 
                            href='/console/register'
                            //display="flex" 
                            //flexDirection="column" 
                            //alignItems="center" 
                            //justifyContent="center" 
                        >
                            <AddIcon boxSize={6} />
                            {/*<p className=" font-bold mt-3">Crear un proyecto</p>*/}
                        </LinkOverlay>
                    </LinkBox>
                </GridItem>
                {projects.map((item, index) => (
                    <GridItem key={index}>
                        <NavigateCard
                            link={`/project/${item.projectName}`}
                            name={item.projectName}
                            db={item.dbName}
                            onClick={() => handleNext(item.projectName, item.projectNumber, item.projectToken, item.dbName)}
                        />
                    </GridItem>
                ))}
            </Grid>
        </div>
    )
}

export default ConsolePage

/*

*/

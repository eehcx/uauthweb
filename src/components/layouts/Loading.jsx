import { Flex, Spinner } from "@chakra-ui/react";

function LoadingLayout({ background }) {

    return(
        <Flex
            height="100vh"  
            width="100vw"   
            justifyContent="center"  
            alignItems="center"
            bg={background}           
        >
            <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="#e4e4e7"
                color="#2563eb"
                size="xl"
            />
        </Flex>
    )
}

export default LoadingLayout
import { Text, Heading, LinkBox, LinkOverlay } from "@chakra-ui/react"
import { IoServerOutline } from "react-icons/io5";

const NavigateCard =({link, name, db, onClick})=> {
    return(
        <LinkBox
            as="article"
            p={4}
            rounded='xl'
            bg="gray.900"
            color="white"
            _hover={{ bg: "blue.700", cursor: "pointer" }}
            transition="background-color 0.3s ease"
            w='100%' 
            minH='175px' 
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="baseline"
            boxShadow='2xl'
            onClick={onClick}
        >
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <IoServerOutline style={{ marginRight: 10 }} size={26} />
                <Heading size='lg' fontWeight={500}>
                    <LinkOverlay href={link}> {name} </LinkOverlay>
                </Heading>
            </div>
            <Text fontSize="md" fontWeight={500}>
            {db}
            </Text>
        </LinkBox>
    )
}

export default NavigateCard
import { Text, Heading, LinkBox, LinkOverlay } from "@chakra-ui/react"
import { IoIdCard, IoCodeSlashSharp } from "react-icons/io5";

const NavigateCard =({link, name, db, onClick})=> {
    return(
        <LinkBox
            as="article"
            p={4}
            rounded='xl'
            bg="#18181b"
            color="white"
            _hover={{ 
                bg: "#27272a", 
                cursor: "pointer" 
            }}
            transition="background-color 0.3s ease"
            w='100%' 
            minH='175px' 
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="flex-start"
            boxShadow='2xl'
            onClick={onClick}
        >
            <div style={{ textAlign: 'left', alignSelf: 'flex-start' }}>
                <Heading size='lg' fontWeight={500}>
                    <LinkOverlay href={link}> {name} </LinkOverlay>
                </Heading>
                <Text color="#a1a1aa" fontSize="md" fontWeight={500}>
                    {db}
                </Text>
            </div>
            <div className=" flex">
                {/*<IoIdCard color="#a1a1aa" style={{ marginRight: 10 }} size={25} /> */}
                <IoCodeSlashSharp color="#a1a1aa" style={{ marginRight: 10 }} size={25} />
            </div>
        </LinkBox>
    )
}

export default NavigateCard
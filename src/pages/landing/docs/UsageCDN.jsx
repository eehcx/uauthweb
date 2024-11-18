import { Box, List, ListItem, Code } from '@chakra-ui/react'
import { sdk } from '../../../utils/codeBlocks';
import { IoLogoNodejs, IoLogoLaravel, IoLogoPython } from "react-icons/io5";

const UsageCDN = () => {
    return (
        <>
            <List display="flex" flexDirection="row" >
                <ListItem mr={4}>
                    <IoLogoNodejs size={24} color='#339933'/>
                </ListItem>
                <ListItem mr={4}>
                    <IoLogoPython size={24} color='#3776AB'/>
                </ListItem>
                <ListItem mr={4}>
                    <IoLogoLaravel size={24} color='#FF2D20'/>
                </ListItem>
            </List>
            <Box bg="#121212" py={7} borderRadius="md">
                <Code bgColor="#181818" color="#fff" p={4} borderRadius="md" w="full" display="block" whiteSpace="pre" fontSize="sm">
                    {sdk}
                </Code>
            </Box>
        </>
    );
};

export default UsageCDN;
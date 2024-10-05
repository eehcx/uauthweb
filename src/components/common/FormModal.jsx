import React from 'react'
import { Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalHeader, ModalBody, ModalFooter,  FormControl, FormLabel, Input, Button } from "@chakra-ui/react"

const InputForm = React.forwardRef(({ label, marginTop }, ref) => {
    return (
        <FormControl mt={marginTop}>
            <FormLabel fontSize={13} color='#cbd5e1'>{label}</FormLabel>
            <Input 
                required 
                height={8} 
                color='#fafafa' 
                ref={ref} 
                type='email'
            />
        </FormControl>
    );
});

function FormModalComponent({ isOpen, onClose, title}) {
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    return (
        <>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
                isCentered
            >
                <ModalOverlay />
                <ModalContent bg='#09090b' border='2px solid' borderColor='gray.900'>
                    <ModalHeader fontSize={18} color='white'>{title}</ModalHeader>
                    <ModalCloseButton color='white' />
                    <ModalBody pb={6}>
                        <InputForm label='Correo electrónico' ref={initialRef} />
                    </ModalBody>
        
                    <ModalFooter>
                        <Button 
                            onClick={onClose} 
                            height={9} 
                            mr={3} 
                            bg='#09090b'
                            color='#fafafa'
                            _hover={{
                                color: '#fafafa',
                                bg: 'rgba(24, 24, 27, 0.5)', 
                                borderColor: '#fafafa' 
                            }}
                            rounded={9} 
                        >Cancelar</Button>
                        <Button colorScheme='blue' height={9} rounded={9} >
                            Guardar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default FormModalComponent
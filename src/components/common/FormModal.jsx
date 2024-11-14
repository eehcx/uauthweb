import React, { useState } from 'react'
import { Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalHeader, ModalBody, ModalFooter,  FormControl, FormLabel, Input, Button, Flex } from "@chakra-ui/react"
import { EmailIcon } from '@chakra-ui/icons'
import '../styles/base.styles.css'

const InputForm = React.forwardRef(({ label, value, onChange, marginTop }, ref) => {
    return (
        <FormControl mt={marginTop}>
            <FormLabel fontSize={13} color='#cbd5e1'>{label}</FormLabel>
            <Input 
                required 
                height={8} 
                color='#fafafa' 
                ref={ref} 
                type='email'
                value={value}
                onChange={onChange}
            />
        </FormControl>
    );
});

function FormModalComponent({ isOpen, onClose, title, inputValue, setInputValue}) {
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [currentForm, SetCurrentForm] = useState(1)

    const handleSave = () => {
        SetCurrentForm(2)
    }

    const handlePrev = () => {
        SetCurrentForm(1)
    }

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
                    <ModalCloseButton color='white' />
                    {currentForm == 1 && (
                        <>
                            <ModalHeader fontSize={18} color='white'>Email alternativo</ModalHeader>
                            <ModalBody pb={6}>
                                <InputForm 
                                    label='Correo electrónico' 
                                    ref={initialRef} 
                                    value={inputValue} 
                                    onChange={(e) => setInputValue(e.target.value)} 
                                />
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
                                <Button 
                                    colorScheme='blue' 
                                    height={9} 
                                    rounded={9} 
                                    onClick={handleSave}
                                >
                                    Guardar
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                    
                    {currentForm == 2 && (
                        <>
                            <ModalHeader fontSize={18} color='white'>Email</ModalHeader>
                            <ModalBody pb={6} >
                                <Flex align="center">
                                    <EmailIcon boxSize={5} color='white' />
                                    <p className='pl-2 text-white font-logo text-xl font-medium'>{inputValue}</p>
                                </Flex>
                            </ModalBody>

                            <ModalFooter>
                                <Button 
                                    onClick={handlePrev} 
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
                                >Editar</Button>
                                <Button 
                                    colorScheme='blue' 
                                    height={9} 
                                    rounded={9} 
                                    onClick={onClose} 
                                >
                                    Cerrar
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default FormModalComponent
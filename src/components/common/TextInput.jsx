import { Box, FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, useBreakpointValue} from "@chakra-ui/react"
import '../styles/base.styles.css'

function TextInput({ placeholderSM, placeholder, isInvalid, value, type, onChange, fontSize, marginBottom }) {
    const fontSizeNumber = parseInt(fontSize, 10);
    const text = useBreakpointValue({
        base: placeholderSM,
        sm: '',
        md: placeholder,
        lg: placeholder,
        xl: placeholder
    })

    const fontSizes = useBreakpointValue({
        base: `${fontSizeNumber - 18}px`,
        sm: `${fontSizeNumber - 13}px`,
        md: `${fontSizeNumber - 9}px`,
        lg: `${fontSizeNumber - 5}px`,
        xl: `${fontSizeNumber}px`
    })

    /*{
        base: '24px',
        sm: '30px',
        md: '35px',
        lg: '40px',     
        xl: '45px',    
    } */

    return(
        <>
            <FormControl isInvalid={isInvalid}>
                <Input 
                    value={value}
                    onChange={onChange}
                    type={type}
                    fontFamily='SUSE'
                    fontWeight={300}
                    className="font-overview" 
                    paddingY={7}
                    marginBottom={marginBottom}
                    fontSize={fontSizes}
                    variant='flushed' 
                    placeholder={text}
                    color='#fafafa'
                    required
                    sx={{
                        '::placeholder': {
                            color: 'gray.400', 
                            opacity: 1,
                        },
                        borderColor: 'gray.400',
                        _focus: {
                            borderColor: 'blue.600',
                            boxShadow: 'none',
                            borderWidth: 0.7,
                        },
                        _hover: {
                            //borderColor: 'blue.600',
                            //borderWidth: 0.9
                        },
                        _disabled: {
                            borderColor: 'gray.900', 
                        }
                    }}
                />
            </FormControl>
        </>
    )
}

export default TextInput
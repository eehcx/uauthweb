import { Table,Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer } from "@chakra-ui/react"

function TableList ({caption, data, keys, headers}) {
    return(
        <TableContainer>
            <Table variant="simple" >
                <TableCaption>{caption}</TableCaption>
                <Thead>
                    <Tr>
                        {headers.map((header, index) => (
                            <Th key={index} color="black" borderColor="gray.300">
                                {header}
                            </Th>
                        ))}
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map((item, index) => (
                        <Tr key={index}>
                            {keys.map((key, idx) => (
                                <Td key={idx} borderColor="gray.300">
                                    {item[key]}
                                </Td>
                            ))}
                        </Tr>
                    ))}
                </Tbody>
                <Tfoot>
                    <Tr>
                        {headers.map((header, index) => (
                            <Th key={index} color="black" borderColor="gray.300">
                                {header}
                            </Th>
                        ))}
                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
    )
}

export default TableList
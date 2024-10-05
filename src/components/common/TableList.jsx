import { Table,Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer } from "@chakra-ui/react"

function TableListComponent ({caption, data, keys, headers}) {

    return(
        <TableContainer className="bg-slate-100 rounded-lg shadow">
            <Table variant="simple" className="w-full table-fixed">
                <TableCaption>{caption}</TableCaption>
                <Thead bg='gray.200'>
                    <Tr>
                        {headers.map((header, index) => (
                            <Th key={index} color="gray.600" borderColor="gray.300">
                                {header}
                            </Th>
                        ))}
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map((item, index) => (
                        <Tr key={index}>
                            {keys.map((key, idx) => (
                                <Td color='gray.500' key={idx} borderColor="gray.300">
                                    {item[key]}
                                </Td>
                            ))}
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default TableListComponent

/*
<Tfoot>
    <Tr>
        {headers.map((header, index) => (
            <Th key={index} color="gray.700" borderColor="gray.300">
                {header}
            </Th>
        ))}
    </Tr>
</Tfoot>
*/
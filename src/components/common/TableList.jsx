import React, { useState } from 'react';
import { IoEllipsisVerticalSharp, IoCopyOutline } from "react-icons/io5";
import { Tooltip, useToast, Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react';
import '../styles/base.styles.css'

function TableListComponent({ caption, data, keys, headers }) {
    const toast = useToast()
    const [hoveredRow, setHoveredRow] = useState(null);
    const [copiedId, setCopiedId] = useState(null);

    const handleCopy = (item) => {
        navigator.clipboard.writeText(item._id).then(() => {
            setCopiedId(item._id);
            toast({
                
                description: "Se copió el ID del usuario al portapapeles.",
                status: "success",
                duration: 2000,
                isClosable: true,
            });
            setTimeout(() => setCopiedId(null), 2000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
            toast({
                title: "Error",
                description: "No se pudo copiar el ID",
                status: "error",
                duration: 2000,
                isClosable: true,
            });
        });
    };

    const handleEdit = (item) => {
        console.log('Editar:', item);
    };
    
    const handleDelete = (item) => {
        // Implementa la lógica para eliminar el item
        console.log('Eliminar:', item);
    };

    return (
        <div className="overflow-x-auto bg-zinc-50 rounded-xl border border-zinc-200 shadow">
            <table className="min-w-full bg-white">
                {caption && <caption className="p-4 text-lg font-semibold sr-only">{caption}</caption>}
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index} className="py-2 px-4 border-b border-zinc-300 text-sm font-overview font-medium text-zinc-600 hover:text-zinc-900 hover:cursor-pointer text-left">
                                {header}
                            </th>
                        ))}
                        <th className="py-2 border-b border-zinc-300"></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr 
                            key={index} 
                            className="hover:bg-zinc-100"
                            onMouseEnter={() => setHoveredRow(index)}
                            onMouseLeave={() => setHoveredRow(null)}
                        >
                            {keys.map((key, idx) => (
                                <td
                                    key={idx}
                                    className="py-4 px-4 border-b border-zinc-100 text-zinc-500 font-overview font-normal text-sm max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap"
                                >
                                    {item[key]}
                                </td>
                            ))}
                            <td className="py-4 pr-3 border-b border-zinc-100 text-right text-zinc-500">
                                <div className={`transition-opacity duration-200 ${hoveredRow === index ? 'opacity-100' : 'opacity-0'}`}>
                                    <Tooltip label='Copiar ID' fontSize='x-small'>
                                        <button 
                                            className="pr-4" 
                                            onClick={() => handleCopy(item)}
                                            aria-label="Copiar"
                                        >
                                            <IoCopyOutline className="hover:text-zinc-950" size={20} />
                                        </button>
                                    </Tooltip>
                                    <Menu closeOnBlur={true}>
                                        <Tooltip label='Ver más opciones' fontSize='x-small'>
                                            <MenuButton
                                                as={IconButton}
                                                aria-label='Opciones'
                                                icon={<IoEllipsisVerticalSharp />}
                                                variant='ghost'
                                                borderRadius='full'
                                                sx={{
                                                    _hover: { backgroundColor: 'rgb(244, 244, 245)' },
                                                    _focus: { backgroundColor: 'rgb(228, 228, 231)', boxShadow: 'none' }, 
                                                }}
                                            />
                                        </Tooltip>
                                        <MenuList minWidth='100px'>
                                            <MenuItem 
                                                sx={{
                                                    _hover: { backgroundColor: 'rgb(244, 244, 245)', color: 'rgb(39, 39, 42)' },
                                                    _focus: { backgroundColor: 'rgb(228, 228, 231)', color: 'rgb(63, 63, 70)' }, 
                                                }}
                                                onClick={() => handleEdit(item)}
                                                fontSize='revert'
                                            >
                                                Restablecer contraseña
                                            </MenuItem>
                                            <MenuItem 
                                                sx={{
                                                    _hover: { backgroundColor: 'rgb(244, 244, 245)', color: 'rgb(39, 39, 42)' }, 
                                                    _focus: { backgroundColor: 'rgb(228, 228, 231)', color: 'rgb(63, 63, 70)' },
                                                }}
                                                onClick={() => handleDelete(item)}
                                                fontSize='revert'
                                            >
                                                Inhabilitar cuenta
                                            </MenuItem>
                                            <MenuItem 
                                                sx={{
                                                    _hover: { backgroundColor: 'rgb(244, 244, 245)', color: 'rgb(39, 39, 42)' },
                                                    _focus: { backgroundColor: 'rgb(228, 228, 231)', color: 'rgb(63, 63, 70)' }, 
                                                }}
                                                onClick={() => handleDelete(item)}
                                                fontSize='revert'
                                            >
                                                Borrar cuenta
                                            </MenuItem>
                                        </MenuList>
                                    </Menu>
                                </div>
                            </td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TableListComponent
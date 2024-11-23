import React, { useState, useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import TableListComponent from "../common/TableList"
import { IoPeopleCircleSharp } from "react-icons/io5";
import { useSelector } from "react-redux"

import formatDate from "../../utils/date";
import LoadingLayout from "./Loading";

function UsersListComponent () { 
    const project = useSelector(state => state.project);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userList, setUserList] = useState([]); 
    const toast = useToast()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:4001/uauth/v1/user/', {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                        'x-project-token': `${project.token}`
                    }
                });
                
                //const response = await fetch(`http://localhost:4001/uauth/v1/user/${project.dbName}`);
                
                if (!response.ok) {
                    throw new Error("Error al consultar la API");
                }
                const result = await response.json();
                setUserList(result); 
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false); 
            }
        };
    
        fetchData();
    }, []);

    const handleDelete = (item) => {
        fetch(`http://localhost:4001/uauth/v1/user/${item._id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-project-token': `${project.token}`
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('No se pudo completar la operación.');
                }
                return response.json();
            })
            .then(data => {
                //console.log('Usuario eliminado:', data)
                setUserList(prevList => prevList.filter(user => user._id !== item._id));
                toast({
                    description: `Se borró ${item.email}`,
                    status: "success",
                    duration: 2000,
                    isClosable: true,
                });
            })
            .catch(error => {
                toast({
                    title: "Error",
                    description: "No se puede eliminar el usuario",
                    status: "error",
                    duration: 1500,
                    isClosable: true,
                });
                //console.error('Error:', error)
            });
    };
    
    const headers = ['Identificador', 'Fecha de creación', 'Fecha de acceso', 'ID de usuario'];
    const keys = ['email', 'createdAt', 'lastLoginAt', '_id'];

    const transformedUsers = userList?.map(user => ({
        ...user,
        createdAt: formatDate(user.createdAt), 
        lastLoginAt: user.lastLoginAt ? formatDate(user.lastLoginAt) : '' 
    }));

    if (loading) return <LoadingLayout background='#f4f4f5' />;

    return(
        <div>
            <div className="flex items-center justify-start space-x-2 mt-10 mx-1 mb-5">
                <IoPeopleCircleSharp size={25} />
                <h2 className=" text-2xl font-overview font-medium text-slate-800">Usuarios de registrados</h2>
            </div>
            <TableListComponent 
                caption='Registro de usuarios' 
                data={transformedUsers} 
                keys={keys} 
                headers={headers} 
                onDelete={handleDelete}
            />
        </div>
    )
}

export default UsersListComponent
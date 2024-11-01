import TableListComponent from "../common/TableList"
import { Skeleton } from '@chakra-ui/react'
import { IoPeopleCircleSharp } from "react-icons/io5";
import { useSelector } from "react-redux"

import formatDate from "../../utils/date";

// Hooks 
import useGetData from "../../hooks/useGetData";
function UsersListComponent () { 
    const project = useSelector(state => state.project);
    const { data: users, loading, error } = useGetData(`http://localhost:4001/uauth/v1/${project.dbName}/user`);
    
    const headers = ['Identificador', 'Fecha de creación', 'Fecha de acceso', 'ID de usuario'];
    const keys = ['email', 'createdAt', 'lastLoginAt', '_id'];

    const transformedUsers = users?.map(user => ({
        ...user,
        createdAt: formatDate(user.createdAt), 
        lastLoginAt: user.lastLoginAt ? formatDate(user.lastLoginAt) : '' 
    }));

    return(
        <div>
            <div className="flex items-center justify-start space-x-2 mt-10 mx-1 mb-5">
                <IoPeopleCircleSharp size={25} />
                <h2 className=" text-2xl font-overview font-medium text-slate-800">Usuarios de registrados</h2>
            </div>
            <Skeleton 
                isLoaded={!loading}
                fadeDuration={4}
                height='50px'
            >
                <TableListComponent caption='Registro de usuarios' data={transformedUsers} keys={keys} headers={headers} />
            </Skeleton>
        </div>
    )
}

export default UsersListComponent
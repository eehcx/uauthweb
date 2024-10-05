import TableListComponent from "../common/TableList"
import { IoPeopleCircleSharp } from "react-icons/io5";

function UsersListComponent () { 
    const headers = ['Identificador', 'Fecha de creación', 'ID usuario']
    const keys = ['email', 'creationDate', 'id']

    const data = [
        { email: 'user1@example.com', creationDate: '22 de febrero 2024', id: 1 },
        { email: 'user2@example.com', creationDate: '26 de abril 2023', id: 2 },
        { email: 'user3@example.com', creationDate: '25 de abril 2023', id: 3 },
        { email: 'user1@example.com', creationDate: '22 de febrero 2024', id: 4 },
        { email: 'user2@example.com', creationDate: '26 de abril 2023', id: 5 },
        { email: 'user3@example.com', creationDate: '25 de abril 2023', id: 6 },
        { email: 'user1@example.com', creationDate: '22 de febrero 2024', id: 7 },
        { email: 'user2@example.com', creationDate: '26 de abril 2023', id: 8 }
    ]

    return(
        <div>
            <div className="flex items-center justify-start space-x-2 mt-10 mx-1 mb-5">
                <IoPeopleCircleSharp size={25} />
                <h2 className=" text-2xl font-overview font-medium text-slate-800">Usuarios de registrados</h2>
            </div>
            <TableListComponent caption='Registro de usuarios' data={data} keys={keys} headers={headers} />
        </div>
    )
}

export default UsersListComponent
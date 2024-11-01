import React, { useState, useEffect } from "react"
//import useGetData from "../../hooks/useGetData"
import { useSelector } from "react-redux"
import '../../components/styles/base.styles.css'

const getLevelColor = (action) => {
    switch (action) {
        case 'info': return 'text-blue-600'
        case 'warn': return 'text-yellow-600'
        case 'error': return 'text-red-600'
        default: return 'text-gray-600'
    }
}

function LogsPage() {
    const [logs, setLogs] = useState([]);
    const project = useSelector(state => state.project)
    useEffect(() => {
        const socket = new WebSocket(`ws://localhost:4002/log/v1/${project.dbName}`);
    
        const handleOpen = () => {
            console.log('WebSocket connected');
        };
    
        const handleMessage = (event) => {
            const newLogs = JSON.parse(event.data);
            setLogs((prevLogs) => [...prevLogs, ...newLogs]);
        };
    
        const handleError = (error) => {
            console.error('WebSocket error:', error);
            console.error('WebSocket state:', socket.readyState);
        };
    
        socket.addEventListener('open', handleOpen);
        socket.addEventListener('message', handleMessage);
        socket.addEventListener('error', handleError);
    
        return () => {
            socket.removeEventListener('open', handleOpen);
            socket.removeEventListener('message', handleMessage);
            socket.removeEventListener('error', handleError);
            socket.close();
        };
    }, [project.dbName]);

    return(
        <div className="min-h-screen py-5">
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                <div className="h-[90vh] overflow-y-auto">
                    <table className="w-full font-mono text-sm">
                        <tbody>
                        {logs.map((log, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                            <td className="text-right pr-4 py-1 text-gray-400 select-none w-12 border-r border-gray-200">
                                {index + 1}
                            </td>
                            <td className="pl-4 py-1 whitespace-nowrap">
                                <span className="text-gray-500 font-logo text-base">{log.createdAt}</span>{' '}
                                <span className={`font-semibold font-logo text-base ${getLevelColor(log.action)}`}>[{log.action.toUpperCase()}]</span>{' '}
                                <span className=" font-logo text-base">{log.details}</span>
                            </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default LogsPage


/*
<div className="min-h-screen py-5">
    <div className="bg-white rounded-lg p-4 shadow-lg border border-gray-200 overflow-hidden">
        <div className="h-[90vh] overflow-y-auto">
            <pre className="font-mono text-sm">
                {logs.map((log, index) => (
                    <div key={index} className="mb-2">
                        <span className="text-gray-500 font-logo text-base">{log.createdAt}</span>{' '}
                        <span className={`font-semibold font-logo text-base ${getLevelColor(log.action)}`}>[{log.action.toUpperCase()}]</span>{' '}
                        <span className=" font-logo text-base">{log.details}</span>
                    </div>
                ))}
            </pre>
        </div>
    </div>
</div>
*/
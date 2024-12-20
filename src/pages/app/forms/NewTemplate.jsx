import { useState, useRef } from 'react';
import { Button, useToast } from "@chakra-ui/react"
import { IoSaveSharp } from "react-icons/io5";
import Editor from '@monaco-editor/react';
import { IoLogoGithub } from "react-icons/io5";
import Ajv from 'ajv';
import { useSelector } from "react-redux"

//hooks
import useGetData from "../../../hooks/useGetData"
import usePatchData from "../../../hooks/usePatchData";
import '../../../components/styles/base.styles.css'

const ajv = new Ajv();

function NewTemplate() {
    const toast = useToast()
    const editorRef = useRef(null)
    const project = useSelector(state => state.project)

    const { data: schema, loading, error } = useGetData(`http://localhost:9000/resources/v1/project/token/${project.token}/schema`)
    const { data, loading: patchLoading, error: patchError, patchData } = usePatchData(`http://localhost:9000/resources/v1/schema/project/token/${project.token}`);

    const [formattedSchema, setFormattedSchema] = useState('');
    const [isValidJson, setIsValidJson] = useState(true);

    const handleUpdate = () => {
        if (!isValidJson) {
            showToast("No se puede actualizar: El esquema JSON es inválido.");
            return;
        }

        const updatedData = {
            schema: JSON.parse(formattedSchema)
        };

        toast({
            description: "Actualización completada: El esquema es válido.",
            status: "success",
            duration: 2000,
            isClosable: true,
        });

        patchData(updatedData);
    };

    const handleEditorChange = (value) => {
        setFormattedSchema(value);
        try {
            const json = JSON.parse(value);
            const valid = ajv.validateSchema(json);

            setIsValidJson(valid);

            if (!valid) {
                showToast("Esquema JSON inválido");
            }

        } catch (e) {
            setIsValidJson(false);
            showToast(`Formato JSON inválido: ${e.message}`);
        }
    };

    const showToast = (message) => {
        if (!toast.isActive('jsonError')) {
            toast({
                id: 'jsonError',
                description: message,
                status: "error",
                duration: 1500,
                isClosable: true,
            });
        }
    };

    if (loading) return <p className="">Cargando plantilla...</p>;
    //if (error) return <p>Error: {error}</p>;

    const formattedSchemaFromServer = schema?.schema ? JSON.stringify(schema.schema, null, 2) : '';
    return(
        <div className="flex flex-col" style={{ height: "100vh", width: "100%" }}>
            <div className="flex flex-row items-center justify-between mt-10 mb-3 ">
                <div className="sm:flex sm:items-center sm:gap-2">
                    <div className="flex items-center gap-1 text-gray-500">
                        <IoLogoGithub size={17} />
                        <p className="text-xs font-medium font-logo">Documentación</p>
                    </div>

                    <span className="hidden sm:block" aria-hidden="true">&middot;</span>

                    <p className="mt-2 text-xs font-medium font-overview text-gray-500 sm:mt-0">
                    Escribe tus <a href="https://github.com/Peter2k3/microusers" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700"> JSON schemas</a>
                    </p>
                </div>
                <div className="px-4 py-1">
                    <Button
                        leftIcon={<IoSaveSharp size={19} />}
                        colorScheme='blue'
                        variant='ghost'
                        onClick={handleUpdate}
                        isLoading={patchLoading}
                        loadingText='Actualizando...'
                        disabled={!isValidJson}
                    >
                        Subir plantilla
                    </Button>
                </div>
            </div>
            <div className="flex-1 flex w-full">
                <Editor
                    height="100%"
                    width="100%"
                    defaultLanguage="json"
                    defaultValue={formattedSchemaFromServer}
                    onChange={handleEditorChange}
                    editorDidMount={(editor) => (editorRef.current = editor)}
                    options={{
                        scrollBeyondLastLine: false,
                        fontSize: 15,
                        lineHeight: 24,
                        wordWrap: 'on',
                    }}
                />
            </div>
        </div>
    )
}

export default NewTemplate

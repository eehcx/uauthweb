import React, { useState, useRef } from "react"
import { Button } from "@chakra-ui/react"
import { IoSaveSharp } from "react-icons/io5";
import Editor from '@monaco-editor/react';
import { IoLogoGithub } from "react-icons/io5";
import Ajv from 'ajv';

//hooks
import useGetData from "../../../hooks/useGetData"

import '../../../components/styles/base.styles.css'

const ajv = new Ajv();

function NewTemplate() {
    const editorRef = useRef(null);

    const { data: schema, loading, error } = useGetData('http://localhost:4000/api/schema/6702405f6015df4bd0ea75c0');

    const handleEditorChange = (value) => {
        try {
            const json = JSON.parse(value);
            const valid = ajv.validateSchema(json);
            if (!valid) {
                console.error("Invalid JSON Schema");
            } else {
                console.log("Valid JSON");
            }
        } catch (e) {
            console.error("Invalid JSON format", e);
        }
    };

    if (loading) return <p className="">Cargando plantilla...</p>;
    if (error) return <p>Error: {error}</p>;

    const formattedSchema = schema?.schema ? JSON.stringify(schema.schema, null, 2) : '';

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
                        colorScheme="blue"
                    >
                        Crear plantilla
                    </Button>
                </div>
            </div>
            <div className="flex-1 flex w-full">
                <Editor
                    height="100%"
                    width="100%"
                    defaultLanguage="json"
                    defaultValue={formattedSchema}
                    onChange={handleEditorChange}
                    editorDidMount={(editor) => (editorRef.current = editor)}
                    options={{
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

/*
<Box className="flex justify-start items-center my-10">
    <Heading fontWeight={500} fontFamily='SUSE' className="font-logo text-gray-200 " as='h1' size='2xl'>
        Arrojanos tu formato 
        <span className="hidden lg:inline"> <br /> </span> personalizado de usuario.
    </Heading>
</Box>
*/
export const jsonSchema = `
{
    "type": "object",
    "properties": {
        "displayName": { 
            "type": "string" 
        },
        "phoneNumber": { 
            "type": "string",
            "pattern": "^[0-9]{10}$"
        },
        "age": {
            "type": "integer",
            "minimum": 0,
            "maximum": 120
        },
        "isVerified": {
            "type": "boolean"
        }
    },
    "required": ["displayName", "phoneNumber", "age"]
}
`;

export const sdk = `
    const uauth = require('uauth');

    uauth.initialize({
        apiKey: 'tu_api_key_aqui'
    });

    const user = await uauth.authenticate(username, password);
    if (user) {
        console.log('Autenticación exitosa!');
    } else {
        console.log('Autenticación fallida.');
    }
`;

export const jwtGenerate =
`const jwt = require('jsonwebtoken');

const apiKey = "tu-api-key";
const payload = { projectId: "123abc" };
const token = jwt.sign(payload, apiKey);

console.log("Tu JWT es:", token);`;

export const jwtHeader =
`Authorization: Bearer <tu-jwt>`;

export const postUser =
`{
    "email": "john@doe.com",
    "password": "password",
    "age": 30,
    "isAdmin": true
}
`;

export const getUser =
`RESPONSE
[
    {
        "userId": "user_001",
        "email": "user@ejemplo.com",
        "age": 30,
        "isAdmin": true
    }
]`;
var express = require('express');
var router = express.Router();

const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
        info: {
            title: 'Swagger UI REST API Boilerplate', // Title (required)
            description: "Boilerplate to init a REST API project with expressJS, JWT authentication, bcrypt, swagger-express-UI and swagger-jsdoc",
            contact: {
                name: "Emiliano Noli"
            },
            version: '1.0.0', // Versión (required)
        },
        servers: ["http://localhost:3000"],
        securityDefinitions: {
            jwt: {
                type: "apiKey",
                in: "header",
                name: "x-access-header"
            }
        },
        security: [
            {
                jwt: []
            }
        ],
    },
    // Path to the API docs
    apis: ['./routes/*.js'],
};


// Initialize swagger-jsdoc -> returns validated swagger spec in json format
const swaggerSpec = swaggerJSDoc(options);

router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerSpec, { showExplorer: true }));

module.exports = router;
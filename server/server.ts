import bodyParser from 'body-parser';
import express from 'express';
import connectDB from './database';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = 8000;
const swagger = require('express-swagger-generator')(app);
const redoc = require('redoc-express');

let options = {
    swaggerDefinition: {
        info: {
            description: 'This is the server documentation',
            title: 'Swagger',
            version: '1.0.0',
        },
        host: `localhost:${PORT}`,
        produces: [
            "application/json",
        ],
        schemes: ['http', 'https'],
        securityDefinitions: {
            JWT: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
                description: "",
            }
        }
    },
    basedir: __dirname, //app absolute path
    files: ['./routes/**/*.ts', 'server.ts'] //Path to the API handle folder
};

connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/**
 * This is a simple function to test the Api
 * @route GET / 
 * @group Index
 * @returns {object}  Index
 */
app.get('/', (req, res) => {
    res.json({
        message: 'Hello World, Api in typescript is working'
    });
});

swagger(options);

app.get(
    '/docs',
    redoc({
        title: 'API Docs',
        specUrl: 'api-docs.json'
    })
);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
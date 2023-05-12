const swagger = require('swagger-autogen');

const outputFile = './swaggerDOCS.json'
const endpointsFiles = ['./backend']

swagger(outputFile, endpointsFiles)
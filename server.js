const express = require('express');
const expressGraphQL =  require('express-graphql');

const graphSchema = require('./app/graphSchema');

const app = express();

app.use('/graphql', expressGraphQL({
	schema: graphSchema,
	graphiql: true
})
);

app.listen(4000, () => {
	console.log("server is running.");
});

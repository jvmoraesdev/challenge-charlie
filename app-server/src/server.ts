import express, { Request, Response } from 'express';
import routes from './routes'
import cors from 'cors';
import config from './config/config';

const app = express();
const port = config.PORT;

const corsOptions = {
    origin: '*',
    methods: ['GET'],
    allowedHeaders: ['Content-Type']
};

app.use(cors(corsOptions))
app.use('/api', routes)

app.listen(port, () => {
    console.log('Running in ' + config.NODE_ENV)
    console.log(`- http://localhost:${port}`);
});

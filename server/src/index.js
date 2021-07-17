import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import articleRoutes from './routes/articles.js';

dotenv.config();

const server = express();

server.use(cors());
server.use(bodyParser.json());

server.use('articles', articleRoutes);

mongoose.connect(
    process.env.MONGOOSE_CONNECTION_URL,
    { userNewUrlParser: true, userUnifiedTopology: true },
    (err) => {
        if (err) {
            console.error(`Coudl not connect to the database`, err);
            return;
        }
        console.log(`Database is up and running`);
    }
);

server.listen(process.env.PORT, () => {
    console.log(`Server is up and running on port ${process.env.PORT}`);
});
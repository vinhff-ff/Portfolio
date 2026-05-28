import express from 'express';
import passport from 'passport';
import './config/passport.js';
import router from './routes/index.js';

const app = express();

app.use(express.json());
app.use(passport.initialize());
app.use('/', router);

export default app;
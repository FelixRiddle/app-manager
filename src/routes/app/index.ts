/**
 * Get / Set app information
 */
import express from 'express';
import AppData from '../../apps/AppData';
import repositoryRouter from './repository';

const appRouter = express.Router();

appRouter.use(repositoryRouter);

appRouter.post('/', async (req, res) => {
    try {
        console.log(`[GET] /app`);
        
        // Read apps and get their information
        const {
            path 
        } = req.body;
        
        const app = new AppData(path);
        console.log(`App name: `, app.name);
        
        await app.fetchAppRunningProcessData();
        
        return res.status(200)
            .json({
                app,
                messages: [{
                    error: false,
                    message: "Ok"
                }]
            });
    } catch(err: any) {
        // console.error(err);
        // This can fail often
        // console.log(`Error: The given app surely doesn't have 'package.json' file`);
        
        return res.status(500).json({
            messages: [{
                error: true,
                message: err.message,
            }]
        });
    }
});

export default appRouter;


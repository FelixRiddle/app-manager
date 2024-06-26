import express from "express";
import { Models } from "felixriddle.ts-app-models";

const appOutputRouter = express.Router();

appOutputRouter.get("/", async (req, res) => {
    try {
        const {
            app_name
        } = req.query;
        
        const AppOutput = new Models().appOutput;
        
        // Fetch app information
        const appsOutput: any = await AppOutput.findAll({
            where: {
                appName: app_name
            }
        });
        
        return res.status(200).send({
            appsOutput,
            messages: [{
                error: false,
                message: "Ok"
            }]
        });
    } catch(err: any) {
        // This fails often
        console.error(err);
        
        return res.status(500).send({
            messages: [{
                error: true,
                message: err.message
            }]
        });
    }
});

export default appOutputRouter;

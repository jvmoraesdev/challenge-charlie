import { Request, Response } from "express";
import fetch from 'node-fetch'
import config from "../config/config";

class BackgroundController {
    async getBackgroundImage(req: Request, res: Response) {
        try {
            const response = await fetch(config.BING_API + '/HPImageArchive.aspx?format=js&idx=0&n=1');
            const data = await response.json();
            res.json({
                success: true,
                mesage: 'Background image fetched',
                data: {
                    imageUrl: config.BING_API + data.images[0].url
                }
            })
        }
        catch (error) {
            console.error(error)
            res.status(500).send('Erro ao buscar background')
        }
    }

}

export default BackgroundController;
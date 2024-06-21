import { Request, Response } from 'express';
import BackgroundBusiness from '../business/backgroundBusiness';

class BackgroundController {
    private backgroundBusiness: BackgroundBusiness;

    constructor() {
        this.backgroundBusiness = new BackgroundBusiness();
    }

    getBackgroundImage = async (req: Request, res: Response) => {
        try {
            const imageData = await this.backgroundBusiness.getBackgroundImage();
            res.json({
                success: true,
                message: 'Background image fetched',
                data: imageData
            });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error fetching background image');
        }
    }
}

export default BackgroundController;

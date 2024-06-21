import fetch from 'node-fetch';
import config from '../config/config';

class BackgroundBusiness {
    async getBackgroundImage() {
        try {
            const response = await fetch(config.BING_API + '/HPImageArchive.aspx?format=js&idx=0&n=1');
            const data = await response.json();
            return {
                imageUrl: config.BING_API + data.images[0].url
            };
        } catch (error) {
            console.error('Error fetching background image:', error);
            throw new Error('Failed to fetch background image');
        }
    }
}

export default BackgroundBusiness;

import fetch from 'node-fetch';
import config from '../config/config';

class LocationBusiness {
    async getLocationByCoordinates(latitude: string, longitude: string) {
        try {
            const response = await fetch(config.OPEN_CAGE_API
                + '/geocode/v1/json?q=' + latitude + ',' + longitude + '&key=' + config.OPEN_CAGE_API_KEY);
            const data = await response.json();

            return data.results[0].components.city ?? data.results[0].components.town

        } catch (error) {
            console.error('Error fetching location:', error);
            throw new Error('Failed to fetch location');
        }
    }
}

export default LocationBusiness;

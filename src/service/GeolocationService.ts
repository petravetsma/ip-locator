import { GeolocationBase } from "../model/GeolocationBase";
import { GeolocationData } from "../model/GeolocationData";
import { GeolocationFailData } from "../model/GeolocationFailData";
import { GeolocationFailResponse } from "../model/GeolocationFailResponse";
import { GeolocationSuccessResponse } from "../model/GeolocationSuccessResponse";

const API_URL = 'https://ipwho.is';

/**
 * Get geolocation data for current user OR by specific IP 
 * from service {@link API_URL}.
 */
export class GeolocationService {

    deserializeGeolocaiton(json: GeolocationSuccessResponse | GeolocationFailResponse) {
        const {ip, success} = json;
        return success ? new GeolocationData(json) : new GeolocationFailData(ip, success, json.message);
    }

    /**
     * Get geolocation details for current user.
     */
    async getData(): Promise<GeolocationData | GeolocationFailData> {
        const data = await fetch(API_URL);
        const json = await data.json();
        return this.deserializeGeolocaiton(json);
    }

    /**
     * Get geolocation details by ip.
     * @param ip - can be an IPv4 or IPv6 address
     */
    async getDataByIp(ip: string): Promise<GeolocationData | GeolocationFailData> {
        const data = await fetch(`${API_URL}/${ip}`);
        const json = await data.json();
        return this.deserializeGeolocaiton(json);
    }
}
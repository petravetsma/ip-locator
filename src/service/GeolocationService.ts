import { GeolocationData } from "model/GeolocationData";
import { GeolocationFailData } from "model/GeolocationFailData";
import { GeolocationFailResponse } from "model/GeolocationFailResponse";
import { GeolocationSuccessResponse } from "model/GeolocationSuccessResponse";

const API_URL = 'https://ipwho.is';

/**
 * Get geolocation data for current user OR by specific IP 
 * from service {@link API_URL}.
 */
export class GeolocationService {

    /**
     * Deserialize server response depending on response type.
     */
    private deserializeGeolocaiton(json: GeolocationSuccessResponse | GeolocationFailResponse) {
        const {ip, success} = json;
        return success ? new GeolocationData(json) : new GeolocationFailData(ip, success, json.message);
    }

    /**
     * Get request
     * Returns json.
     */
    private async getJson(url: RequestInfo | URL, config?: RequestInit) {
        const response = await fetch(url, config);
        return await response.json();
    }

    /**
     * Get geolocation details for current user.
     */
    async getGeolocation(): Promise<GeolocationData | GeolocationFailData> {
        const json = await this.getJson(API_URL);
        return this.deserializeGeolocaiton(json);
    }

    /**
     * Get geolocation details by ip.
     * @param ip - can be an IPv4 or IPv6 address
     */
    async getGeolocationByIp(ip: string): Promise<GeolocationData | GeolocationFailData> {
        const requestUrl = `${API_URL}/${ip}`;
        const json = await this.getJson(requestUrl);
        return this.deserializeGeolocaiton(json);
    }
}
import { GeolocationBase } from "./GeolocationBase";
import { GeolocationFailResponse } from "./GeolocationFailResponse";

/**
 * Geolocaiton data when server cannot return data for specific IP.
 */
export class GeolocationFailData extends GeolocationBase {

    success: false;

    /**
     * Included only when success is false
     * Can be one of the following: 
     *   - Invalid IP address, 
     *   - You've hit the monthly limit, 
     *   - Reserved range
     */
    message: string;

    constructor(ip: string, success: false, message: string) {
        super(ip, success);
        this.success = success;
        this.message = message;
    }

    static deserialize(json: GeolocationFailResponse) {
        const {ip, success, message} = json;
        return new GeolocationFailData(ip, success, message);
    }
}
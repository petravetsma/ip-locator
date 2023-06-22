/**
 * Base geolocation data.
 */
export abstract class GeolocationBase {

    /**
     * IP used for the query (e.g. 8.8.4.4)
     * or user ip
     */
    ip: string;

    /**
     * If the query is successful, true will be returned, and false if it fails
     */
    success: boolean;

    constructor(ip: string, success: boolean) {
        this.ip = ip;
        this.success = success;
    }
}
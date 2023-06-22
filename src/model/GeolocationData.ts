import { GeolocationBase } from "./GeolocationBase";
import { GeolocationSuccessResponse } from "./GeolocationSuccessResponse";
import { MapCoordinate } from "./MapCoordinate";

export class GeolocationData extends GeolocationBase {

    success: true;

    /**
     * The name of the сountry (e.g. United States)
     */
    country: string;

    /**
     * The name of the region/state (e.g. California)
     */
    region: string;

    /**
     * The name of the city (e.g. Mountain View)
     */
    city: string;

    /**
     * The ZIP code associated with location
     */
    postal: string;

    /**
     * The approximate (WGS84) latitude of the location associated with the IP (e.g. 37.3860517)
     */
    latitude: number;

    /**
     * The approximate (WGS84) longitude of the location associated with the IP (e.g. -122.0838511)
     */
    longitude: number;

    /**
     * The name of the ISP associated with the IP (e.g. Google LLC)
     */
    isp: string;

    /**
     * Coordinate associated with the IP.
     */
    getUserCoordinate(): MapCoordinate {
        return new MapCoordinate(this.latitude, this.longitude);
    }

    /**
     * Location associated with the IP.
     */
    getUserLocation(): string {
        return `${this.country}, ${this.city}, ${this.postal}`;
    }

    constructor({
        ip,
        success,
        country,
        region,
        city,
        postal,
        latitude,
        longitude,
        connection,
    }: GeolocationSuccessResponse) {
        super(ip, success);
        this.ip = ip;
        this.success = success;
        this.country = country;
        this.region = region;
        this.city = city;
        this.postal = postal;
        this.latitude = latitude;
        this.longitude = longitude;
        this.isp = connection.isp;
    }

    static deserialize(json: GeolocationSuccessResponse) {
        return new GeolocationData(json)
    }

    /**
     * Use default data before initial data request 
     * OR
     * cannot get data from server.
     */
    static default() {
        return new GeolocationData({
            ip: '92.40.204.36',
            success: true,
            country: 'United Kingdom',
            region: 'England',
            city: 'Cullompton',
            postal: 'EX15',
            latitude: 50.91135,
            longitude: -3.227796,
            connection: {
                isp: 'Hutchison 3G UK Limited',
            }
        })
    }

}
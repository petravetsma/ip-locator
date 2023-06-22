/**
 * Success response from server.
 */

export type GeolocationSuccessResponse = {
    ip: string;
    success: true;
    country: string;
    region: string;
    city: string;
    postal: string;
    latitude: number;
    longitude: number;
    connection: {
        isp: string;
    };
};

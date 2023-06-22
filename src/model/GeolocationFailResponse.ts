/**
 * Geolocaiton server response when server cannot return data.
 */
export type GeolocationFailResponse = {
    ip: string;
    success: false;
    message: string;
}
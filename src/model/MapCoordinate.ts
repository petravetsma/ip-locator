/**
 * Represent coordinate using on map.
 */
export class MapCoordinate {
    
    private _latitude: number;

    private _longitude: number;

    /**
     * @returns map location coordinate.
     */
    getCoordinate(): [number, number] {
        return [this._latitude, this._longitude];
    }

    constructor(latitude: number, longitude: number) {
        this._latitude = latitude;
        this._longitude = longitude;
    }
}
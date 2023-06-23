import { Marker, Popup } from 'react-leaflet'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { MapCoordinate } from 'model/MapCoordinate';
import styled from 'styled-components';

const StyledMapContainer = styled(MapContainer)`
    width: 100%;
    height: 68vh;
`

type MapProps = {
    userLocation: MapCoordinate;
}

export function Map(props: MapProps) {

    const userPosition = props.userLocation.getCoordinate();

    const mapConfig = {
        url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }

    return (
        <StyledMapContainer center={userPosition} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                url={mapConfig.url}
                attribution={mapConfig.attribution}
                maxZoom={19}
            />
            <Marker position={userPosition}>
                <Popup>
                    A user with provided IP approximately is here!
                </Popup>
            </Marker>
        </StyledMapContainer>
    )
}
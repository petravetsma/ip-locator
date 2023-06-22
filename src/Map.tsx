import { Marker, Popup } from 'react-leaflet'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { MapCoordinate } from './model/MapCoordinate';
import styled from 'styled-components';

const StyledMapContainer = styled(MapContainer)`
    width: 100%;
    height: 60vh;
`

type MapProps = {
    userLocation: MapCoordinate;
}

export function Map(props: MapProps) {

    const userPosition = props.userLocation.getCoordinate();

    return (
        <StyledMapContainer center={userPosition} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                maxZoom={19}
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={userPosition}>
                <Popup>
                    User is here!
                </Popup>
            </Marker>
        </StyledMapContainer>
    )
}
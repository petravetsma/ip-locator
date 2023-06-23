import { useEffect, useState } from 'react'
import { Map } from './Map'
import { GeolocationService } from 'service/GeolocationService'
import { GeolocationData } from 'model/GeolocationData';
import { ConditionalRender } from 'components/ConditionalRender';
import { InputBar } from './InputBar';
import { IpInfoBlock } from './IpInfoBlock';
import { GeolocationFailData } from 'model/GeolocationFailData';
import { Loader } from 'components/Loader';

export function GeolocaitonWidget() {

  const [geolocationData, setGeolocationData] = useState<GeolocationData | GeolocationFailData>();
  const [isDataLoaded, setDataLoaded] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState('');

  const geolocationService = new GeolocationService();

  async function getGeolocationData(request: () => Promise<GeolocationData | GeolocationFailData>) {
    if (isDataLoaded) {
      setDataLoaded(false);
    }
    try {
      const data = await request();
      setDataLoaded(true);
      setGeolocationData(data)
    } catch (error) {
      const message = (error instanceof Error) ? `Network response: ${error.message}` : 'Unknown Error';
      setErrorMessage(message);
    }
  }

  useEffect(() => {
    getGeolocationData(() => geolocationService.getGeolocation());
  }, []);

  function handleRequestDataByIp(ip: string) {
    getGeolocationData(() => geolocationService.getGeolocationByIp(ip))
  }

  return (
    <ConditionalRender condition={isDataLoaded} alternative={errorMessage ? <>{errorMessage}</> : <Loader />}>
      <>
        {geolocationData && (<>
          <InputBar handleClick={handleRequestDataByIp} />

          {geolocationData.success
            ? <IpInfoBlock ip={geolocationData.ip} location={geolocationData.getUserLocation()} isp={geolocationData.isp} />
            : <>Server response: {geolocationData.message}</>}

          {geolocationData.success && <Map userLocation={geolocationData.getUserCoordinate()} />}

        </>)}
      </>
    </ConditionalRender>
  )
}

import { useEffect, useState } from 'react'
import './App.css'
import { Map } from './Map'
import { GeolocationService } from './service/GeolocationService'
import { GeolocationData } from './model/GeolocationData';
import { ConditionalRender } from './components/ConditionalRender';
import { InputBar } from './logic/InputBar';
import { IpInfoBlock } from './logic/IpInfoBlock';


export function App() {

  const [geolocationData, setGeolocationData] = useState<GeolocationData>(GeolocationData.default);
  // const [geolocationFailData, setGeolocationFailData] = useState<GeolocationFailData>();
  const [isDataLoaded, setDataLoaded] = useState<boolean>(false);

  const geolocationService = new GeolocationService();

  useEffect(() => {
    geolocationService.getData()
      .then(data => {
        console.log(data);
        setDataLoaded(true);
        if (data.success) {
          setGeolocationData(data)
        } else {
          // setGeolocationFailData(data)
        }
      })
  }, []);

  function handleRequestDataByIp(ip: string) {
    setDataLoaded(false);
    geolocationService.getDataByIp(ip)
      .then(data => {
        console.log(data);
        setDataLoaded(true);
        if (data.success) {
          setGeolocationData(data)
        } else {
          // setGeolocationFailData(data)
        }
      })
  }

  return (
    <ConditionalRender condition={isDataLoaded} alternative={<>Loading...</>}>

      <InputBar handleClick={handleRequestDataByIp} />
      <ConditionalRender condition={geolocationData.success} alternative={<>!</>}>
        <IpInfoBlock ip={geolocationData.ip} location={geolocationData.getUserLocation()} isp={geolocationData.isp} />
      </ConditionalRender>

      <Map userLocation={geolocationData.getUserCoordinate()} />
    </ConditionalRender>
  )
}

import { useEffect, useContext } from 'react'
import mapboxgl from 'mapbox-gl'
import { UberContext } from '../context/uberContext'

const style = {
  wrapper: `flex-1 h-full w-full`,
}

mapboxgl.accessToken =process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/ayush0320/clbv84dxk004815qow61aqn7u',
      center: [28.604, 77.216],
      zoom: 3,
    })
  }, [])

  return <div className={style.wrapper} id='map' />
}

export default Map
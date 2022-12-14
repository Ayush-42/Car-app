import Navbar from '../components/Navbar'
import Map from '../components/Map'


const style = {
  wrapper: 'h-screen w-screen flex flex-col',
  main: 'h-full w-screen flex-1 Z-10',
  mapContainer: 'flex-1 w-full h-full',
  rideRequestContainer: 'h-full w-[400px] ml-[1rem] py-[3rem] absolute top-left-0 flex flex-col justify-end',
  rideRequest: 'h-full max-h-[700px] bg-white rounded-lg flex flex-col overflow-scroll',
}

export default function Home() {
  return (
    <div className={style.wrapper}>
      <Navbar />
      <div className={style.main}>
        <Map />
      </div>
      <div className={style.rideRequestContainer}>
        <div className={style.rideRequest}>
          {/* location selector */}
          {/* confirm ride */}
        </div>
      </div>
    </div>
  )
}

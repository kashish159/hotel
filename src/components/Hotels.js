import Navbar from "./Navbar";
import Booking from "./Booking";
import wall from './images/wall.jpg'
export default function Hotels() {
  return (
    <div className="relative">
      <h1 className=" text-6xl py-20 font-bold text-white text-center absolute w-full z-30"   style={{ marginTop: '0'}}>Hotels</h1>
      <div className="h-48 bg-gray-200 z-20" style={{ paddingTop: '40px' }}>
        <Navbar />
      </div>
      <div>
            <img src={wall} style={{ marginTop: '0',width: '100%', height: '550px' }} className="mr-2"  />
      </div>
      <div className="mt-4 z-30">
        <Booking/>
      </div>
    </div>
  );
}

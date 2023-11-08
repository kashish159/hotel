import React, { useState } from 'react';

const Booking = () => {
  const [adults, setAdults] = useState(1);
  const [rooms, setRooms] = useState(1);
  const [children, setChildren] = useState(0);

  const increment = (value, setValue) => {
    if (value < 6) {
      setValue(value + 1);
    }
  };

  const decrement = (value, setValue) => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  return (
    <div className="flex items-center justify-between bg-gray-200 p-4 rounded-md">
      {/* 'Where to' field */}
      <input type="text" placeholder="Where to?" className="w-1/3 p-2 rounded-md border border-yellow-400 " />

      {/* 'Check-in, Check-out' fields */}
      <div className="flex items-center">
        <input type="date" className="p-2 rounded-md border border-yellow-400" />
        <span className="mx-4">to</span>
        <input type="date" className="p-2 rounded-md border border-yellow-400" />
      </div>

      {/* 'Adults, Room, Children' fields */}
      <div className="flex items-center">
        <div className="flex items-center">
          <button onClick={() => decrement(adults, setAdults)}><b>-</b></button>
          <select className="p-2 rounded-md border border-yellow-300" value={adults} onChange={(e) => setAdults(Number(e.target.value))}>
            {[...Array(6)].map((_, index) => (
              <option key={index} value={index + 1}>
                {index + 1} Adult
              </option>
            ))}
          </select>
          <button onClick={() => increment(adults, setAdults)}><b>+</b></button>
        </div>
        <div className="flex items-center mx-4">
          <button onClick={() => decrement(rooms, setRooms)}><b>-</b></button>
          <select className="p-2 rounded-md border border-yellow-300" value={rooms} onChange={(e) => setRooms(Number(e.target.value))}>
            {[...Array(6)].map((_, index) => (
              <option key={index} value={index + 1}>
                {index + 1} Room
              </option>
            ))}
          </select>
          <button onClick={() => increment(rooms, setRooms)} disabled={rooms === 6}><b>+</b></button>
        </div>
        <div className="flex items-center">
          <button onClick={() => decrement(children, setChildren)}><b>-</b></button>
          <select className="p-2 rounded-md border border-yellow-300" value={children} onChange={(e) => setChildren(Number(e.target.value))}>
            {[...Array(6)].map((_, index) => (
              <option key={index} value={index}>
                {index} Children
              </option>
            ))}
          </select>
          <button onClick={() => increment(children, setChildren)}><b>+</b></button>
        </div>
      </div>
    </div>
  );
}

export default Booking;

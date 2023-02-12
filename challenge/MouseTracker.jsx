import { useEffect, useState } from "react";

export default function MouseTracker() {
    const [coordinates, setCoordinates] = useState([0,0]);

  useEffect(() => {
    function update( { clientX, clientY } ) {
        setCoordinates([clientX, clientY]);
    }
    window.addEventListener("mousemove", update);
    return () => window.removeEventListener("mousemove", update);
  }, []);

  const [x, y] = coordinates;
  return (
  <output>{x}, {y}</output>
  );
}
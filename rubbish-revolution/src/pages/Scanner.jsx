import "./styles.css";
import { useState } from "react";
import { QrReader } from "react-qr-reader";
import Header from '../components/Header'

const App = () => {
  const [selected, setSelected] = useState("environment");
  const [startScan, setStartScan] = useState(false);
  const [loadingScan, setLoadingScan] = useState(false);
  const [data, setData] = useState("");

  const handleScan = async (scanData) => {
    setLoadingScan(true);
    console.log(`loaded data data`, scanData);
    if (scanData && scanData !== "") {
      console.log(`loaded >>>`, scanData);
      setData(scanData);
      setStartScan(false);
      setLoadingScan(false);
      // setPrecScan(scanData);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };
  return (
    <div>
      <Header />
      <div className="bg-primary text-white flex flex-col justify-center items-center text-center">
        <h1>RR</h1>
        <h2>
          Last Scan:
          {selected}
        </h2>

        <button className="px-10 w-100 font-extrabold tracking-wide cursor-pointer rounded-lg transition-all duration-1000 ease-out;"
          onClick={() => {
            setStartScan(!startScan);
          }}
        >
          {startScan ? "Stop Scan" : "Start Scan"}
        </button>
        {startScan && (
          <div className="bg-white text-primary w-96 ">
            <select className="bg-secondary text-white " onChange={(e) => setSelected(e.target.value)}>
              <option value={"environment"}>Back Camera</option>
              <option value={"user"}>Front Camera</option>
            </select>
            <QrReader
              facingMode={selected}
              delay={1000}
              onError={handleError}
              onResult={handleScan}
              // chooseDeviceId={()=>selected}
              style={{ width: "300px" }}
            />
          </div>
        )}
        {loadingScan && <p>Loading</p>}
        {data !== "" && <p>{data.text}</p>}
      </div>
    </div>

  );
};

export default App;

import {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { getTubeStatus } from '../store/action';
import './TubeList.css';

function TubeList() {
  const mapColor = {
    "Bakerloo": "#894E24",
    "Circle": "#FFCE00",
    "Hammersmith & City": "#D799AF",
    "Metropolitan": "#751056",
    "Piccadilly": "#0019A8",
    "Waterloo & City": "#76D0BD",
    "District": "#007229",
    "Central": "#DC241F",
    "Victoria": "#0EA3E0",
    "Northern": "#000000",
    "Jubilee": "#6A7278"
  };
  const dispatch = useDispatch();
  const tubelist = useSelector((state)=>state.status);

  useEffect(()=> {
    dispatch(getTubeStatus())
  },[]); 
  return tubelist.error ? (
    <p className="tfl-container" aria-roledescription="error">Please try after sometime. No data found.</p>
  ) : (
    <div className="tfl-container" aria-roledescription="tube list">
       {tubelist.data.map(( item, index ) => {
          return (
            <div key={index} className="tfl-row" aria-rowindex={index}>
              <div className="tube-list" style={{ borderLeft: `10px solid ${mapColor[item.name]}` }}>
              <span className="tube-name" aria-describedby="tube-name">{item.name}</span>
              <span className="tube-status" aria-describedby="tube-status">{item.lineStatuses[0].statusSeverityDescription}</span>
              </div>
            </div>
          );
        })} 
    </div>
  );
}

export default TubeList
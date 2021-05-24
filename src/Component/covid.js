import { useEffect, useState } from "react";

const Covid = () => {
    const [data, setData] = useState([]);
    const getCovidData = async () => {
        try{
            const res = await fetch('https://api.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData);
            setData(actualData.statewise[0]);
        } catch(err){
            console.log(err);
        }
    
    }

    useEffect(() =>{
        getCovidData();
    },
    []);

    return (
      <div>
      <section>
      <h2>Covid-19 Coronavirus Tracker</h2>
        <h1>🔴Live</h1>
        
        <ul>
            <li className="card">
                <div className="card__main">
                    <div className="card__inner">
                        <p className="card__name"><span>OUR</span> COUNTRY</p>
                        <p className="card__total card__small">India</p>
                    </div>
                </div>
            </li>
            <li className="card">
                <div className="card__main">
                    <div className="card__inner">
                        <p className="card__name"><span>TOTAL</span> RECOVERD</p>
                        <p className="card__total card__small">{data.recovered}</p>
                    </div>
                </div>
            </li>
            <li className="card">
                <div className="card__main">
                    <div className="card__inner">
                        <p className="card__name"><span>TOTAL</span> CONFIRMED</p>
                        <p className="card__total card__small">{data.confirmed}</p>
                    </div>
                </div>
            </li>
            <li className="card">
                <div className="card__main">
                    <div className="card__inner">
                        <p className="card__name"><span>TOTAL</span> DEATHS</p>
                        <p className="card__total card__small">{data.deaths}</p>
                    </div>
                </div>
            </li>
            <li className="card">
                <div className="card__main">
                    <div className="card__inner">
                        <p className="card__name"><span>TOTAL</span> ACTIVE</p>
                        <p className="card__total card__small">{data.active}</p>
                    </div>
                </div>
            </li>
            <li className="card">
                <div className="card__main">
                    <div className="card__inner">
                        <p className="card__name"><span>LAST</span> UPDATED</p>
                        <p className="card__total card__small">{data.lastupdatedtime}</p>
                    </div>
                </div>
            </li>
        </ul>
        </section>
      </div>
    )
  }

  export default Covid;
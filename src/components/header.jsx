import "../styles/header-styles.css"
import axios from 'axios'
import { MainContent } from './main-content'
export function Header(props)
{
    let [data,setData]=props.data
    let [location,setLocation]=props.location

    const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c7f0948a258ed19317ef21f8d9817ca8`
    function getDataFromLocation(event)
    {
      if(event.key=="Enter")
      {
        axios.get(url).then((respone)=>{
          setData(respone.data)
        })
        setLocation("")
      }
    }
    function changeLocation(event)
    {
        setLocation(event.target.value)
    }
    return(
        <>
            <div className="container">
                <div className="header">
                    <div className="temp">
                        
                            {data.main ? 
                            <>
                                <label>temprature</label><br/>
                                <h1>
                                    {data.main.temp.toFixed()+"°F"}
                                </h1> 
                            </>
                            :null}
                    </div>
                    <div className="city-name">
                        <input placeholder="name of a city" className="city-input" onKeyPress={getDataFromLocation} onChange={changeLocation}></input>
                    </div>
                    <div className="cloud">
                        
                        {data.main ?
                            <>
                                <label>weather</label><br/>
                                <h1 >
                                    {data.main ? data.weather[0].main : null}
                                </h1>
                            </>
                        :null}
                        
                        
                            
                    </div>
                </div>
            </div>
            <MainContent data={data}/>
        </>

        
    )
}
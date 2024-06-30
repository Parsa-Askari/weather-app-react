import "../styles/main-content-style.css"
export function MainContent(props)
{
    let data=props.data
    return (
        <div className="container">
            <div className="main-content">
                <div className="feels">
                    {data.main ? 
                        <>
                            <label>feels like</label>
                            <h1>{data.main ? data.main.feels_like.toFixed()+"°F":null}</h1>
                        </>
                    :null}
                    
                </div>
                <div className="humidity">
                    {data.main ? 
                        <>
                            <label>humidity</label>
                            <h1>{data.main ? data.main.humidity:null}</h1>
                        </>
                    :null}        
                </div>
                <div className="wind">
                    {data.main ? 
                        <>
                            <label>wind speed</label>
                            <h1>{data.wind ? data.wind.speed+"MPH":null}</h1>   
                        </>
                    :null}   
                    
                </div>
            </div>
        </div>
        
    )
}
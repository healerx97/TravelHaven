import {Link} from "react-router-dom"
function Recommended({mapAPI, setKeyLocation, setTerm, setLocationName}) {

    function handleClick(e) {
        if (e.target.textContent !== "") {
            let placeSearch = e.target.textContent
            fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${placeSearch}&key=${mapAPI}`)
            .then(res=>res.json())
            .then(data=> {
              //input lat, long coordinates
              console.log(data)
              if (data.results[0]) {
              let lat = `${data.results[0]?.geometry.location.lat}`
              let long = `${data.results[0]?.geometry.location.lng}`
              setLocationName(data.results[0]['formatted_address'])
              const type = "tourist_attraction"
              const keyword = "things to do"
              fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=1500&type=${type}&keyword=${keyword}&key=${mapAPI}`)
              .then(res=>res.json())
              .then(data=> {
                let n = 0
                const newObj = []
                let i = 0
                while (i < 10) {
                    if (data.results[n]?.photos) {
                        newObj.push(data.results[n])
                        n++
                        i++
                    }
                    else {
                        n++
                    }
                }
                setKeyLocation(newObj)
                setTerm(placeSearch)
                // history.push("/result")
              })
            }
            })
            } else {alert("no search inputed")}
                
          
        
    }
//  onClick={handleClick}

    return(
        <div className="recommendations">
            <h2 className="rectitle">Recommended Places to Visit</h2>
            <div onClick={handleClick}>
                <Link className="button" to="/result" >
                Los Angeles
                </Link>                
            </div>
            <br/>
            <div onClick={handleClick}>
                <Link className="button" to="/result" >
                Paris
                </Link>
            </div>
            <br/>
            <div onClick={handleClick}>
                <Link className="button" to="/result" >
                Amsterdam
                </Link>
            </div>
            <br/>
            <div onClick={handleClick}>
                <Link className="button" to="/result" >
                Athens
                </Link>
            </div>
            <br/>
            <div onClick={handleClick}>
                <Link className="button" to="/result" >
                Instanbul
                </Link>
            </div>
            <br/>
            <div onClick={handleClick}>
                <Link className="button" to="/result" >
                London
                </Link>
            </div>
            <br/>
            <div onClick={handleClick}>
                <Link className="button" to="/result" >
                Rome
                </Link>
            </div>
            <br/>
            <div onClick={handleClick}>
                <Link className="button" to="/result" >
                Miami
                </Link>
            </div>
            <br/>
            <div onClick={handleClick}>
                <Link className="button" to="/result" >
                Cape Town, South Africa
                </Link>
            </div>
            <br/>
            <div onClick={handleClick}>
                <Link className="button" to="/result" >
                Barcelona
                </Link>
            </div>
            <br/>
            <div onClick={handleClick}>
                <Link className="button" to="/result" >
                Houston
                </Link>
            </div>
            <br/>
            <div onClick={handleClick}>
                <Link className="button" to="/result" >
                San Francisco
                </Link>
            </div>
            <br/>
            <div onClick={handleClick}>
                <Link className="button" to="/result" >
               Berlin
                </Link>
            </div>
            <br/>
            <div onClick={handleClick}>
                <Link className="button" to="/result" >
                Bridgetown, Barbados
                </Link>
            </div>
            <br/>
            <div onClick={handleClick}>
                <Link className="button" to="/result" >
                Sydney
                </Link>
            </div>
    

        </div>
    )
}

export default Recommended
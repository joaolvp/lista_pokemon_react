import { useEffect, useState } from "react";
import instance from "./Api";
import { Button, Card, CardActions, CardContent } from "@mui/material";
import {useNavigate} from "react-router-dom"
import "./Home.css"


function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const res = await instance.get('/type');
      const dt = res.data;
      setData(dt)
      console.log(dt);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();

  }, []);


  return (
    <div>
      <h1>Tipos de Pokemon</h1>
      <hr/>
      <br/>
      {data.length === 0 ? (<p>Carregando...</p>) : (
        data.results.map((type, index) => {
            console.log(index);
            return(
            <div className="type" key={index}>
              <Card sx={{minWidth: 200, maxWidth:275, backgroundColor: "#999999"}}>
                <CardContent>
                    <h2>Tipo {type.name}</h2>
                </CardContent>
                <CardActions>
                    <Button sx={{margin: "0 auto", color: "white", borderColor: "#0e1217", '&:hover':{borderColor: "white"}}} size="medium" type="submit" variant="outlined"  onClick={() => navigate(`/pokemon/${type.url.split('/').slice(-2, -1)[0]}`, { replace: false } )} >Veja Mais</Button>
                </CardActions>
              </Card>
              <br/>
              


            </div>
          );
          
          })
      )}
    </div>

  );
}

export default Home;
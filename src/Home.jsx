import { useEffect, useState } from "react";
import instance from "./Api";
import { Button, Card, CardActions, CardContent } from "@mui/material";
import Pokemon from "./Pokemon";
import {useNavigate} from "react-router-dom"


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
      {data.length === 0 ? (<p>Carregando...</p>) : (
        data.results.map((type, index) => {
            console.log(index);
            return(
            <div className="type" key={index}>
              <Card sx={{minWidth: 200, maxWidth:275, backgroundColor: "yellow"}}>
                <CardContent>
                    <h2>Tipo {type.name}</h2>
                </CardContent>
                <CardActions>
                    <Button size="medium" type="submit" variant="contained"  onClick={() => navigate(`/pokemon/${index+1}`, { replace: false } )} >Veja Mais</Button>
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
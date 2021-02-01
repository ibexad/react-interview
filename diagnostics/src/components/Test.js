import React from 'react'
import axios from 'axios'
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import CardActions from "@material-ui/core/CardActions"
import Button from "@material-ui/core/Button"
import { Link } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import { useLocalStorage } from "../utils"


const BASE_URL = 'http://localhost:8001/api/v1/diagnostics'

const Test = ({ test }) =>{  

    const [testResult,setTestResult] = useLocalStorage('result1' , null);

    const handleTestClick = async ( route ) =>{
        await axios.post(`${BASE_URL}${route}`)
            .then(result => { 
                testResult ? setTestResult(testResult + result.data.result) : setTestResult(result.data.result)                
            })
            .catch(error => {
               console.log(error);
            });
    }
    
    return(        
        test.tests.map((item, index) => {            
            return(                
                <Box p={2} key={index}>               
                    <Card variant="outlined">                   
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="h2">
                                {item.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {item.route}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" size="small" color="secondary" onClick={()=>{handleTestClick(item.route)}}>
                                Test Now!
                            </Button>
                            <Button component={ Link } to={item.route} variant="contained" size="small" color="primary" >
                                Results
                            </Button>                            
                        </CardActions>
                    </Card>
                </Box>                
            )
        })
    )
}

export default Test

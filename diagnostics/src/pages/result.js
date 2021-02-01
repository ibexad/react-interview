import React from 'react'
import { useLocalStorage } from "../utils"
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"

const Result = () => {
  
  const [result,setResult] = useLocalStorage('result1')
  
  return(   
    
      <Grid container item xs={12} sm={6} md={12} alignItems="center" justify="center">
          <Box p={2}>               
            <Card variant="outlined">                   
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">Test Results:</Typography>
                      <Box p={4}>
                        {result} 
                      </Box>
                      <Grid container alignItems="center" justify="center">
                        <Box p={2}>
                          <Button component={ Link } to="/" variant="contained" size="small" color="primary" >
                              Back
                          </Button>  
                        </Box>                       
                      </Grid>                       
                </CardContent>
            </Card>
          </Box>    
    </Grid>                
              
  )  
}
 
export default Result

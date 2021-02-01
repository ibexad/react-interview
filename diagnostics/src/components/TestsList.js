import React from 'react'
import Test from './Test'
import Grid from '@material-ui/core/Grid'
import Typography from "@material-ui/core/Typography"

const TestsList = ({ tests }) =>{    
    return(
        <Grid container>
            {tests && tests.map((item, index) => {
            return(
                <Grid item xs={12} sm={6} md={4} key={index}>   
                    <Grid container alignItems="center" justify="center">
                        <Typography variant="h4">{item.category}</Typography>   
                    </Grid>        
                    <Test test={item} key={index} />                                        
                </Grid> 
            )
        })}
        </Grid>
    )       
}

export default TestsList;
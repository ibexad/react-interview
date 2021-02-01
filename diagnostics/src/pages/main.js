import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios';
import TestsList from '../components/TestsList'
import Container from '@material-ui/core/Container'
import Progress from '../components/Progress'

const Main = () => {

  const [tests, setTests] = useState('')
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {    
    const url = "http://localhost:8001/tests"
    fetch(url)
  }, [])

  const fetch = async (url) =>{  
      
    setLoading(true)
    
    await axios.get(url)
      .then(result=>{
          setTests(result.data.tests)          
      }).catch(error=>{
          console.log(error)
          return null;
      })

      setLoading(false)
  }

  return (
    <Fragment > 
    <Container>    
      <Progress open={loading}/> 
      <TestsList tests={tests} />    
      {/* <Grid item container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center">
        <Grid>
          <Paging callback={setPage} count={pageCount}/>
        </Grid>          
      </Grid> */}
    </Container>
  </Fragment>
  );
}

export default Main;

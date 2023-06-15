import React, { useEffect } from 'react'
import { DeleteCart, GetCart } from '../Services/Services';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, CardContent, Container, Grid, Typography } from '@mui/material';

const Cart = () => {

  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.data
  })


  useEffect(() => {
    dispatch(GetCart())
  }, [dispatch])

  const forDeleteCart = (id) => {
    dispatch(DeleteCart(id))
    setTimeout(() => {
      dispatch(GetCart())
    }, 1);
  }

  return (
    <React.Fragment>
      <h1 className='text-center'>Cart Page</h1>
      {
        data.map((xd) => {
          return (
            <Card key={xd.product_id._id} style={{ width: '70%', height: '70vh', display: 'flex', justifyContent: 'center' }}>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <img
                      src={xd.product_id.image}
                      alt=""
                      style={{
                        width: '100%',
                        height: 'auto',
                        maxWidth: '100%',
                        objectFit: 'cover',
                        borderRadius: '8px',
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6">{xd.product_id.brand}</Typography>
                    <Typography variant="h4">{xd.product_id.product_name}</Typography>
                    <Typography variant="h5">{(xd.product_id.price * xd.quantity).toString()}</Typography>
                    <Typography variant="body1">{xd.product_id.rating}</Typography>
                    <Grid container alignItems="center" spacing={1}>
                      <Button onClick={() => forDeleteCart(xd._id)}>Delete</Button>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>)
        })
      }
    </React.Fragment>
  )
}

export default Cart
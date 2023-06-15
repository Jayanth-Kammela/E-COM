import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import { Add, Remove, ShoppingCart } from '@mui/icons-material';
import { AddCart, GetProduct } from '../Services/Services';

const ProductById = () => {

  const [count, setCount] = useState(1);

  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const product = useSelector((state) => {
    return state.data
  });

  useEffect(() => {
    dispatch(GetProduct(id));
  }, []);


  const forDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const forIncrement = () => {
    setCount(count + 1);
  };

  const forAddToCart = async () => {
    try {
      dispatch(AddCart({ product_id: product._id, quantity: count }))
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <React.Fragment>
      <div>
        {product.loading ? <p>Loading...</p> : null}
        {product && <div className='w-100 h-50 d-flex justify-content-center'>
          <Card style={{ width: '70%', height: '70vh', display: 'flex', justifyContent: 'center' }}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <img
                    src={product.image}
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
                  <Typography variant="h6">{product.brand}</Typography>
                  <Typography variant="h4">{product.product_name}</Typography>
                  <Typography variant="h5">{(product.price * count).toString()}</Typography>
                  <Typography variant="body1">{product.rating}</Typography>
                  <Grid container alignItems="center" spacing={1}>
                    <Grid item>
                      <Button variant="outlined" onClick={forDecrement}>
                        <Remove />
                      </Button>
                    </Grid>
                    <Grid item>
                      <Typography variant="body1">{count}</Typography>
                    </Grid>
                    <Grid item>
                      <Button variant="outlined" onClick={forIncrement}>
                        <Add />
                      </Button>
                    </Grid>
                  </Grid>
                  <Button variant="contained" startIcon={<ShoppingCart />} onClick={forAddToCart} style={{ marginTop: '1rem', whiteSpace: 'break-spaces', width: '100%' }}>
                    Add to Cart
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Button
            variant="outlined"
            style={{ position: 'fixed', marginTop: '30em', bottom: '1rem', right: '1rem' }}
            onClick={() => {
              navigate('/ecom/product');
              window.location.reload();
            }}
          >
            Go Back
          </Button>

        </div>}
      </div>
    </React.Fragment>
  );
};

export default ProductById;

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetProduct } from '../Services/Services'
import { Card, CardContent, CardMedia, Container, Grid, Typography, IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';

const Products = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const wholeData = useSelector((state) => {
        return state
    })
    console.log(wholeData);

    useEffect(() => {
        dispatch(GetProduct())
    }, [])

    const getById = async (id) => {
        try {
            navigate(`/ecom/product/${id}`)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <React.Fragment>
            {wholeData.load ? <p>loading</p> : null}
            <Grid container spacing={2} sx={{ padding: '14px' }}>
                {wholeData.data.map((card) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={card._id}>
                        <Card style={{ position: 'relative', margin: '10px 10px' }}>
                            <CardMedia
                                component="img"
                                height={400}
                                style={{ objectFit: 'cover', width: '100%' }}
                                image={card.image}
                                alt={card.product_name}
                            />
                            <CardContent>
                                <Typography variant="h6" component="h2">
                                    {card.product_name}
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {card.brand}
                                </Typography>
                                <Typography variant="h6" component="h3">
                                    {card.price}
                                </Typography>
                            </CardContent>
                            <IconButton onClick={() => getById(card._id)}
                                style={{ position: 'absolute', bottom: 8, right: 8 }}
                                aria-label="visibility"
                            >
                                <VisibilityIcon />
                            </IconButton>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </React.Fragment>
    )
}

export default Products
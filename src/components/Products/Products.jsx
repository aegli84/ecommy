import React from 'react'
import Grid  from '@material-ui/core/Grid'
import Product from './Product/Product'
import useStyles from './styles';
const products = [
    { id: 1, name: 'Shoes', description: 'Running Shoes', price:'$5', image: 'https://www.asos.com/adidas-originals/adidas-originals-essentials-t-shirt-in-yellow/prd/23572675?colourwayid=60494685&SearchQuery=adidas+t+shirt'},
    { id: 2, name: 'Tshirt', description: 'Adidas', price: '$10', image:'https://www.asos.com/adidas-originals/adidas-originals-forum-low-collegiate-trainers-in-white/prd/23549098?colourwayid=60492920&SearchQuery=adidas'},
]

const Products = () => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
        <div className={classes.toolbar}/>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid  key={product.id} item xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;
import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material"
import { IShop } from "../types"
import { useCallback } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const ShopCard = ({ shop, setShop }: {shop: IShop, setShop: (val: IShop)=>void}) => {
    const {ID, Name, Address} = shop;
    const handlerSetShop = useCallback(()=>{
        setShop(shop);
    },[shop, setShop]);

    return(
    <Box sx={{ width: "100%" }}>
        <Card variant="outlined">
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    ID: {ID}
                </Typography>
                <Typography variant="h5" component="div">
                    {Name}
                </Typography>
                <Typography variant="body2">
                Адрес: {Address}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={handlerSetShop} endIcon={<ArrowForwardIosIcon/>}>Товары</Button>
            </CardActions>
        </Card>
    </Box>
    )
}
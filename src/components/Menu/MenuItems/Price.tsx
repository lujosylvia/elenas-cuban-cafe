import { Grid, Typography } from "@material-ui/core";
import React from "react";

export interface PriceProps {
    price: number | number[];
    quantity?: number | number[] | null;
    units?: string | null;
}

const Price: React.FC<PriceProps> = ({ price, quantity, units}) => {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    if(price instanceof Array){
        return (
            <></>
        )
    }

    return (
        <>
            <Typography>{formatter.format(price)}{
                quantity ? (`  -  ${quantity} ${units}`) : null
            }</Typography>
            
        </>
    );
}

export default Price;
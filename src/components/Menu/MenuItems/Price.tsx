import { Grid, Typography } from "@material-ui/core";
import React from "react";

export interface PriceProps {
    price: number | number[];
    quantity?: number | number[] | null;
    units?: string | null;
}

const Price: React.FC<PriceProps> = ({ price, quantity, units}) => {

    if(price instanceof Array){
        return (
            <></>
        )
    }

    return (
        <>
            <Typography>${price}{
                quantity ? (`  -  ${quantity} ${units}`) : null
            }</Typography>
            
        </>
    );
}

export default Price;
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
            <Grid direction="column">
                {
                    price.map((value: number, index: number) => {
                        const quantityArray = quantity as Array<number>;
                        
                        return(
                            <Typography style={{ color: "#534E4C", fontFamily: "'Roboto', sans-serif" }}>{formatter.format(value)}{
                                quantity ? (`  -  ${quantityArray[index]} ${units}`) : null
                            }</Typography>
                        );
                    })
                }
            </Grid>
        )
    }

    return (
        <>
            <Typography style={{ color: "#534E4C", fontFamily: "'Roboto', sans-serif" }}>{formatter.format(price)}{
                quantity ? (`  -  ${quantity} ${units}`) : null
            }</Typography>
            
        </>
    );
}

export default Price;
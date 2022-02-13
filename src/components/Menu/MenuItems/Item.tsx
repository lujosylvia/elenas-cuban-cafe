import { Grid, GridSize, Typography } from "@material-ui/core";
import React from "react";
import { MenuItem } from "../../../services/firestore/models";
import Price from "./Price";
import { useItemStyles } from "./styles";

export interface ItemProps {
    item: MenuItem,
    width?: GridSize
}

const Item: React.FC<ItemProps> = ({ item, width }) => {
    const { titleText, descriptionText } = useItemStyles();

    return (
        <Grid item xs={12} md={width ? width : 6} style={{ margin: "1rem"}}>
            <Typography className={titleText}>{item.title} {item["spanish-title"] ? (`| ${item['spanish-title']}`) : null}</Typography>
            {
                item.description ? (
                    <Typography className={descriptionText}>{item.description}</Typography>
                ) : null
            }
            <Price price={item.price} quantity={item.quantity} units={item.units ?? "units"} />
        </Grid>
    );
}

export default Item;
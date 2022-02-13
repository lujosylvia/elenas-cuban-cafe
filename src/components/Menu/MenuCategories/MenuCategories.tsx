import React, { useState } from "react"
import { Grid, Container } from "@material-ui/core"
import MenuCategory from "./MenuCategory";
import { DatabaseCategories, CategoryNames } from "../../../services/firestore/Categories"

export interface MenuCategoriesProps {
    setCategory: any
};

const MenuCategories: React.FC<MenuCategoriesProps> = ({ setCategory }) => {

    return(
            <Grid 
                container 
                spacing={0}
                justifyContent='center'
                alignItems='center'
                >
                {
                    Object.values(DatabaseCategories).map((category) => {
                        var dbcat = category as DatabaseCategories;
                        return (
                            <Grid item xs={12} md={12}>
                                <MenuCategory name={dbcat} setCategory={setCategory} />
                            </Grid>
                        );
                    })
                }
            </Grid>
    )
}

export default MenuCategories;
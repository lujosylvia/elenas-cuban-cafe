import React, { useEffect, useCallback, useState } from "react"
import { Container, Grid, Typography } from "@material-ui/core"
import { useNavigate } from "react-router-dom";
import Item from "./MenuItems/Item";
import { MenuItem } from "../../services/firestore/models";
import { DatabaseCategories } from "../../services/firestore/Categories"
import { getMenu } from "../../services/firestore/api";

export interface MenuProps {
    category: DatabaseCategories | null
};

export const Menu: React.FC<MenuProps> = ({ category }) => {
    const navigate = useNavigate();
    const [menu, setMenu] = useState<any | null>(null);

    if(category == null){
        navigate(`/menu/`)
    }

    const fetchMenu = useCallback(async () => {
        let response = await getMenu(category);
        setMenu(response)
      }, []);

    useEffect(() => {
        fetchMenu();
    }, [fetchMenu]);

    return(
            <Grid 
                container 
                spacing={0}
            >
                {
                    menu?.map((item : MenuItem) => {
                        return(
                            <Item item={item}/>
                        )
                    })
                }
            </Grid>
    )
}
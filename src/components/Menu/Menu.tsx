import React, { useEffect, useCallback, useState } from "react"
import { Container, Grid, Typography } from "@material-ui/core"
import { useNavigate } from "react-router-dom";
import Item from "./MenuItems/Item";
import { MenuItem } from "../../services/firestore/models";
import { DatabaseCategories } from "../../services/firestore/Categories"
import { getMenu } from "../../services/firestore/api";
import { useMenuStyles } from "./styles";
import { DayNames } from "../../constants/Days";

export interface MenuProps {
    category: DatabaseCategories | null
};

export const Menu: React.FC<MenuProps> = ({ category }) => {
    const navigate = useNavigate();
    const { titleText } = useMenuStyles();
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

    if(menu?.some((x: MenuItem) => x.day !== undefined)){
        return(
                <Grid 
                    container
                    spacing={2}
                    style={{ marginTop: "1rem"}}
                    justifyContent='center'
                >
                    {
                        Object.keys(DayNames).map((value: string | DayNames) => (
                            <>
                                <Grid item xs={12} md={2} style={{ margin: "1rem"}}>
                                    <Typography className={titleText}>{DayNames[parseInt(value.toString())]}</Typography>
                                </Grid>
                                <Grid item xs={12} md={9}>
                                {
                                    
                                    menu?.filter((item: MenuItem) => item.day === parseInt(value.toString()))
                                         .map((item : MenuItem) => <Item item={item} width={12} />)
                                }
                                </Grid>
                            </>
                        ))
                    }
                    
                    </Grid>
        )
    }

    return(
            <Grid 
                container 
                spacing={2}
                style={{  marginTop: "1rem", justifyContent: "center" }}
            >
                {
                    menu?.map((item : MenuItem) => <Item item={item} />)
                }
            </Grid>
    )
};
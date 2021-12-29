import { Box, Typography } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CategoryNames, DatabaseCategories } from "../../../services/firestore/Categories";
import { useMenuCategoryStyles } from "./menuCategoryStyles";

export interface MenuCategoryProps {
    name: DatabaseCategories,
    setCategory: any
}

const MenuCategory: React.FC<MenuCategoryProps> = ({ name, setCategory }) => {
    const navigate = useNavigate();
    const { root, text } = useMenuCategoryStyles();

    const handleClick = (category: string) => {
        if(!category){
            return;
        }

        setCategory(category);
        navigate(`/menu/${category}`)
    }
    return (
        <Box 
            className={root} 
            sx={{ justifyContent: "center", alignItems: "center"}}
            onClick={() => handleClick(name)}>
            <Typography className={text}>
                {CategoryNames[name]}
            </Typography>
        </Box>
    );
}

export default MenuCategory;
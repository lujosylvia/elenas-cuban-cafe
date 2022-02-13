import { makeStyles, Theme } from "@material-ui/core";
import { ViewColumn } from "@mui/icons-material";

export const useMenuCategoryStyles = makeStyles(
    (theme: Theme) => ({
        root: {
            display: "flex",
            flexDirection: "column",
            borderRadius: "4px 4px 4px 4px",
            height: theme.spacing(10),
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            margin: "0.1rem",
            padding: theme.spacing(1)
        },
        text: {
            fontSize: theme.spacing(3),
            textAlign: "center",
            color: "#534E4C",
            fontWeight: 400,
            fontFamily: "'Roboto', sans-serif",
            alignItems: "center",
            textTransform: "uppercase",
            opacity: 1,
            textDecoration: "none",
            transition: "box-shadow 0.3s, font-weight 0.3s, ease-in-out",
            '&:hover': {
                boxShadow: "0 1px #534E4C",
                fontWeight: 500
                
            },
            '&::after': {

            }
        }
    })
);
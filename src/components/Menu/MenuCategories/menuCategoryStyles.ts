import { makeStyles, Theme } from "@material-ui/core";
import { ViewColumn } from "@mui/icons-material";

export const useMenuCategoryStyles = makeStyles(
    (theme: Theme) => ({
        root: {
            display: "flex",
            flexDirection: "column",
            background: "#1976d2",
            opacity: 0.5,
            borderRadius: "4px 4px 4px 4px",
            height: theme.spacing(60),
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            margin: "0.1rem",
            padding: theme.spacing(1)
        },
        text: {
            fontSize: theme.spacing(2),
            textAlign: "center",
            color: "white",
            fontWeight: 550,
            fontFamily: "'Montserrat', sans-serif",
            alignItems: "center",
            textTransform: "uppercase",
            "&:hover": {
                opacity: 1,
            }
        },
    })
);
import { makeStyles, Theme } from "@material-ui/core";

export const useMenuCategoryStyles = makeStyles(
    (theme: Theme) => ({
        root: {
            background: theme.palette.primary.main,
            borderRadius: "4px 4px 4px 4px",
            height: theme.spacing(40),
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            margin: "0.1rem"
        },
        text: {
            fontSize: theme.spacing(2),
            textAlign: "center",
            color: "white",
            fontWeight: "bold",
            textTransform: "uppercase"
        }
    })
);
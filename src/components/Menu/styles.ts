import { makeStyles, Theme } from "@material-ui/core";

export const useMenuStyles = makeStyles(
    (theme: Theme) => ({
        titleText: {
            fontSize: "1.15rem",
            fontWeight: 500,
            textTransform: "uppercase",
            color: "#534E4C",
            fontFamily: "'Roboto', sans-serif",
        }
    })
);
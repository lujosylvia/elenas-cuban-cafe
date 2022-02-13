import { makeStyles, Theme } from "@material-ui/core";

export const useItemStyles = makeStyles(
    (theme: Theme) => ({
        titleText: {
            fontSize: "1.15rem",
            fontWeight: 500,
            textTransform: "uppercase",
            color: "#534E4C",
            fontFamily: "'Roboto', sans-serif",
        },
        descriptionText: {
            fontSize: "1.1rem",
            color: "#534E4C",
            fontFamily: "'Roboto', sans-serif"
        }
    })
);
import { makeStyles, Theme } from "@material-ui/core";

export const useOrderStyles = makeStyles(
    (theme: Theme) => ({
        mainText: {
            fontSize: "1.15rem",
            fontWeight: 400,
            color: "#534E4C",
            fontFamily: "'Roboto', sans-serif",
        },
        secondaryText: {
            fontSize: "1.1rem",
            color: "#534E4C",
            fontFamily: "'Roboto', sans-serif"
        }
    })
);
import { makeStyles, Theme } from "@material-ui/core";

export const useItemStyles = makeStyles(
    (theme: Theme) => ({
        titleText: {
            fontSize: "1.15rem",
            fontWeight: 600,
            textTransform: "uppercase"
        },
        descriptionText: {
            fontSize: "1.1rem"
        }
    })
);
import { makeStyles, Theme } from "@material-ui/core";

export const useLoginStyles = makeStyles(
    (theme: Theme) => ({
        signInText: {
            fontSize: "1rem",
            fontWeight: 500,
            textTransform: "uppercase",
            color: "#534E4C",
            fontFamily: "'Roboto', sans-serif",
            paddingLeft: "2rem",
            paddingRight: "2rem",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem"
        },
        inputStyle: {
            fontSize: "1rem",
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
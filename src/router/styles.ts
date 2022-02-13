import { makeStyles, Theme } from "@material-ui/core";

export const useAnimatedRouterStyles = makeStyles(
    (theme: Theme) => ({
        appBackground: {
            padding: theme.spacing(2),
            paddingTop: theme.spacing(13),
            background: theme.palette.grey[200]
        }
    })
);
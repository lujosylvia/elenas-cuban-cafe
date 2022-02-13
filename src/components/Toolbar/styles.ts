
   
import { makeStyles, Theme } from "@material-ui/core";

export const useAppToolbarStyles = makeStyles(
    (theme: Theme) => ({
        root: {
            background: theme.palette.common.white,
        },
        orderButton: {
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.background.default,
            "&:hover": {
                color: theme.palette.background.default
            }
        },
        menuLink: {
            color: "#534E4C"
        }
    })
);


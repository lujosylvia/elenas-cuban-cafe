
   
import { makeStyles, Theme } from "@material-ui/core";

export const useAppToolbarStyles = makeStyles(
    (theme: Theme) => ({
        root: {
            background: theme.palette.primary.main,
        },
        orderButton: {
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.background.default,
            "&:hover": {
                color: theme.palette.background.default
            }
        }
    })
);


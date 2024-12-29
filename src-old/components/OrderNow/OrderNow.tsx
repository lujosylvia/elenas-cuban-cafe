// import React, { useEffect, useCallback, useState } from "react"
// import { Container, Grid, Typography } from "@material-ui/core"
// import { useNavigate } from "react-router-dom";
// import { MenuItem } from "../../services/firestore/models";
// import { DatabaseCategories } from "../../services/firestore/Categories"
// import { getMenu } from "../../services/firestore/api";
// import { DayNames } from "../../constants/Days";
// import { useOrderStyles } from "./styles";


// export const OrderNow: React.FC = () => {
//     const { mainText, secondaryText } = useOrderStyles();

//     return(
//             <Grid 
//                 container 
//                 spacing={2}
//                 style={{  marginTop: "1rem", justifyContent: "center" }}
//             >
//                 <Grid item xs={12} md={9}>
//                     <Typography className={mainText}>For drive thru pick-up, please call 15 minutes ahead at (863) 665-3333.</Typography>
//                 </Grid>
//                 <Grid item xs={12} md={9}>
//                     <Typography className={mainText}>Servicio por la ventanilla, favor de llamar 15 minutos antes de recogerlo al numero (863) 665-3333.</Typography>
//                 </Grid>
//             </Grid>
//     )
// };
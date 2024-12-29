// import { Button, Grid, TextField, Typography } from "@material-ui/core";
// import React from "react";
// import { useLoginStyles } from "./styles";

// interface ConfirmationCodeFormProps {
//     onSubmit: any;
//     onChange: any;
//     confirmationCode: string;
// }

// const ConfirmationCodeForm: React.FC<ConfirmationCodeFormProps> = ({
//     onSubmit,
//     onChange,
//     confirmationCode
// }) => {
//     const { signInText, inputStyle } = useLoginStyles();

//     return (
//         <form>
//         <Grid 
//             container 
//             spacing={0} 
//             justifyContent="center"
//             alignItems="center"
//             direction="row"
//             style={{ marginTop: "6rem", marginBottom: "2rem"}}
//         >
//             <Typography className={signInText}>
//                 Confirm Code
//             </Typography>
//         </Grid>
//         <Grid 
//             container 
//             spacing={0} 
//             justifyContent="center"
//             alignItems="center"
//             direction="row"
//         >
//             <Grid item
//                 xs={6}
//             >
//                 <TextField 
//                     variant="standard" 
//                     margin="normal"
//                     placeholder="CONFIRMATION CODE"
//                     fullWidth
//                     onChange={onChange}
//                     required
//                 />
//             </Grid>
//         </Grid>
//         <Grid 
//             container 
//             spacing={0} 
//             justifyContent="center"
//             alignItems="center"
//             direction="row"
//             style={{ marginTop: "2rem"}}
//         >
//             <Grid item
//                 xs={6}
//             >
//                 <Button
//                     variant="outlined"
//                     id="sign-in-button"
//                     onClick={() => onSubmit(confirmationCode) }
//                 >
//                     <Typography className={signInText}>
//                         Confirm
//                     </Typography>
//                 </Button>
//             </Grid>
//         </Grid>
//     </form>
//     )
// }

// export default ConfirmationCodeForm;
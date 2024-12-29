// import React from "react";
// import { Button, Grid, TextField, Typography } from "@material-ui/core";
// import { useLoginStyles } from "./styles";

// interface PhoneNumberFormProps {
//     onSubmit: any;
//     onChange: any;
//     phoneNumber: string;
// }

// const PhoneNumberForm: React.FC<PhoneNumberFormProps> = ({
//     onSubmit,
//     onChange,
//     phoneNumber
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
//                 Admin Sign-In
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
//                     placeholder="PHONE NUMBER"
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
//                     onClick={() => onSubmit(phoneNumber) }
//                 >
//                     <Typography className={signInText}>
//                         Sign In
//                     </Typography>
//                 </Button>
//             </Grid>
//         </Grid>
//     </form>
//     )
// }

// export default PhoneNumberForm;
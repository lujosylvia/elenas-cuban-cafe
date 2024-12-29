import React, { useEffect, useState } from "react";
import { ConfirmationResult, getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import PhoneNumberForm from "./PhoneNumberForm";
import ConfirmationCodeForm from "./ConfirmationCodeForm";
import { useNavigate } from "react-router";
import { setToken } from "../../services/auth/utils";

declare global {
    interface Window {
        recaptchaVerifier: any;
    }
}

const auth = getAuth();
auth.useDeviceLanguage();

export const LoginPage = () => {
    const navigate = useNavigate();
    const [ didSendCode, setDidSendCode ] = useState<boolean>(false);
    const [ phoneNumber, setPhoneNumber ] = useState<string>("");
    const [ confirmationCode, setConfirmationCode ] = useState<string>("");
    const [ confirmationResult, setConfirmationResult ] = useState<ConfirmationResult>();

    const onPhoneNumberChange:  React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = 
        (event: React.ChangeEvent<HTMLInputElement>) => {
            event.preventDefault();
            setPhoneNumber(event.target.value);
        }

    const onConfirmationCodeChange:React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = 
    (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setConfirmationCode(event.target.value);
    }

    const onPhoneNumberSubmit = (phoneNumber: string) => {
            const modifiedNumber = `+1${phoneNumber}`;

            signInWithPhoneNumber(auth, modifiedNumber, window.recaptchaVerifier)
                .then((confirmationResult) => {
                    setDidSendCode(true);
                    setConfirmationResult(confirmationResult);
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                // ...
                }).catch((error) => {
                    setDidSendCode(false);
                // Error; SMS not sent
                // ...
                
                });
        };

    const onConfirmationCodeSubmit = async (confirmationCode: string) => {
        const result = await confirmationResult?.confirm(confirmationCode);
        console.log('#### confirmation result', result);

        if(result?.user){
            const tokenResult = await result.user.getIdTokenResult(false);

            setToken(tokenResult.token, tokenResult.expirationTime);
            navigate("/admin/view-orders")
        }
        else {
            //display error
        }
    };

    useEffect(() => {
        window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response: any) => {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
              console.log('#### recaptcha verified', response);
              //onSignInSubmit();
            }
          }, auth);
    }, []);

    return (
    <form>
        {
            didSendCode ?
                (
                    <ConfirmationCodeForm 
                        onSubmit={onConfirmationCodeSubmit}
                        onChange={onConfirmationCodeChange}
                        confirmationCode={confirmationCode}
                    />
                ) :
                (
                    <PhoneNumberForm
                        onSubmit={onPhoneNumberSubmit}
                        onChange={onPhoneNumberChange}
                        phoneNumber={phoneNumber} 
                    />
                )
        }
    </form>
    );
};
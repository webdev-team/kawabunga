export namespace GigyaAccounts {

    export let getTokenJWT = (): Promise<boolean> => {
        return new Promise((resolve, reject) => {
            window.gigya.accounts.getJWT({
                fields: 'profile.email,data.mailVerified',
                callback: (result) => {
                    if (result.status === 'OK') {
                        resolve(result);
                    } else {
                        reject(new Error('Passmedia Email not verified'));
                    }
                }
            });
        });
    };

    export let getTokenJWT_onLogin = (): Promise<boolean> => {
        return new Promise((resolve, reject) => {
            window.gigya.accounts.addEventHandlers({
                onLogin: () => getTokenJWT().then(resolve).catch(reject)
            });
        });
    };

    export let sendValidationEmail = (email): void => {
        window.gigya.accounts.resendVerificationCode({
            email: email
        });
    };
}
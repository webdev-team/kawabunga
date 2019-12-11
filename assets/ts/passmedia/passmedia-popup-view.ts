export interface PopupData {
    email?: string;
}

export let renderLoginPopup = (): string => `
    <div class="row">
        <div class="col d-md-none">
            <div class="title">PASSMEDIA</div>
        </div>
        <div class="col-12">
            <p class="mb-3">Félicitations, vous bénéficiez dès à présent d'un accès connecté à l'ensemble de RTL</p>
        </div>
        <div class="col-12">
            <div class="row align-items-center">
                <div class="col-12 col-md mb-sm-3 mb-md-0">
                    <a href="#" class="link">Consulter les CGU RTL</a>
                </div>
                <div class="col-12 col-md-auto">
                    <a class="btn btn-action btn-link" data-role="pm-popup-close">Ne pas me connecter</a>
                    <a class="btn btn-action btn-primary" data-role="pm-popup-ok">Ok</a>
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="progress">
                <div class="progress-bar bg-success" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    </div>`;

export let renderVerifyEmailPopup = (data: PopupData): string => `
    <div class="row">
        <div class="col text-right">
            <span class="close" data-role="pm-popup-close"><i class="icon icon-close-sign icon-ff"></i></span>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="title">PASSMEDIA</div>
            <div class="subtitle">Session PassMedia détectée</div>
            <p class="mb-3">Vous disposez déjà d'un compte RTL avec l'adresse email ${data.email}</p>
            <p class="mb-3">Pour associer votre compte PassMedia avec votre compte RTL, veuillez vérifier votre adresse email</p>
            <a class="btn btn-action btn-primary d-block mb-3" data-role="pm-popup-ok">Recevoir un email de vérification</a>
        </div>
    </div>`;

export let renderFeedbackPopup = (data: PopupData): string => `
    <div class="row">
        <div class="col text-right">
            <span class="close" data-role="pm-popup-close"><i class="icon icon-close-sign icon-ff"></i></span>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="title">PASSMEDIA</div>
            <div class="subtitle">Un email vous a été envoyé à l'adresse suivante</div>
            <p class="mb-3">${data.email}</p>
        </div>
    </div>
`;

let popupInvoker = {
    login: renderLoginPopup,
    verifyEmail: renderVerifyEmailPopup,
    feedback: renderFeedbackPopup
};

export let renderer = {
    draw: function(name, args) {
        if (name in popupInvoker) {
            return popupInvoker[name].apply(popupInvoker, [].slice.call(arguments, 1));
        }
        return false;
    }
};

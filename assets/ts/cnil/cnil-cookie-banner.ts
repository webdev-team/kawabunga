import {cnilCookie, ALL_ON} from './cnil-cookie';

export type OkCallback = () => void;
export interface BannerOptions {
    $container: any;
    html: string;
}

export namespace cnilCookieBanner {
    let options: BannerOptions;

    export function injectBanner2(options: BannerOptions, cb?: OkCallback) {

        if (!cnilCookie.isActive()) {
            return;
        }

        options.$container.prepend(options.html);

        let $banner = options.$container.select('[data-role=cnil-banner]');

        $banner.select('[data-action=accept]').on('click', e => {
            let category = e.target.getAttribute('data-category');
            if (category) {
                cnilCookie.setCategory(category, true);
            } else {
                cnilCookie.writeValues(ALL_ON);
            }

            $banner.css('display', 'none');

            if (cb) {
                cb();
            }
        });
    }

    export function hide(): void {
        options.$container.select('[data-role=cnil-banner]').css('display', 'none');
    }
}
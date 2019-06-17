import {cnilCookie, ALL_ON, BANNER_ACTION} from './cnil-cookie';

export type OkCallback = () => void;
export interface BannerOptions {
    $container: any;
    html: string;
}

export namespace cnilCookieBanner {
    let $mainBanner: any;

    export function init(options: BannerOptions, cb?: OkCallback) {

        if (cnilCookie.isActive()) {
            injectBanner(options, cb);
            $mainBanner = options.$container.select('[data-role=cnil-banner]');
        }
    }

    export function injectBanner(options: BannerOptions, cb?: OkCallback) {

        prependHTML(options.$container[0], options.html);

        let $banner = options.$container.select('[data-role=cnil-banner]');

        $banner.select('[data-action=accept]').on('click', e => {
            let category = e.target.getAttribute('data-category');

            if (category) {
                cnilCookie.setCategory(category, true, BANNER_ACTION);
            } else {
                cnilCookie.writeValues(ALL_ON, BANNER_ACTION);
            }

            if ($banner) {
                $banner.css('display', 'none');
            }

            if (cb) {
                cb();
            }
        });

        $banner.select('[data-action=close]').on('click', e => {
            if ($banner) {
                $banner.css('display', 'none');
            }
        });
    }

    export function hideMainBanner(): void {
        if ($mainBanner) {
            $mainBanner.css('display', 'none');
        }
    }

    export function showMainBanner(): void {
        if ($mainBanner) {
            $mainBanner.css('display', '');
        }
    }

    function prependHTML(elParent, html): void {
        if (!elParent) {
            return;
        }

        let elChild = document.createElement('div');
        elChild.innerHTML = html;

        elParent.insertBefore(elChild, elParent.firstChild);
    }
}
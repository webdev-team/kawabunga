import * as scriptLoader from "../../js/utils/script-loader";
import * as $ from '../../js/utils/dom';

export let init = function() {
    // loads ligatus, yahoo gemini... using data-role="load-script" selector
    scriptLoader.getScriptsToLoad().forEach(scriptLoader.ensureLoaded);

    $('.js-async').forEach(function(item) {
        let type = item.getAttribute('data-type');
        let url = item.getAttribute('data-src');
        debugger;

        if (type == "ligatus-script" && url) {
            scriptLoader.ensureLoaded(url)
        }
    });
};

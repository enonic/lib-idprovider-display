var portalLib = require('/lib/xp/portal');
var mustacheLib = require('/lib/xp/mustache');

exports.render = function (params) {

    params.assetUrl = portalLib.assetUrl({path: "/"});
    params.backgroundStyleUrl = generateBackgroundStyleUrl(params.theme);
    params.colorStyleUrl = generateColorStyleUrl(params.theme);

    var view = resolve('page.html');
    return mustacheLib.render(view, params);
};

function generateBackgroundStyleUrl(theme) {
    var stylePath = "themes/" + theme.split('-', 1)[0] + "-theme.css";
    return portalLib.assetUrl({path: stylePath});
}

function generateColorStyleUrl(theme) {
    var stylePath = "themes/" + theme.split('-', 2)[1] + "-theme.css";
    return portalLib.assetUrl({path: stylePath});
}
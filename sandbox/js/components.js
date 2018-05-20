
var Toaster = require('../../assets/ts/widget/Toaster.es6').default;

document.getElementById('toaster-show-button').addEventListener('click', function() {
    new Toaster('Un joli toaster').show();
});
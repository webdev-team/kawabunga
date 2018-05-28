
var Toaster = require('../../assets/js/widget/Toaster.js').default;

document.getElementById('toaster-show-button').addEventListener('click', function() {
    new Toaster('Un joli toaster').show();
});
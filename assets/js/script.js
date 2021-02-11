$(document).ready(function() {
    $('.sidenav').sidenav();
    $('.tabs').tabs();

    const currentSectionName = $("h3.current-section");

    function init() {
        currentSectionName.text("Web Developer, Educator, and Musician");
    }

    init();
})
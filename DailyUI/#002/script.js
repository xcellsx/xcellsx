function openCity (evt, cityName) {
    var i , tabcontent , tablinks;

    // Get all elements with class tabcontent and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for ( i = 0; i < tabcontent.length; i++ ) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class tablinks and remove the class tablinks
    tablinks = document.getElementsByClassName("tablinks");
    for ( i = 0; i < tablinks.length; i++ ) {
        tabcontent[i].className = tablinks[i].className.replace("active", "");
    }

    // Show current tab and add active class to that tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += "active";
}
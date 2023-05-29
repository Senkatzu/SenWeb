function changeTab(event, tabName) {
    event.preventDefault();
    
    // Remove active class from all tabs
    var tabs = document.getElementsByClassName('navbar')[0].getElementsByTagName('a');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }
    
    // Add active class to the clicked tab
    event.target.classList.add('active');
    
    // Add a class to the body to trigger the transition
    document.body.classList.add('tab-transition');
    
    // Set a timeout to remove the transition class after the animation is complete
    setTimeout(function() {
        document.body.classList.remove('tab-transition');
    }, 500);
    
    // Redirect to the corresponding page
    setTimeout(function() {
        window.location.href = tabName + '.html';
    }, 200);
}
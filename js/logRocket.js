$( document ).ready(function() {
    LogRocket.init('1fena1/ranger-baldwin-poc');
    LogRocket.identify('123456', {
        name: 'Patrick Baldwin',
        email: 'pbaldwi3@gmail.com',
      });
});

function submitRanger(){
    $("#btn-found").text("Thanks!")
}
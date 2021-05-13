$( document ).ready(function() {
    LogRocket.init('1fena1/ranger-baldwin-poc', {
        network: {
          isEnabled: true,
        },
        release: '0.3.0',});
    LogRocket.identify('123456', {
        name: 'Patrick Baldwin',
        email: 'pbaldwi3@gmail.com',
      });
});

function submit1(){
    $("#btn-found1").text("Completed!")
}

function submit2(){
    $("#btn-found2").text("Completed!")
    newErrorIsNotDefined;
}

function submitError1(){
    console.log("Wow, there was just a massive error from an allocation!")
    newErrorIsNotDefined;
}

function submitError2(){
    let t = 5/0;
    console.log("Wow, there was just a massive error from a batch creation!")
    batch;
}
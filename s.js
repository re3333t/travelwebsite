// ======================
// Home Page Button
// ======================

function explore(){

    alert("Start exploring the world!");

}



// ======================
// Contact Form
// ======================

const contactForm = document.getElementById("contactForm");


if(contactForm){

    contactForm.addEventListener("submit", function(event){

        event.preventDefault();


        let name =
        document.getElementById("name").value;


        let email =
        document.getElementById("email").value;


        let destination =
        document.getElementById("destination").value;


        let message =
        document.getElementById("message").value;



        document.getElementById("contactResult").innerHTML =
        "Thank you " + name +
        "! Your travel request for " +
        destination +
        " has been received.";



        console.log({

            Name:name,
            Email:email,
            Destination:destination,
            Message:message

        });



        contactForm.reset();


    });


}






// ======================
// Gallery Video Controls
// ======================

function playVideo(videoID){

    let video =
    document.getElementById(videoID);


    if(video){

        video.play();

    }

}



function stopVideo(videoID){

    let video =
    document.getElementById(videoID);


    if(video){

        video.pause();

    }

}






// ======================
// Image Click Viewer
// ======================

function showImage(image){

    alert(
        "Viewing: " + image
    );

}






// ======================
// Page Load Message
// ======================

window.onload = function(){

    console.log(
        "Travel Explorer website loaded"
    );

};



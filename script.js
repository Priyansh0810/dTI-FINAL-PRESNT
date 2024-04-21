async function sendMsg(e){
    // e.preventDefault();
    // const form = document.querySelector('.booking-form-box'),
    // const destination = document.querySelector('.destination');
    // const buses = document.querySelector('.buses');
    // const number_pass = document.querySelector('.number_pass');
    // const email = document.querySelector('.email');
    
    await Email.send({
        SecureToken : "e64185d8-a261-4757-aa79-7b1b22639d2d",
        To : document.getElementById("email").value,
        From : "priyansh0811@gmail.com",
        Subject : "payment approved",
        Body : "Hello, your ticket is booked for number of Passengers "
    }).then(
      message => alert(message)
    ).catch((error) => 
        console.log(error)
    );
}

function showImage() {
    var imageDiv = document.getElementById("image-container");
    var computedStyle = window.getComputedStyle(imageDiv); // Get the computed style
    console.log("clicked", computedStyle.display);
    if (computedStyle.display === "none") {
        imageDiv.style.display = "block";
    } else {
        imageDiv.style.display = "none";
    }
}



const submitbutton = document.querySelector('.btn2');
submitbutton.addEventListener('click', async (event) => {
    event.preventDefault();
    console.log("clicked");
    await sendMsg(event); 
    // window.location.href = 'index4.html'; 
});

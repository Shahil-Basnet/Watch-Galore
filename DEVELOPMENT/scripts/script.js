function displayCV(memberId) {
    // Hide all iframes
    const iframes = document.querySelectorAll("iframe");
    const head = document.getElementById("head");
    let anyIframeVisible = false;

    iframes.forEach(iframe => {
        if (iframe.id === memberId) {
            // Toggle the selected iframe
            if (iframe.style.display === "none" || iframe.style.display === "") {
                iframe.style.display = "block";
                if (head) {
                    head.style.display = "block";
                }
                iframe.scrollIntoView({ behavior: "smooth", block: "start" });
                anyIframeVisible = true;
            } else {
                iframe.style.display = "none";
                if (head) {
                    head.style.display = "none";
                }
            }
        } else {
            iframe.style.display = "none";
        }
    });

    // Hide the heading if no iframe is visible
    if (!anyIframeVisible) {
        head.style.display = "none";
    }
}
function validateForm() {
    // Get form fields
    var firstName = document.getElementById('firstName').value.trim();//.trim() removes spaces
    var lastName = document.getElementById('lastName').value.trim();
    var email = document.getElementById('email').value.trim();
    var mobile = document.getElementById('mobile').value.trim();
    var message = document.getElementById('message').value.trim();
    var nameRegex = /^[A-Za-z]+$/; //This insures only letters(uppercase and lowercase) is allowed
    // Individual field validation
    if (firstName.length==0) {
        alert('Please enter your first name.');
        document.getElementById('firstName').focus();//focus() focuses on which form the user hasn't filled up
        return false; // Stop form submission
    }
    //insures the first name doesnt have any numbers or spaces
    if (!nameRegex.test(firstName)) {
        alert('First name should not contain numbers.');
        document.getElementById('firstName').focus();
        return false;
    }
    //lastname validation
    if (lastName.length==0) {
        alert('Please enter your last name.');
        document.getElementById('lastName').focus();
        return false; // Stop form submission
    }
    if (!nameRegex.test(lastName)) {
        alert('First name should not contain numbers.');
        document.getElementById('lastName').focus();
        return false;
    }
    //email validation
    if (email.length==0) {
        alert('Please enter your email.');
        document.getElementById('email').focus();
        return false; // Stop form submission
    }
    // Mobile number validation 
    if (mobile.length !== 10 || isNaN(mobile)) {
        alert('Please enter a valid mobile number (10 digits).');
        document.getElementById('mobile').focus();
        return false; // Stop form submission
    }
    if (message.length==0) {
        alert('Please enter your message.');
        document.getElementById('message').focus();
        return false; // Stop form submission
    }
    // If all fields are valid
    alert('Form submitted successfully!');
    return true; // Allow form submission
}
function reviewToggle(){// function to toggle review box
    var box = document.getElementById('toggle');//gets the whole review section
    var btn = document.getElementById('rev_button');//gets the "Reviews()" span
    btn.addEventListener('click',toggle())
    function toggle(){
        box.classList.toggle('hidden');//adds or removes 'hidden' class
    }

}
function validateReview(){//function to validate review 
    var review = document.getElementById("message").value.trim();
    if(review.length==0){
        alert("Please enter a review"); 
        return false;
        }
    alert("Review sent successfully")
    return true;
}

function addToCart(){
    alert("Added to cart");
}
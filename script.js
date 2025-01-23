        // When the user scrolls the page, execute stickyNav
        window.onscroll = function() {
        stickyNav();
        }

        // Get the navbar
        var navigationBar = document.getElementById("navigationBar");

        // Get the offset position of the navbar
        var sticky = navigationBar.offsetTop;

        // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
        function stickyNav() {
          if (window.pageYOffset >= sticky) {
            navigationBar.classList.add("sticky");
          } else {
            navigationBar.classList.remove("sticky");
          }
        }


    //the skeleton on the doctor object.
    class Doctor {
        constructor(id, medicalDegree, firstName, lastName, qualifications, speciality, photoId) {
            if (id <= 0) {
                throw new Error("ID number is less or equal to 0");
            } else {
                this.id = id;
                this.medicalDegree = medicalDegree;
                this.firstName = firstName;
                this.lastName = lastName;
                this.qualifications = qualifications;
                this.speciality = speciality;
                this.photoId = photoId;
            }
        }
    }

    //10 doctor objects.
    const doctor1 = new Doctor (1234,  "Dr",  "Sally",  "Carve", "MD, FRACS", "General Surgery", "id-sc");
    const doctor2 = new Doctor (1001,  "Dr",  "Simon",  "Pureau", "MD, FNHAM, CCDS", "Cardiology", "id-sp");
    const doctor3 = new Doctor (2197,  "Dr",  "Jonathan",  "Lives", "MD, FAsCC", "Neurology", "id-jl");
    const doctor4 = new Doctor (1111,  "Dr",  "Nathan",  "Smith", "DwSI",  "Orthodontist", "id-ns");
    const doctor5 = new Doctor (1222,  "Dr",  "Natasha",  "Fahim", "MD, ACD, ASCD", "Dermatology", "id-nf");
    const doctor6 = new Doctor (1333,  "Dr",  "Tom",  "Richardson", "MD, FRACS", "General Surgery", "id-tr");
    const doctor7 = new Doctor (1324,  "Dr",  "Fabian",  "Ross", "MD, FNHAM, CCDS", "Cardiology", "id-fr");
    const doctor8 = new Doctor (1442,  "Dr",  "Linda",  "Liao", "MD, FAsCC", "Neurology", "id-ll");
    const doctor9 = new Doctor (4221,  "Dr",  "Azure",  "Tyrique", "MD, DwSI", "Orthodontist", "id-at");
    const doctor10 = new Doctor (8612,  "Dr",  "Ziynet",  "Mongkut", "MD, FRACS", "General Surgery", "id-zm");

    //array of the 10 doctor objects
    const doctorArray = [doctor1, doctor2, doctor3, doctor4, doctor5, doctor6, doctor7, doctor8, doctor9, doctor10];


    /**
    function called displayDoctors. Has a for loop to loop through an array (doctorArray) by having an index called
    doctor. Every loop prints out a doctor to the page (plus some extra text) using get .element -> innerHTML. Aka DOM
    manipulation. Also made every image become a hyperlink.
    **/
    function displayDoctors() {
        for(const doctor of doctorArray){
            //console.log(doctor);  //not needed for assignment.

            const doctorsPara = document.getElementById("sectionThree");    //getting a certain element within the document and casting it to doctorPara.

            doctorsPara.innerHTML += "<div class = 'card'>" +
            "<a href='makeanappointment.html'><img src='images/" + doctor.photoId + ".jpg'></a>" +
            "<h3>" + doctor.medicalDegree + " " + doctor.firstName + " " + doctor.lastName + "</h3>" +
            "<p>" + "ID: " + doctor.id + "</p>" +
            "<p>" + doctor.qualifications +
            "</p>" + "<p>" + doctor.speciality + "</p>" +
            "</div>";
        }
    }

    //calling my method called displayDoctors() when webpage loads
    window.onload = displayDoctors;


    /**
    using the RegExp Object so I can specify my own set of special characters (that i will check for in my validations)...
    within my validateForm function. (This was technically unnecessary as assignment did not ask for this type of special
    character validation/check. But wanted to try for understanding for the email validation.... which was too complicated at this time.)
    **/
    let charsExcluded = /[\<\/\\!@#$%^&*()_+={}[]|>?]/g;

    /**
    function called validateForm. Checking if all the forms validations with messages depending on user input.
    **/
    function validateForm() {
        //assigning a value (the name part of inquiryForm from the DOM) for ease of usability and calling it checkName
        let checkName = document.forms["inquiryForm"]["inquiryName"].value;
        //assigning a value (the email part of inquiryForm from the DOM) for ease of usability and calling it checkMessage
        let checkEmail = document.forms["inquiryForm"]["email"].value;
        //assigning a value (the phone number part of inquiryForm from the DOM) for ease of usability and calling it checkPhNum
        let checkPhoneNum = document.forms["inquiryForm"]["contactNumber"].value;
        //assigning a value (the message part of inquiryForm from the DOM) for ease of usability and calling it checkMessage
        let checkMessage = document.forms["inquiryForm"]["message"].value;

        //getting different elements within the document and casting them so I can designate what goes where within the document/when i manipulate the DOM.
        const nameErr = document.getElementById("nameError");
        const emailErr = document.getElementById("emailError");
        const contactErr = document.getElementById("contactError");
        const messageErr = document.getElementById("messageError");

        //getting different elements within the document and casting them so I can designate what goes where within the document/when i manipulate the DOM.
        const submitMessage = document.getElementById("formSubmittedMessage");
        const getInquiryName = document.forms["inquiryForm"]["inquiryName"].value; //this can also be written like: const getInquiryName = document.getElementById("inquiryName").value;

        //Clear the error messages so they don't pile up (especially when the user has fixed what they did wrong)).
        nameErr.textContent = "";
        emailErr.textContent = "";
        contactErr.textContent = "";
        messageErr.textContent = "";

        //declaring a variable called isFormValid and assigning it to be true.
        let isFormValid = true;


        //checking if the name is empty with if statement
        if (checkName == "" ) {
            nameErr.innerHTML += "Please add a name. "; //DOM manipulation. Outputs a message to the user if user input doesn't match the validation/if statement.
            isFormValid = false;    //assigning/calling isFormValid to be false
        } else if (/\d/g.test(checkName)) {          //checking if there are any numbers in the name

            nameErr.innerHTML += "Name cannot contain a number. ";  //DOM manipulation. Outputs a message to the user if user input doesn't match the validation/if statement.
            isFormValid = false;    //assigning/calling isFormValid to be false
        } else if (charsExcluded.test(checkName)) {         //checking if there are special characters (that were defined in charsExcluded) in the name
            nameErr.innerHTML += "Name cannot contain a special character. ";
            isFormValid = false;    //assigning/calling isFormValid to be false
        } else {
            //happy message here??
        }


        //checking if the email is empty with if statement.
        if (checkEmail == "") {
            emailErr.innerHTML += "Email cannot be empty. ";    //DOM manipulation. Outputs a message to the user if user input doesn't match the validation/if statement.
            isFormValid = false;    //assigning/calling isFormValid to be false
        } else if ((!checkEmail.includes("@")) || (checkEmail.length < 3)) {        //checking if the email contains an @ and that the character length is greater than 3... should have done better validation. ran out of time.
            emailErr.innerHTML += "Please enter a valid email address. ";   //DOM manipulation. Outputs a message to the user if user input doesn't match the validation/if statement.
            isFormValid = false;    //assigning/calling isFormValid to be false
        } else {
            //happy message here??
        }


        //checking if the contact number is NOT empty (makes it optional). If it's not empty then the nested loops do validation checks with if statements. Has 2 inner if statements if there is user input.
        if (!checkPhoneNum == "")  {
            //checking if there are any other characters that aren't a numeral in the contact number with inner if statement
            if (!/\d/.test(checkPhoneNum))  {
                contactErr.innerHTML += "Contact number must contain only numerals. ";  //DOM manipulation. Outputs a message to the user if user input doesn't match the validation/if statement.
                isFormValid = false;    //assigning/calling isFormValid to be false
            }
            //checking if the contact number is between 8 and 15 characters with inner if statement.
            if (checkPhoneNum.length < 8 || checkPhoneNum.length > 15)  {
                contactErr.innerHTML += "Must have 8 - 15 characters. ";    //DOM manipulation. Outputs a message to the user if user input doesn't match the validation/if statement.
                isFormValid = false;    //assigning/calling isFormValid to be false
            }
            //happy message here!??
        }

        //checking if the message is empty or if it's greater than 500 characters with if statement
        if ((checkMessage == "") || (checkMessage.length > 500)) {
            //alert("Message must have between 1-500 characters");      //this is a window popup. Not needed for the assignment as assignment needed the DOM to be manipulated.
            messageErr.innerHTML += "Message must be written. 500 max characters. "; //DOM manipulation. Outputs a message to the user if user input doesn't match the validation/if statement.
            isFormValid = false;    //assigning/calling isFormValid to be false
        } else {
            //happy message here??
        }

        //checking if the form is true or not with if statement. If there are no false validations then this gets called.
        if (isFormValid) {
            submitMessage.innerHTML += "Dear " + getInquiryName + ", thank you for your inquiry. One of our team members will be in touch with you soon. ";    //DOM manipulation. Outputs a message to the user if user input doesn't match the validation/if statement.
        }

        return isFormValid;     //return statement for if everything is true/gets called if everything is true
    }




//retrieving an HTML element called inquiryForm and assigning it to the variable called getInquiryForm for ease.
let getInquiryForm = document.getElementById("inquiryForm");

    //adding an event lister so our events (onfocus and onblur) can function
    getInquiryForm.addEventListener("focus", focusEventFunction, true);
    getInquiryForm.addEventListener("blur", blurEventFunction, true);
    //function called blurEventFunction to call my blur event called blurEventFunction
    function blurEventFunction(){
        document.getElementById("inquiryName").style.borderColor = "#616263";    //getting an element within the document and changing the colour of the borders
        document.getElementById("email").style.borderColor = "#616263";     //getting an element within the document and changing the colour of the borders
        document.getElementById("contactNumber").style.borderColor = "#616263";     //getting an element within the document and changing the colour of the borders
        document.getElementById("inquiryType").style.borderColor = "#616263";       //getting an element within the document and changing the colour of the borders
        document.getElementById("message").style.borderColor = "#616263";       //getting an element within the document and changing the colour of the borders
    }


    //focus event done with if statements within the function called focusEventFunction
    function focusEventFunction(){
        if (document.activeElement.id == "inquiryName"){    //checks if document element is in focus or not (same as other else if statements for the different document elements)).
            document.getElementById("inquiryName").style.borderColor = "#3483eb";   //if true then gets the element and changes the colour (same as other else if statements for the different document elements))
        } else if (document.activeElement.id == "email") {
            document.getElementById("email").style.borderColor = "#3483eb";
        } else if (document.activeElement.id == "contactNumber") {
            document.getElementById("contactNumber").style.borderColor = "#3483eb";
        } else if (document.activeElement.id == "inquiryType") {
            document.getElementById("inquiryType").style.borderColor = "#3483eb";
        } else if (document.activeElement.id == "message") {
            document.getElementById("message").style.borderColor = "#3483eb";
        }
    }






    //CANT FIGURE OUT LOCAL STORAGEEEE (all of the below section is wrong)).... ran out of time :(
    var doctor, speciality;

    if (typeof(Storage) !== 'undefined') {
        localStorage.setItem('doctor', 'Sally Carve');
        localStorage.setItem('speciality', 'General Surgery');
    } else {
        doctor = "Sally Carve";
    }

    if (localStorage.remember == 'true') {
        document.getElementById('doctor').value = localStorage.doctorAppointment;
        document.getElementById('speciality').value = localStorage.specialityType;
    }


    if (typeof(Storage) !== 'undefined') {
        localStorage.setItem('doctor', 'Simon Pureau');
        localStorage.setItem('speciality', 'Cardiology');
    } else {
        doctor = "Simon Pureau";
    }

    if (localStorage.remember == 'true') {
        document.getElementById('doctor').value = localStorage.doctorAppointment;
        document.getElementById('speciality').value = localStorage.specialityType;
    }

    //1234,  "Dr",  "Sally",  "Carve", "MD, FRACS",  "General Surgery", "id-sc"

    //id, medicalDegree, firstName, lastName, qualifications, speciality, photoId
    //1001,  "Dr",  "Simon",  "Pureau", "MD, FNHAM, CCDS", "Cardiology", "id-sp");



////dont need this. tester
//    function changeTextColor() {
//        var textElement = document.getElementById("textToChange");
//        textElement.style.color = "red"; // Change this to the desired color
//    }




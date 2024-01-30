// const form=document.querySelector("form");
// const fullName=document.getElementById("#name");
// const email=document.getElementById("#email");
// const phone=document.getElementById("#phone");
// const subject=document.getElementById("#subject");
// const mess=document.getElementById("#message");


// function sendEmail(){
//     const bodyMessage=`Full Name:${fullname.value}<br> Email:${email.value}<br> Phone:${phone.value}<br> Subject:${subject.value}<br> Message:${mess.value}`;

//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "abhijeetanand72@gmail.com",
//         Password : "5CAFACAAC0BA4310017C14E880D7492DFC27",
//         To : 'abhijeetanand72@gmail.com',
//         From : "abhijeetanand72@gmail.com",
//         Subject : subject.value ,
//         Body : bodyMessage
//     }).then(
//       message => {
//         if(message=="OK"){
//             Swal.fire({
//                 title: "Success",
//                 text: "Message sent",
//                 icon: "SUCCESS"
//             });
//         }
//       }
//     );
// }

// function checkInputs(){
//     const items=document.querySelectorAll(".item");

//     for (const item of items) {
//         if(item.value == ""){
//             item.classList.add("error");
//             item.parentElement.classList.add("error");
//         }

//         if(items[1].value !=""){
//             checkEmail();
//         }
//         items[1].addEventListener("keyup",()=>{
//             checkEmail();
//         });

//         item.addEventListener("keyup",()=>{
//             if(item.value != ""){
//                 item.classList.remove("error");
//                 item.parentElement.classList.remove("error");
//             }
//             else{
//                 item.classList.add("error");
//                 item.parentElement.classList.add("error");
//             }
//         });
//     }
// }

// function checkEmail(){
//     const emailRegx= /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
//     const errorTxtEmail=document.querySelectorAll(".error-txt .email");

//     if(!email.value.match(emailRegx)){
//         email.classList.add("error");
//         email.parentElement.classList.add("error");

//         if (email.value != "") {
//             errorTxtEmail.innerText="Enter a valid email id"
//         }else{
//             errorTxtEmail.innerText="Email can't be blank"
//         }
//     }
//     else{
//         email.classList.remove("error");
//         email.parentElement.classList.remove("error");
//     }
// }

// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     checkInputs();
//     if (!fullName.classList.contains("error") &&!email.classList.contains("error") &&!phone.classList.contains("error") &&!subject.classList.contains("error") &&!mess.classList.contains("error")) {
//         console.log("OK");
//         sendEmail();
//         form.reset();
//         return false;
//     }

//     // sendEmail();
// });



const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full Name:${fullName.value}<br> Email:${email.value}<br> Phone:${phone.value}<br> Subject:${subject.value}<br> Message:${mess.value}`;

    Email.send({
        SecureToken:"9afea709-612b-4f88-bf7e-ef4e8b1be1bc",
        
        To: 'abhijeetanand72@gmail.com',
        From: "abhijeetanand72@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        message => {
            if (message.includes("OK")) {
                Swal.fire({
                    title: "Success",
                    text: "Message sent",
                    icon: "success"
                });
            }
        }
    );
}

function checkInputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }
    }
}

function checkEmail() {
    const emailRegx = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail = document.querySelectorAll(".error-txt .email")[0];

    if (!email.value.match(emailRegx)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if (email.value != "") {
            errorTxtEmail.innerText = "Enter a valid email id";
        } else {
            errorTxtEmail.innerText = "Email can't be blank";
        }
    } else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
    checkEmail();
    
    if (!fullName.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !subject.classList.contains("error") && !mess.classList.contains("error")) {
        console.log("OK");
        sendEmail();
        form.reset();
        return false;
    }
});

container = document.querySelector(".container"),
pwShowHide = document.querySelectorAll(".showhidepw"),
pwFields = document.querySelectorAll(".password"),
signUp = document.querySelector(".signup-link"),

//js code to show and hide password and change icon

pwShowHide.forEach(eyeIcon => {
	eyeIcon.addEventListner("click", ()=>{
		pwFields.forEach(pwField =>{
		if (pwField.type === "password") {
			pwField.type ="text";
			pwShowHide.forEach(Icon =>{
				Icon.classList.replace("fa-eye-slash, "fa-eye");
			})
		}else{
			pwField.type = "password");
			pwShowHide.forEach(icon =>{
				icon.classList.replace("fa-eye, "fa-eye-slash")
			})
		}
	})
	})
});

//js code to appear signup Form

signUp.addEventListner("click", function () {
	container.classList.add("active");
});

function signUpValidation() {
	let name = document.forms.signUp.name.value;
	let email = document.forms.signUpForm.email.value;
	let password = document.forms.signUpForm.password.value;
	let confirmpsw = document.forms.signUpForm.confirmpsw.value;
	let regEmail =/^



























			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
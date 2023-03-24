const refs = {
	form: document.querySelector(`.login-form`),
};

const submitHandler = event => {
	event.preventDefault();
	
	const {
		elements: { email, password },
	} = event.currentTarget;

	if (email.value === "" || password.value === "") {
		return console.log("Всі поля мають бути заповнені!");
	}

	const objectEl = {
		email: email.value,
		password: password.value,
	};

	console.log(objectEl);

	event.currentTarget.reset();
};

refs.form.addEventListener("submit", submitHandler);

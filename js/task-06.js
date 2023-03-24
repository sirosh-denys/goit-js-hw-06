const refs = {
	inputField: document.querySelector(`#validation-input`),
};

const inputHandler = event => {
	const limitOfDigits = Number(refs.inputField.getAttribute("data-length"));

	if (event.target.value.length === limitOfDigits) {
		refs.inputField.classList.add(`valid`);
	} else {
		refs.inputField.classList.add(`invalid`);
	}
};

refs.inputField.addEventListener(`blur`, inputHandler);

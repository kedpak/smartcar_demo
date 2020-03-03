function addUserValidate(formField, input, body) {
    switch(formField) {
        case 'email':
            if (input.length < body[0].min || input.length > body[0].max) return 'Email must be bewteen 3 and 24 characters';
            else return '';
        case 'full-name':
            if (input.length < 1) return 'Full name is required';
            return '';
        case 'phone':
            const reg = new RegExp('^'+body[2].pattern+'$');
            if (reg.test(input) === false) return 'Invalid phone format. Must fit the following pattern 000-000-0000. Numbers only';
            return '';
        default:
            return;
    }
}

export {addUserValidate};

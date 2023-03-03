// **Password**
//- Password has to be at least 8 characters long.
//- Password should contain at least one lowercase and one uppercase letter.
//- Password should contain at least one number. 

const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    return passwordRegex.test(password)
}

module.exports = validatePassword

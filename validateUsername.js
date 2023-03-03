//**Username**

//- Username can be 6-30 characters long.
//- Username can contain letters, numbers, and periods. 

const validateUsername = (username) => {
    const usernameRegex = /^[a-zA-Z0-9.]{6,30}$/
    return usernameRegex.test(username)
}

module.exports = validateUsername
"use server"

type User = {
    username: string,
    email: string,
    password: string,
    confirm: string,
}

type FieldError = {
    error?: string,
    fields?: { 
        username: string, 
        email: string,
    },
}

const userSpecialRegex = /^[A-Za-z0-9]+$/
const passUpperRegex = /[A-Z]/
const passLowerRegex = /[a-z]/
const passSpecialRegex = /^[A-Za-z0-9!#@$%&*?]+$/

export async function signupTests(user: User): Promise<boolean | FieldError>{
    if(user.password !== user.confirm){
        return {error: "Passwords do not match", fields: {username: user.username, email: user.email}}
    }

    if(user.username.length < 5 || user.username.length > 32){
        return {error: "Invalid username, please make sure your username is between 5-32 characters", fields: {username: user.username, email: user.email}}
    }

    if(user.email.length < 6){
        return {error: "Invalid email, please make sure your email is over 6 characters", fields: {username: user.username, email: user.email}}
    }

    if(user.email.length > 255){
        return {error: "Invalid email, please make sure your email is under 267 characters", fields: {username: user.username, email: user.email}}
    }

    if(user.password.length < 10){
        return {error: "Invalid password, please make sure your password is over 10 characters", fields: {username: user.username, email: user.email}}
    }

    if(userSpecialRegex.test(user.username)){
        return {error: "Invalid username, please make sure your username contains only letters and numbers", fields: {username: user.username, email: user.email}}
    }

    if(passUpperRegex.test(user.password)){
        return {error: "Invalid password, please make sure your username has an uppercase letter", fields: {username: user.username, email: user.email}}
    }

    if(passLowerRegex.test(user.password)){
        return {error: "Invalid password, please make sure your password has an lowercase letter", fields: {username: user.username, email: user.email}}
    }

    if(passSpecialRegex.test(user.password)){
        return {error: "Invalid password, please make sure your password contains only letters, numbers, and the following special characters: ! ? @ # $ % & *", fields: {username: user.username, email: user.email}}
    }
    return true
}
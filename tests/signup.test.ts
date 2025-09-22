import "server-only"

import pool from "~/src/lib/db"

type User = {
    username: string,
    email: string,
    password: string,
    confirm: string,
}

type SignupFieldError = {
    error?: string,
    fields?: { 
        username: string, 
        email: string,
    },
}
1
const userSpecialRegex = /^[A-Za-z0-9]+$/
const passUpperRegex = /[A-Z]/
const passLowerRegex = /[a-z]/
const passSpecialRegex = /^[A-Za-z0-9!#@$%&*?]+$/

export async function signupTests(user: User): Promise<boolean | SignupFieldError>{
    const userResult = await pool.query('SELECT username FROM users WHERE username = ($1) ', [user.username])
    const userCheck = userResult.rows.length > 0 ? userResult.rows[0].username : undefined
    console.log(userCheck)
    if(userCheck === user.username){
        return {error: "Username taken", fields: {username: user.username, email: user.email}}
    }

    const emailResult = await pool.query('SELECT email FROM users WHERE email = ($1) ', [user.email])
    const emailCheck = emailResult.rows.length > 0 ? emailResult.rows[0].email : undefined
    console.log(emailCheck)
    if(emailCheck === user.email){
        return {error: "Email is already associated with an account", fields: {username: user.username, email: user.email}}
    }

    if(user.password !== user.confirm){
        return {error: "Passwords do not match", fields: {username: user.username, email: user.email}}
    }

    if(user.username.length < 5 || user.username.length > 32){
        return {error: "Invalid username, please make sure your username is between 5-32 characters in length", fields: {username: user.username, email: user.email}}
    }

    if(user.email.length < 5){
        return {error: "Invalid email, please input a valid email", fields: {username: user.username, email: user.email}}
    }

    if(user.email.length > 255){
        return {error: "Invalid email, please input a valid email", fields: {username: user.username, email: user.email}}
    }

    if(user.password.length < 10){
        return {error: "Invalid password, please make sure your password is over 10 characters", fields: {username: user.username, email: user.email}}
    }

    if(!userSpecialRegex.test(user.username)){
        return {error: "Invalid username, please make sure your username contains only letters and numbers", fields: {username: user.username, email: user.email}}
    }

    if(!passUpperRegex.test(user.password)){
        return {error: "Invalid password, please make sure your password has an uppercase letter", fields: {username: user.username, email: user.email}}
    }

    if(!passLowerRegex.test(user.password)){
        return {error: "Invalid password, please make sure your password has an lowercase letter", fields: {username: user.username, email: user.email}}
    }

    if(!passSpecialRegex.test(user.password)){
        return {error: "Invalid password, please make sure your password contains only letters, numbers, and the following special characters: ! ? @ # $ % & *", fields: {username: user.username, email: user.email}}
    }
    return true
}
import React, { useState } from 'react'
import axios from "axios"

import './login.css'

export const Logout = (props) => {

    function logout() {
        axios({
          method: "POST",
          url:"https://port-0-stereohunterserver-20z52flbz4onwf.gksl2.cloudtype.app/logout",
        })
        .then((response) => {
           props.removeToken()
        }).catch((error) => {
          if (error.response) {
            console.log(error.response)
            console.log(error.response.status)
            console.log(error.response.headers)
            }
        })}

    return(
        <>
            HI! {props.name}
            <button onClick={logout}> logout </button>
        </>
    )
}
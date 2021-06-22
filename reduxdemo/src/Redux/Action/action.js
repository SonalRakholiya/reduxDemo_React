import React from 'react'
import { LOGIN } from '../../Constant/Type'

export const CheckLogin = (data) => {
    return {
        type: LOGIN,
        paylod: data
    }
}
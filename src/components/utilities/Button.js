import React from 'react'
import './Button.css'

const STYLES = ['btn--primary', 'btn--outline']
const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide']
const COLOR = ['primary', 'blue', 'red', 'green']

export const Button = ({children, type, onClick, btnStyle, btnColor, btnSize}) => {
    const checkButtonStyle = STYLES.includes(btnStyle) ? btnStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(btnSize) ? btnSize : SIZES[0]
    const checkButtonColor = COLOR.includes(btnColor) ? btnColor : null

    return(
        <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`} onClick={onClick} type={type}>
            {children}
        </button>
    )
}



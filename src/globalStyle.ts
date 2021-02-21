import { createGlobalStyle } from 'styled-components'
export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Titillium Web', sans-serif;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        outline: none;
        box-shadow: none;
        color: var(--text-primary)
    }

    :root {
        --base-color : #222;
        --box-color : #333;
        --card-border-color: #434343;
        --icon : #ddd;
        --icon-active : #f2f2f2;
        --white-fade: #fff2;
        --text-primary : #fff;
        --text-secondary : #fce803;
        --red : #f33;
        --green : #3f3; 
        --blue : #33f;
        --pink : #ff40aa;
        --yellow : #ffed27;
        --purple : #7700ff;

        --action-green : #029118; 
        --action-red : #d80230; 
        --action-blue : #0282d8; 
        --action-dark-blue: #00558f;
    }
    html {
        background-color : var(--base-color)
    }
    body,#root {
        min-height: 100%;
        width:100%;
    }

    .App{
        background-color: var(--base-color);
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .container {
        margin-top: 4.43rem;
       
        /* padding-left: 25vw; */
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-gap: 2.5rem 2rem;

        /* @media(max) */
    }

    .chat {
        width: 5rem;
        height: 5rem;

        position: fixed;
        z-index: 10;
        bottom: 0;
        margin-bottom: 64px;
        right: 0;
        margin-right: 26px;

        display: flex;
        align-items: center;
        justify-content: center;
        
        border: 2px solid #A7BAFF;
        border-radius: 100%;
        transition: 0.2s;
        
        button {
            width: 100%;
            height: 100%;
            background: none;
            border-radius: 100%;
        }

        &:hover {
            opacity: 0.8;
            transform: translateY(-2px);
        }
    }

    a{
        text-decoration: none;
        color: inherit;
    }

    button {
        cursor:pointer;
        border: none;
    
    }

    ul {
        list-style:none;
    }

`

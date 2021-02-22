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
        --modal-overlay: #00000080;

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
    body::-webkit-scrollbar{
        background-color: #0000;
    }
    body::-webkit-scrollbar-thumb {
        background-color: var(--action-blue);
    }
    .App{
        background-color: var(--base-color);
        width: 100%;
        height: 100%;
        display: flex;
       padding-left: 20vw;
        justify-content: center;
        flex-direction:column;
    }

    a{
        text-decoration: none;
        color: inherit;
    }

    button {
        cursor:pointer;
        border: none;
        background-color: transparent;
    }

    ul {
        list-style:none;
    }

`

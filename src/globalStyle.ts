import {createGlobalStyle} from 'styled-components'
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
    }
    
    html,body,#root {
        height: 100%;
        width: 100%;
    }

    .App{
        background-color: var(--base-color);
        height: 100%;
    }

    a{
        text-decoration: none;
        color: inherit;
    }

    button {
        cursor:pointer;
    }

    ul {
        list-style:none;
    }

`
import { injectGlobal } from "styled-components";

injectGlobal`
    body {
      font-family: 'Roboto Slab', sans-serif;
      background: rgb(247, 247, 247);
      color: rgb(45, 86, 141);
    }

    input, textarea, select  {
      display: block;
      margin-bottom: 15px;
      margin-top: 5px;
      padding: 10px;
      border: 1px solid #cfcfcf;
      font-family: 'Roboto Slab', sans-serif;
      font-size: 16px;
      outline: none;
    }
    h1 {
      margin: 0;
    }

    button {
      cursor: pointer;
      padding: 12px;
      background: #999;
      font-family: 'Roboto Slab', sans-serif;
      font-size: 16px;
      border: none;
      outline: none;
      color: white;
      border-bottom: 2px solid #797979;
    }
    
    .displayErrors input:invalid, .displayErrors textarea:invalid, .displayErrors select:invalid {
      border-color: red;
    }
`;

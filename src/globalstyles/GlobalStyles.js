import { createGlobalStyle } from "styled-components"

export default createGlobalStyle `

html {
    
}

body {
   margin: 0;
   font-family: "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
   font-size: 0.875rem;
   font-weight: 400;
   line-height: 1.5;
   color: #212529;
   text-align: left;
   background-color: #FFF;
}


.fontSize {
   font-size: 1.2rem;
   font-weight: 600 ;
}

.fontIcon {
   margin-left: 10px;
   font-size: 22px;
}

.input-container {
  display: flex;
  width: 100%;
  margin-bottom: 15px;
}

.iconInput {
  padding: 10px;
  background: #E5E5E5;;
  color: black;
  min-width: 50px;
  text-align: center;
  font-size:15px;

}

`
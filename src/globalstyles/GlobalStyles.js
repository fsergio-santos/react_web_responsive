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
   font-weight: 700 ;
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

.show-image{
  float: left;
  margin-right: 15px;
  width: 25px;
  height: 25px;
}

.show-message {
  font-weight: 700;
	font-size: 16px;
	text-align: left;
	margin-top: 0;
	margin-bottom: 6px;
  width: 300px;
  height: 18px
}

.closebtn {
  color: white;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;
}

.closebtn:hover {
  color: black;
}



@media only screen and (max-width: 800px) {
	
	#no-more-tables table, #no-more-tables thead, #no-more-tables tbody,#no-more-tables th, #no-more-tables td, #no-more-tables tr {
	display: block;
  }

  #no-more-tables thead tr {
	position: absolute;
	top: -9999px;
	left: -9999px;
  }

  #no-more-tables tr {
	border: 1px solid #ccc;
  }
	
  #no-more-tables td {
	border: none;
	border-bottom: 1px solid #eee;
	position: relative;
	padding-left: 50%;
	white-space: normal;
	text-align: left;
  }

  #no-more-tables td:before {
	position: absolute;
	top: 6px;
	left: 6px;
	width: 45%;
	padding-right: 10px;
	white-space: nowrap;
	text-align: left;
	font-weight: bold;
  }

  #no-more-tables td:before {
	 content: attr(data-title);
   }
}

`
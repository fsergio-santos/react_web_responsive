import styled from 'styled-components';

export const MaterialHalfBg = styled.section`
  height: 100vh;
  background-color: #e7e7e7;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

  .cover {
    background-color: #009688;
    height: 50vh;
  }
`
export const AccessContent = styled.section `
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  min-height: 100vh;

  .logo{
    margin-bottom: 40px;
    font-family: "Niconne";
    color: #fff;
  }

  .logo h1 {
    font-size: 52px;
    font-weight: 400; 
  }

  .content-box{
    position: relative;
    min-width: 650px;
    min-height: 550px;
    background-color: #fff;
    -webkit-box-shadow: 0px 29px 147.5px 102.5px rgba(0, 0, 0, 0.05), 0px 29px 95px 0px rgba(0, 0, 0, 0.16);
          box-shadow: 0px 29px 147.5px 102.5px rgba(0, 0, 0, 0.05), 0px 29px 95px 0px rgba(0, 0, 0, 0.16);
    -webkit-perspective: 800px;
          perspective: 800px;
    -webkit-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;     
  }
   
  .content-box .content-head {
    margin-top: 0;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #ddd;
    text-align: center;
  }

   
  .content-box label {
      color: #666;
    font-weight: 700;
  }

.content-box .utility {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 1px;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.content-box .botao {
  border:none ;
  width:100%;
  padding:10px;
  margin-top:20px;
  font-size:1.5em;
  font-weight:900px;
  color: #ffffff;
  background-color:  #009688 ;
  text-decoration: none;
  cursor: pointer;

}


.content-box .content-form, .content-content .content-box  {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 40px;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -webkit-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
} 


@media (max-width: 500px){
  .content-box{
      position: relative;
      min-width: 420px;
      min-height: 550px;
      background-color: #fff;
      -webkit-box-shadow: 0px 29px 147.5px 102.5px rgba(0, 0, 0, 0.05), 0px 29px 95px 0px rgba(0, 0, 0, 0.16);
            box-shadow: 0px 29px 147.5px 102.5px rgba(0, 0, 0, 0.05), 0px 29px 95px 0px rgba(0, 0, 0, 0.16);
      -webkit-perspective: 800px;
            perspective: 800px;
      -webkit-transition: all 0.5s ease-in-out;
      -o-transition: all 0.5s ease-in-out;
      transition: all 0.5s ease-in-out;     
  }

}



`
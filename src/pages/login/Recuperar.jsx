import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import {MaterialHalfBg, AccessContent} from './styles'

const Recuperar = () => {
    
    let navigate = useNavigate();


    const toLogin = () => {
        navigate("/login")   
    }

    return (
        <Fragment>
          <MaterialHalfBg>
              <div className="cover"></div>
          </MaterialHalfBg>     
          <AccessContent>
                 <div className="logo">
                     <h1>Alterar Senha</h1>
                  </div> 
                  <div className="content-box">
                    <form className="content-form" >
                      <div className="row mt-4">
                        <div className="col-xs-12 col-sm-12">
                          <div className="form-group">
                              <label htmlFor="email" className="control-label fontSize">Informe o E-mail Cadastrado:</label>
                              <input className="form-control" type="text" id="email" name="email" placeholder="Email" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 mt-5">
                         <input type="button" className="botao" value="Recuperar" onClick={()=>toLogin()}/>
                      </div>
                    </form>
                  </div>
           </AccessContent>
   
        </Fragment>
    )
}

export default Recuperar;



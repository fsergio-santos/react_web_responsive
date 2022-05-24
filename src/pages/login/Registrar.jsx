import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import {MaterialHalfBg, AccessContent} from './styles'

const Registrar = () => {
    
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
                     <h1>Registrar-se</h1>1
                  </div> 
                  <div className="content-box">
                    <form className="content-form" >
                        <div className="row mt-3">
                            <div className="col-xs-12 col-sm-12">
                              <div className="form-group">
                                <label className="control-label fontSize" htmlFor="username">Nome:</label>
                                <input className="form-control" type="text" id="username" name="username"  placeholder="Nome"/>
                             </div>
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col-xs-12 col-sm-12">
                            <div className="form-group">
                                <label htmlFor="email" className="control-label fontSize">E-mail:</label>
                                <input className="form-control" type="text" id="email" name="email" placeholder="Email" />
                            </div>
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col-xs-12 col-sm-12">
                              <div className="form-group">
                                  <label htmlFor="password" className="control-label fontSize">Senha:</label>
                                  <input className="form-control" type="password" id="password" name="password"  placeholder="Password"/>
                              </div>
                          </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-xs-12 col-sm-12">
                              <div className="form-group">
                                <label className="control-label fontSize" htmlFor="confirme">Confirme Senha:</label>
                                <input className="form-control" type="text" id="confirme" name="confirme"  placeholder="Confirme a Senha"/>
                              </div>
                           </div>
                        </div>
                        <div className="col-md-12">
                            <input type="button" className="botao" value="Registrar" onClick={()=>toLogin()}/>
                        </div>
                    </form>
                  </div>
           </AccessContent>
   
        </Fragment>
    )
}

export default Registrar;



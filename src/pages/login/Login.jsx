
import React, { Fragment } from "react";
import * as FaIcons from 'react-icons/fa';
import {Link} from 'react-router-dom';
import { MaterialHalfBg, AccessContent} from './styles'

const Login = () => {
    return (
        <Fragment>
          <MaterialHalfBg>
              <div className="cover"></div>
          </MaterialHalfBg>     
          <AccessContent>
                  <div className="logo">
                      <h1>Sistema</h1>
                  </div> 
                  <div className="content-box">
                  
                    <form className="content-form" method="POST">
                        <h3 className="content-head">
                             <i style={{ fontSize: '40px' }}><FaIcons.FaUser/></i>
                             <p className="mt-3">Acessar Sistema</p>
                         </h3>
                        <div className="form-group mt-4">
                            <label htmlFor="email" className="control-label fontSize">E-mail</label>
                            <input className="form-control" type="text" id="email" name="email" placeholder="Email" />
                        </div>
                        <div className="form-group mt-4">
                            <label htmlFor="password" className="control-label fontSize">Senha</label>
                            <input className="form-control" type="password" id="password" name="password"  placeholder="Password"/>
                        </div>
                        <div className="form-group mt-4">
                            <div className="utility">
                                <p className="semibold-text mb-2 fontSize"><Link to="/recuperar" >Recuperar Senha ?</Link></p>
                                <p className="semibold-text mb-2 fontSize"><Link to="/registrar" >Registrar-se ?</Link></p>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <input type="button" className="botao" value="Acessar"/>
                        </div>
                    </form>
                  </div>
           </AccessContent>
   
        </Fragment>
    )
}

export default Login;



import React, { Fragment, useState } from "react";
import { Link } from 'react-router-dom'
import { WindowTitle, Window, WindowFooter } from "../../components/content/Content";
import * as FaIcons from 'react-icons/fa';
import { DEFAULT_IMAGEM } from "../../config/Config";
import Alert from "../../components/alert/Alert";

const InserirUsuario = () => {
    
    const [show, setShow] = useState(false)

    const onSubmitData = (e) => {
        e.preventDefault();
        setShow(!show)
    }

    return (
        <Fragment>
              <WindowTitle/>
              <div className="row">
                    <div className="col-md-12">
                        <Window>
                        {
                            show && (
                                <Alert mensagem="Registro cadastrado com sucesso!" 
                                       show={true}
                                       tipo='danger'
                                       setShow={()=>setShow(false)}/>
                            )
                        }    
                        <div className="row">    
                             <div className="col-md-4">
                                 <div className="card">
                                     <div className="card-body">
                                         <div className="d-flex flex-column align-items-center text-center">
                                            <img src={DEFAULT_IMAGEM} className="rounded-circle" width="150"/>
                                            <div className="mt-3">
                                                <button type="" className="btn btn-success btn-lg" title="Upload de foto">
                                                    <FaIcons.FaUpload/>
                                                </button>
                                                <button className="btn btn-danger btn-lg ml-4 " title="Excluir foto">
                                                    <FaIcons.FaTrash/>
                                                </button>
                                            </div>
                                        </div>
                                     </div>
                                 </div>
                             </div>
                             <div className="col-md-8">
                                <form >
                                    <div className="row mt-3">
                                        <div className="col-xs-12 col-sm-12">
                                            <div className="form-group">
                                                <label className="control-label fontSize" htmlFor="username">Nome:</label>
                                                <div className="input-container">
                                                    <i className="iconInput"><FaIcons.FaUserAlt/></i>
                                                    <input className="form-control" type="text" id="username" name="username" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-xs-12 col-sm-12">
                                            <div className="form-group">
                                                <label className="control-label fontSize" htmlFor="email">E-mail:</label>
                                                <div className="input-container">
                                                    <i className="iconInput"><FaIcons.FaEnvelope/></i>
                                                    <input className="form-control" type="text" id="email" name="email"  />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-xs-12 col-sm-12">
                                            <div className="form-group">
                                                <label className="control-label fontSize" htmlFor="password">Senha:</label>
                                                <div className="input-container">
                                                    <i className="iconInput"><FaIcons.FaLock/></i>    
                                                    <input className="form-control" type="text" id="password" name="password" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-xs-12 col-sm-12">
                                            <div className="form-group">
                                                <label className="control-label fontSize" htmlFor="confirme">Confirme Senha:</label>
                                                <div className="input-container">
                                                    <i className="iconInput"><FaIcons.FaLock/></i> 
                                                    <input className="form-control" type="text" id="confirme" name="confirme"  />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-xs-12 col-sm-12 col-md-4">
                                            <div className="form-group">
                                                <label className="control-label fontSize">Roles:</label>
                                                <button className="form-control btn btn-primary btn-lg ml-4" >
                                                   Adicionar Roles
                                                   <i className="fontIcon"><FaIcons.FaAddressCard/></i>
                                             </button> 
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <WindowFooter/>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-4 form-group">
                                        <button className="btn btn-success btn-lg form-control" onClick={(e) => onSubmitData(e)}>
                                            Salvar Cadastro
                                            <i className="fontIcon"><FaIcons.FaSave/></i>
                                        </button>
                                    </div>    
                                    <div className="col-xs-12 col-sm-12 col-md-4 form-group">    
                                        <Link to='/usuario/cancelar' type="button" className="btn btn-secondary btn-lg form-control" >
                                            Cancelar Cadastro
                                            <i className="fontIcon"><FaIcons.FaTimesCircle/></i>
                                        </Link>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        </Window>
                    </div>
                </div>
        </Fragment>
    )

}

export default InserirUsuario;
import React, { Fragment, useState } from 'react'
import checkIcon from '../../assets/icon/check.svg'
import errorIcon from '../../assets/icon/error.svg';
import infoIcon from '../../assets/icon/info.svg';
import warningIcon from '../../assets/icon/warning.svg';

const Alert = (props) => {
  const { show, mensagem, setShow, tipo } = props;
  const [showAlert, setShowAlert] = useState(true)  
  let icon; 
 
  const onCloseAlert = () => {
      setShowAlert(!showAlert)
      setShow()
  }
  
  
  if (tipo === 'success'){
     icon=checkIcon
  } else if (tipo === 'danger') {
     icon=errorIcon
  } else if (tipo === 'info') {
     icon=infoIcon 
  } else if (tipo === 'warning') {
     icon=warningIcon 
  }

  return (
    <Fragment>
        {
            show && showAlert && (
               <div className={`alert alert-${tipo} alert-dismissible fade show role='alert'`} >
                   <img src={icon} className='show-image'/>
                   <span><strong className='show-message'>{mensagem}</strong></span>
                   <span className='closebtn' onClick={()=>onCloseAlert()}>
                       X
                   </span>  
               </div>     
            )
        }

    </Fragment>
  )
}

export default Alert;

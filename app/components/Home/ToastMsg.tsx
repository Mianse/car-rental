import React from 'react';

const ToastMsg = ({msg}:any) => {
  return (
<div className="toast toast-top toast-end">
  <div className="alert alert-info">
    <span>New mail arrived.</span>
  </div>
  
</div>
  );
}

export default ToastMsg;

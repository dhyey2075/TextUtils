import React, { useState, useEffect } from "react";

const Alert = (props) => {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  return (
    <div>
      {props.alert && (
        <div className={`my-4 d-flex justify-content-center alert large alert-${props.alert.type}`} role="alert">
          <strong>{props.alert.msg}</strong>
        </div>
      )}
    </div>
  );
};

export default Alert;

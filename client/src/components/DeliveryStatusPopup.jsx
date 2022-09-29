import React from 'react'
import { Snackbar, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

function DeliveryStatusPopup(props) {
  const { popupStatus, setPopupStatus, response } = props
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setPopupStatus(false);
  }

  const action = (
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
  );

  return (
    <Snackbar
        open={popupStatus}
        autoHideDuration={6000}
        onClose={handleClose}
        message={response}
        action={action}
      />
  )
}

export default DeliveryStatusPopup
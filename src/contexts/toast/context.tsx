import CloseIcon from "@mui/icons-material/Close"
import { IconButton, Snackbar } from "@mui/material"
import { createContext, FC, PropsWithChildren, useEffect, useState } from "react"
import { ArrayUtils } from "src/utils"

type State = {
  showInfo: (message: string) => void
  showSuccess: (message: string) => void
  showError: (message: string) => void
  showWarning: (message: string) => void
}

export interface SnackbarMessage {
  message: string
  key: number
}

export const ToastContext = createContext<State | undefined>(undefined)

export const ToastContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [snackPack, setSnackPack] = useState<readonly SnackbarMessage[]>([])
  const [open, setOpen] = useState(false)
  const [messageInfo, setMessageInfo] = useState<SnackbarMessage | undefined>(undefined)

  useEffect(() => {
    if (snackPack.length && !messageInfo) {
      setMessageInfo({ ...snackPack[0] })
      setSnackPack((prev) => prev.slice(1))
      setOpen(true)
    } else if (snackPack.length && messageInfo && open) {
      setOpen(false)
    }
  }, [snackPack, messageInfo, open])

  const showToast = (message: string): void => {
    setSnackPack((prev) => [...prev, { message, key: ArrayUtils.getRandomKey() }])
  }

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return
    }
    setOpen(false)
  }

  const handleExited = () => {
    setMessageInfo(undefined)
  }

  const showInfo = (message: string): void => showToast(message)
  const showSuccess = (message: string): void => showToast(message)
  const showError = (message: string): void => showToast(message)
  const showWarning = (message: string): void => showToast(message)

  return (
    <ToastContext.Provider value={{ showInfo, showSuccess, showError, showWarning }}>
      {children}
      <Snackbar
        key={messageInfo ? messageInfo.key : undefined}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        TransitionProps={{ onExited: handleExited }}
        message={messageInfo ? messageInfo.message : undefined}
        action={
          <>
            <IconButton aria-label="close" color="inherit" sx={{ p: 0.5 }} onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </>
        }
      />
    </ToastContext.Provider>
  )
}

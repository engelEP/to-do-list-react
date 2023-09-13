import { ToastContainer, toast } from 'react-toastify';

const alertShow = {
  success: (text) => toast.success(text),
  error: (text) => toast.error(text),
  info: (text) => toast.info(text),
  warn: (text) => toast.warn(text),
};

const Alert = () => {
  return (
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  );
};

export { Alert, alertShow };

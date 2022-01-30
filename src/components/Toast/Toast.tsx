import { ToastWrapper } from './Toast.styles';

interface ToastProps {
  show: boolean;
  message: string;
  duration: number;
  success: boolean;
  onClose: () => any;
}

export default function Toast({
  show,
  message,
  duration,
  success,
  onClose,
}: ToastProps) {
  clearTimeout(timeoutHandle);
  if (show) {
    var timeoutHandle = setTimeout(() => onClose(), duration);
  }
  return (
    show && (
      <ToastWrapper success={success}>
        <p>{message}</p>
        <button onClick={onClose}>x</button>
      </ToastWrapper>
    )
  );
}

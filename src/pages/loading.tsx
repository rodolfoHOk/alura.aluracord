import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Loading } from '../components/Loading/Loading';
import Toast from '../components/Toast/Toast';

export default function LoadingPage() {
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  useEffect(() => {
    const error = new URLSearchParams(window.location.search).get('error');

    if (error) {
      setErrorMessage(`Erro ao tentar logar: ${error}`);
    }

    return () => setErrorMessage('');
  }, []);

  function onCloseToast() {
    setErrorMessage('');
    router.push('/');
  }

  return (
    <div>
      <Loading />
      <Toast
        success={false}
        show={!!errorMessage}
        duration={3000}
        message={errorMessage}
        onClose={onCloseToast}
      />
    </div>
  );
}

import '@/styles/global.css.ts';
import 'pretendard/dist/web/static/pretendard.css';
import React from 'react';
import { createRoot } from 'react-dom/client';

const hideLoading = () => {
  const loadingElement = document.getElementById('root-loading');
  if (loadingElement) {
    loadingElement.style.opacity = '0';
    loadingElement.style.transform = 'translateY(-20px)';
    setTimeout(() => {
      loadingElement.style.display = 'none';
    }, 600);
  }
};

const renderApp = async () => {
  const { default: App } = await import('./App');

  return createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

const init = async () => {
  if (import.meta.env.DEV) {
    const { worker } = await import('@/tests/mocks/browser');
    await worker.start({ onUnhandledRequest: 'bypass' });
    console.log('MSW initialized successfully');
  }

  await renderApp();
  hideLoading();
};

init().catch(console.error);

import '@/styles/font.css';
import '@/styles/global.css.ts';
import 'pretendard/dist/web/static/pretendard.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { hideLoading } from './utils/hide-loading';

const renderApp = async () => {
  const { default: App } = await import('./App');

  return createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

const init = async () => {
  if (import.meta.env.VITE_USE_MSW === 'true') {
    const { worker } = await import('@/tests/mocks/browser');
    await worker.start({
      onUnhandledRequest: 'bypass',
      serviceWorker: {
        url: '/mockServiceWorker.js',
        options: {
          scope: '/',
        },
      },
    });
    console.log('MSW initialized successfully');
  }

  await renderApp();
  hideLoading();
};

init().catch(console.error);

import React from 'react';
import { createRoot } from 'react-dom/client';

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
    const { worker } = await import('@/mocks/browser');
    await worker.start();
    console.log('MSW initialized successfully');
  }

  await renderApp();
};

init().catch(console.error);

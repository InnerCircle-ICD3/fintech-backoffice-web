export const hideLoading = () => {
  const loadingElement = document.getElementById('root-loading');
  if (!loadingElement) return;

  loadingElement.style.opacity = '0';
  loadingElement.style.transform = 'translateY(-20px)';

  const handleHide = () => {
    loadingElement.style.display = 'none';
  };

  setTimeout(handleHide, 600);
};

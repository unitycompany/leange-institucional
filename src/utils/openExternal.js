export const openExternal = (url, { newTab = true } = {}) => {
  if (!url) return;

  if (newTab) {
    const win = window.open(url, '_blank', 'noopener,noreferrer');
    if (win) return;
  }

  window.location.assign(url);
};

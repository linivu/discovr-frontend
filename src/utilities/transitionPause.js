const transitionPause = () => {
  window.addEventListener('load', () => {
    document.body.classList.remove('transition-pause');
  });

  window.addEventListener('resize', () => {
    document.body.classList.add('transition-pause');

    setTimeout(() => {
      document.body.classList.remove('transition-pause');
    }, 200);
  });
};

export default transitionPause;

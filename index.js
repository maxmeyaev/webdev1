
// eslint-disable-next-line no-unused-vars
const changeColor = () => {
  const btn = document.getElementById('btn_color');
  let color = btn.style.color;
  // eslint-disable-next-line no-unused-vars
  color = btn.style.color = color === 'red' ? 'green' : 'red';
};

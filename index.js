
const changeColor = () => {
  const btn = document.getElementById('btn_color');
  let color = btn.style.color;
  color = btn.style.color = color === 'red' ? 'green' : 'red';
};

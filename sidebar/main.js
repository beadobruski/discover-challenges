const toggle = document.querySelector('.toggle');
const sidebar = document.querySelector('.sidebar');

toggle.onclick = function () {
  sidebar.classList.toggle('shrink');
};

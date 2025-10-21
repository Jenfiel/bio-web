const menuButton = document.getElementById('menu-button');
const sidebar = document.getElementById('sidebar');

let sidebarOpen = false;


menuButton.addEventListener('click', (event) => {
  event.stopPropagation(); 
  if (!sidebarOpen) {
    sidebar.style.width = '300px';
    sidebarOpen = true;
  } else {
    sidebar.style.width = '0';
    sidebarOpen = false;
  }
});

sidebar.addEventListener('click', (event) => {
  event.stopPropagation();
});

document.addEventListener('click', () => {
  if (sidebarOpen) {
    sidebar.style.width = '0';
    sidebarOpen = false;
  }
});


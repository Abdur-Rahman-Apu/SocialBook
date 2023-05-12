const settingMenu = document.querySelector(".settings-menu");
const darkBtn = document.querySelector(".dark-btn");

function toggleSettingsMenu() {
  settingMenu.classList.toggle("settings-menu-show");
}

darkBtn.onclick = function () {
  darkBtn.classList.toggle("dark-btn-on");
};

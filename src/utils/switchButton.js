function handleSwitchButton() {
const switchButton = document.getElementById('switch-button');
const switchLabel = document.getElementById('switch-label');

switchButton.addEventListener('change', () => {
    if (switchButton.checked) {
        switchLabel.textContent = 'Não repetir número';
    } else {
        switchLabel.textContent = 'Repetir número';
    }
  });
}

export {handleSwitchButton}

function handleSwitchButton() {
    const switchButton = document.getElementById('switch-button');
    const switchLabel = document.getElementById('switch-label');

    function updateLabel() {
        if (switchButton.checked) {
            switchLabel.textContent = 'Não repetir número';
        } else {
            switchLabel.textContent = 'Repetir número';
        }
    }

    updateLabel();

    switchButton.addEventListener('change', updateLabel);
}

handleSwitchButton();

export { handleSwitchButton }

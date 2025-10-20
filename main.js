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

function handleInputGradient() {
    const inputs = document.querySelectorAll('.main-content .form-item input');

    inputs.forEach(input => {
        input.addEventListener('input', (event) => {
            if (event.target.value.trim() !== '') {
                event.target.classList.add('has-value');
            } else {
                event.target.classList.remove('has-value');
            }
        });
    });
}

function preventFormSubmit() {
    const form = document.querySelector('.main-content form');
    
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
        });
    }
}

preventFormSubmit();
handleSwitchButton();
handleInputGradient();

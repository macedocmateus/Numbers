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

function drawingNumbers() {
    const quantNumbersInput = document.getElementById('quant-numbers');
    const startingNumberInput = document.getElementById('starting-number');
    const finalNumberInput = document.getElementById('final-number');
    const switchButton = document.getElementById('switch-button');
    const quantNumbersValue = quantNumbersInput?.value.trim();
    const startingNumberValue = startingNumberInput?.value.trim();
    const finalNumberValue = finalNumberInput?.value.trim();
    const noRepeat = switchButton?.checked || false;

    if (!quantNumbersValue || !startingNumberValue || !finalNumberValue) {
        return [];
    }

    const quantNumbers = parseInt(quantNumbersValue, 10);
    const startingNumber = parseInt(startingNumberValue, 10);
    const finalNumber = parseInt(finalNumberValue, 10);

    if (isNaN(quantNumbers) || isNaN(startingNumber) || isNaN(finalNumber)) {
        return [];
    }

    if (quantNumbers <= 0 || startingNumber === null || finalNumber === null) {
        return [];
    }

    const sortedNumbers = [];
    
    const min = Math.min(startingNumber, finalNumber);
    const max = Math.max(startingNumber, finalNumber);

    if (noRepeat) {
        const availableNumbers = [];
        for (let i = min; i <= max; i++) {
            availableNumbers.push(i);
        }
        const quantity = Math.min(quantNumbers, availableNumbers.length);
        
        for (let i = 0; i < quantity; i++) {
            const randomIndex = Math.floor(Math.random() * availableNumbers.length);
            sortedNumbers.push(availableNumbers[randomIndex]);
            availableNumbers.splice(randomIndex, 1);
        }
    } else {
        for (let i = 0; i < quantNumbers; i++) {
            const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            sortedNumbers.push(randomNumber);
        }
    }
    return sortedNumbers;
}

function handleSortNumbers() {
    const sortButton = document.querySelector('.btn-sort');
    const mainContent = document.querySelector('.main-content');
    
    sortButton.addEventListener('click', () => {
        const sortedNumbers = drawingNumbers();

        const numbersHTML = sortedNumbers.map(number => `
            <div class="sort-number">
                <span>${number}</span>
            </div>
        `).join('');

        mainContent.innerHTML = `
        <div class="result-container">
            <div class="header-sort">
                <h2>
                    RESULTADO DO SORTEIO
                </h2>
                <p>
                    1º RESULTADO
                </p>
            </div>
        
            <div class="sort-numbers">
                ${numbersHTML}
            </div>
            
            <button class="btn-sort-again">
                SORTEAR NOVAMENTE
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.75C6.89136 2.75 2.75 6.89136 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 11.5858 21.5858 11.25 22 11.25C22.4142 11.25 22.75 11.5858 22.75 12C22.75 17.937 17.937 22.75 12 22.75C6.06293 22.75 1.25 17.937 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C14.7937 1.25 17.339 2.31639 19.25 4.06269V2.5C19.25 2.08579 19.5858 1.75 20 1.75C20.4142 1.75 20.75 2.08579 20.75 2.5V6C20.75 6.41421 20.4142 6.75 20 6.75H16.5C16.0858 6.75 15.75 6.41421 15.75 6C15.75 5.58579 16.0858 5.25 16.5 5.25H18.3246C16.6699 3.69872 14.446 2.75 12 2.75Z" fill="white"/>
                <path d="M15.9453 12.3577C15.7686 12.9844 14.9333 13.4273 13.2629 14.3131C11.648 15.1693 10.8406 15.5975 10.1899 15.4254C9.9209 15.3542 9.6758 15.2191 9.47812 15.0329C9 14.5827 9 13.7094 9 11.9629C9 10.2163 9 9.34307 9.47812 8.89284C9.6758 8.7067 9.9209 8.57157 10.1899 8.50042C10.8406 8.32833 11.648 8.75646 13.2629 9.61272C14.9333 10.4985 15.7686 10.9414 15.9453 11.5681C16.0182 11.8268 16.0182 12.099 15.9453 12.3577Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </button>
        </div>
        `
    });
}
preventFormSubmit();
handleSwitchButton();
handleInputGradient();
handleSortNumbers();

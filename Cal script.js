const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');

// Function to handle button clicks and key presses
function inputHandler(value) {
    if (value === 'C') {
        display.textContent = '';
    } else if (value === 'backspace' || value === 'Backspace') {
        display.textContent = display.textContent.slice(0, -1);
    } else if (value === '=' || value === 'Enter') {
        try { 
            display.textContent = eval(display.textContent);
        } catch {
            display.textContent = 'Error';
        }
    } else {
        display.textContent += value;
    }
}

// Adding event listeners for button clicks
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        inputHandler(value);
    });
});

// Adding event listener for keypresses
document.addEventListener('keydown', (event) => {
    const key = event.key;
    
    if (key >= 0 && key <= 9) { // Numbers
        inputHandler(key);
    } else if (key === '/' || key === '*' || key === '-' || key === '+') { // Operators
        inputHandler(key);
    } else if (key === '.' || key === 'Enter' || key === 'Backspace') { // Decimal, Enter, Backspace
        inputHandler(key);
    } else if (key === 'Escape') { // Clear (Escape key)
        inputHandler('C');
    }
});



let screen = document.getElementById('screen');
const buttons = document.querySelectorAll('#buttons a');

for (const button of buttons) {
    button.addEventListener('click', function (e) {
        e.preventDefault();

        if (e.target.dataset.key == 'equal') {
            try {
                let result = eval(screen.textContent);
                screen.textContent = result;

            if (screen.textContent.length > 8) {
                screen.textContent = result.toFixed(8);
            }
            } catch (error) {
                screen.textContent = 'error';
            }
            
        } else if (e.target.dataset.key == 'clear') {
            screen.textContent = '';
        } else {
            screen.textContent += e.target.dataset.key;
        }
    });
    
}


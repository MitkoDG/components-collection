const result = document.querySelector('.result');
const buttons = document.querySelectorAll('.grid button');
const history = document.querySelector('.history');
buttons.forEach(b => b.addEventListener('click', clickHandler))

function clickHandler(e) {
    const historyCharts = result.innerText;
    if (e.target.innerText == '=') {
        try {
            history.innerText = `${historyCharts}=`;
            result.innerText = eval(result.innerText)
        } catch (error) {
            result.innerText = 'Invalid Input '
        }
    } else if (e.target.innerText == 'C') {
        history.innerText += result.innerText;
        result.innerText = '';
    } else if (e.target.innerText == '←') {
        history.innerText = '';
        result.innerText = result.innerText.slice(0, -1)
    } else {
        result.innerText += e.target.innerText;
    }
}

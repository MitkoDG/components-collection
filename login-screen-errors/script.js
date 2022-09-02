const inputs = document.querySelectorAll('.input-group');
const btn = document.querySelector('.login-button');
const msg = document.querySelectorAll('.msg');
btn.addEventListener('click', addClass);
function addClass(event) {
  event.preventDefault();
  const loginInput = inputs[0];
  loginInput.classList.add('success');
  const passInput = inputs[1];
  passInput.classList.add('error');
  msg[0].style.display = "block";
  msg[1].style.display = "block";
  let counter = 0;
  const demoInterval = setInterval(function(){
        counter++;
        if (loginInput.classList.contains('success')) {
            loginInput.classList.replace('success', 'error');
            passInput.classList.replace('error', 'success');
          } else {
            loginInput.classList.replace('error', 'success');
            passInput.classList.replace('success', 'error');
          }
          if (counter >= 6) {
            clearInterval(demoInterval);
            if (loginInput.classList.contains('success')) {
                loginInput.classList.remove('success');
                passInput.classList.remove('error');
            } else {
                loginInput.remove('error');
                passInput.remove('success');
            }
            msg[0].style.display = "none";
            msg[1].style.display = "none";
          }
    },1000)
}

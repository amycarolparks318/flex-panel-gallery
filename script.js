<<<<<<< HEAD
const panels = document.querySelectorAll('.panel');

function toggleOpen(){
    this.classList.toggle('open');
}

function toggleActive(e){
if(e.propertyName.includes('flex')){
    this.classList.toggle('open-active');
}
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive))

=======
const panels = document.querySelectorAll('.panel');

function toggleOpen(){
    this.classList.toggle('open');
}

function toggleActive(e){
if(e.propertyName.includes('flex')){
    this.classList.toggle('open-active');
}
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive))

>>>>>>> f74622037f1d1ec8f67e3192bb431edad373ccda

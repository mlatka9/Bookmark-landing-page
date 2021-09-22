console.log("Hello world");

const questionTopBoxes = document.querySelectorAll('.faq-question-box-top');

questionTopBoxes.forEach(box=>box.addEventListener('click',function(event){
    
    const questionBox = event.target.closest('.faq-question-box');
    if(!questionBox) return;
    
    const answerMarginTop = Number.parseFloat(window.getComputedStyle(questionBox.querySelector('.faq-answer')).marginTop);
    const questionMarginTop = Number.parseFloat(window.getComputedStyle(questionBox.querySelector('.faq-question-box-top')).marginTop);

    const answerHeight = questionBox.querySelector('.faq-answer').offsetHeight;
    const questionHeight = questionBox.querySelector('.faq-question-box-top').offsetHeight;
    
    let openHeight = answerHeight + questionHeight + answerMarginTop * 2 + questionMarginTop * 2;

    console.log(openHeight);

    if(questionBox.dataset.hidden === 'true'){
        questionBox.dataset.hidden = 'false';
        questionBox.style.height = openHeight + 'px';
    } else {
        questionBox.dataset.hidden = 'true';
        questionBox.style.height = '';
    }
}));

document.querySelector('#contact-form').addEventListener('submit',function(event){
    event.preventDefault();
    const email = event.target["email-input"].value;
    if(validateEmail(email)){
        console.log('good email');
        event.target.dataset.error = 'false';
        return;
    }
    console.log(event.target)
    event.target.dataset.error = 'true';
});

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const faqQuestionTopBoxes = document.querySelectorAll('.faq-question-box-top');

faqQuestionTopBoxes.forEach(box => box.addEventListener('click', function (event) {
    const questionBox = event.target.closest('.faq-question-box');
    if (!questionBox) return;

    const answerMarginTop = Number.parseFloat(window.getComputedStyle(questionBox.querySelector('.faq-answer')).marginTop);
    const questionMarginTop = Number.parseFloat(window.getComputedStyle(questionBox.querySelector('.faq-question-box-top')).marginTop);
    const answerHeight = questionBox.querySelector('.faq-answer').offsetHeight;
    const questionHeight = questionBox.querySelector('.faq-question-box-top').offsetHeight;

    let newheight = answerHeight + questionHeight + answerMarginTop * 2 + questionMarginTop * 2;

    if (questionBox.dataset.hidden === 'true') {
        questionBox.style.height = newheight + 'px';
        questionBox.dataset.hidden = 'false';
    } else {
        questionBox.style.height = '';
        questionBox.dataset.hidden = 'true';
    }
}));

document.querySelector('#contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = event.target["email-input"].value;
    if (validateEmail(email)) {
        console.log('good email');
        event.target.dataset.error = 'false';
        return;
    }
    event.target.dataset.error = 'true';
});

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

document.querySelector('.features-box ul').addEventListener('click', switchFeature);

function switchFeature(event) {
    if (event.target.tagName !== 'BUTTON') return;

    let currentFeatureNumber = this.dataset.currentFeatureNumber
    let nextFeatureNumber = event.target.dataset.featureNumber;
    if (currentFeatureNumber === nextFeatureNumber) return;

    const featuresMark = document.querySelector('.mark');
    this.dataset.currentFeatureNumber = nextFeatureNumber;
    featuresMark.style.left = `${(nextFeatureNumber - 1) * 33.3}%`;

    const image = document.querySelector('.features-box-bottom img');
    const header = document.querySelector('.features-box-bottom-side h2');
    const paragraph = document.querySelector('.features-box-bottom-side p');

    image.style.transform = 'translateX(-10rem)';
    image.style.opacity = '0';
    header.style.transform = 'translateY(-5rem)';
    header.style.opacity = '0';
    paragraph.style.transform = 'translateY(-5rem)';
    paragraph.style.opacity = '0';

    image.addEventListener('transitionend', switchImages);
    function switchImages() {
        this.removeEventListener('transitionend', switchImages);

        image.src = featuresArray[nextFeatureNumber - 1].imageUrl;
        header.textContent = featuresArray[nextFeatureNumber - 1].header;
        paragraph.textContent = featuresArray[nextFeatureNumber - 1].paragraph;

        image.style.opacity = '';
        image.style.transform = '';

        header.style.opacity = '';
        header.style.transform = '';

        paragraph.style.opacity = '';
        paragraph.style.transform = '';
    }
}

const featuresArray = [
    {
        "imageUrl": "./resources/illustration-features-tab-1.svg",
        "header": "Bookmark in one click",
        "paragraph": "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    },
    {
        "imageUrl": "./resources/illustration-features-tab-2.svg",
        "header": "Intelligent search",
        "paragraph": "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    },
    {
        "imageUrl": "./resources/illustration-features-tab-3.svg",
        "header": "Share your bookmarks",
        "paragraph": "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    },
];


const mobileNav = document.querySelector('.mobile-nav-box');
const mobileNavToggleButtons = document.querySelectorAll('.hamburger-menu, .mobile-nav-close');
mobileNavToggleButtons.forEach(button => button.addEventListener('click', toggleMobileMenu));

function toggleMobileMenu() {
    if (mobileNav.dataset.mobileNav === "open") {
        hideMobileNav();
    } else {
        showMobileNav();
    }
}

function hideMobileNav() {
    mobileNav.dataset.mobileNav = "hidden";
    document.querySelector('.hamburger-menu').style.opacity = '';
    document.querySelector('nav > .logo').style.opacity = '';
    document.body.style.overflow = "";
}

function showMobileNav() {
    mobileNav.dataset.mobileNav = "open";
    document.querySelector('.hamburger-menu').style.opacity = '0';
    document.querySelector('nav > .logo').style.opacity = '0';
    document.body.style.overflow = "hidden";
}

window.addEventListener('resize', function () {
    if (document.documentElement.clientWidth > 633) {
        hideMobileNav();
    }
});

document.querySelectorAll('.mobile-nav-box li, .mobile-nav-box .socials-box > i')
    .forEach(button => button.addEventListener('click', function () {

        hideMobileNav();
    }));
const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

//Header Section

const navLinks = document.querySelectorAll('nav a');
navLinks[0].textContent = 'Services';
navLinks[1].textContent = 'Product';
navLinks[2].textContent = 'Vision';
navLinks[3].textContent = 'Features';
navLinks[4].textContent = 'About';
navLinks[5].textContent = 'Contact';
navLinks.forEach(link => {
  link.className = 'italic';
});

//Call to Action Section

const ctaHeader = document.querySelector('.cta .cta-text h1');
ctaHeader.textContent = 'DOM Is Awesome';

const ctaButton = document.querySelector('.cta .cta-text button');
ctaButton.textContent = 'Get Started';

//Main section

const topContentHeaders = document.querySelectorAll('.top-content .text-content h4');
topContentHeaders[0].textContent = 'Features';
topContentHeaders[1].textContent = 'About';

//main top content 
const topContentParagraphs = document.querySelectorAll('.top-content .text-content p');

topContentParagraphs[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

topContentParagraphs[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

//main bottom content
const bottomContentHeaders = document.querySelectorAll('.bottom-content .text-content h4');
bottomContentHeaders[0].textContent = 'Services';
bottomContentHeaders[1].textContent = 'Product';
bottomContentHeaders[2].textContent = 'Vision';

const bottomContentParagraphs = document.querySelectorAll('.bottom-content .text-content p');
bottomContentParagraphs[0].textContent =  "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

bottomContentParagraphs[1].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

bottomContentParagraphs[2].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

//Footer Section
const contactHeader = document.querySelector('.contact h4')
contactHeader.textContent = 'Contact';

const address = document.querySelector('.contact p:nth-of-type(1)');
address.textContent = '123 Way 456 Street Somewhere, USA';

const phone = document.querySelector('.contact p:nth-of-type(2)');
phone.textContent = '1 (888) 888-8888';

const email = document.querySelector('.contact p:nth-of-type(3)');
email.textContent = 'sales@greatidea.io';

const copyright = document.querySelector('footer a');
copyright.className = "bold";
copyright.textContent = 'Copyright Great Idea! 2021';

//images
const logoImg = document.querySelector('#logo-img');
logoImg.setAttribute('src', 'http://localhost:9000/img/logo.png');
console.log(logoImg);

const ctaImg = document.querySelector('#cta-img')
ctaImg.setAttribute('src', 'http://localhost:9000/img/cta.png');  

const accentImg = document.querySelector('#middle-img');
accentImg.setAttribute('src', 'http://localhost:9000/img/accent.png');










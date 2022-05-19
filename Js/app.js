const hamburgerBtn = document.querySelector('.nav-icon');
const crossIcon = document.querySelector('.cross-icon');
const navItems = document.querySelectorAll('.mobile-nav-menu a');
const portfolioData = [
  {
    id: 0,
    title: 'Tonic',
    crossicon: './images/icons/cross-icon-popup.svg',
    subheading: 'CANOPY ',
    subheading2: '• Back End Dev • 2015',
    image: './images/cards/card1.svg',
    imageAlt: 'Tonic-screenshot',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    technologies: ['html', 'css', 'Javascript'],
    seelive: 'https://samwfelice.github.io/Portfolio/',
    seesource: 'https://github.com/samWfelice/Portfolio',
  },

  {
    id: 1,
    title: 'Multi-Post Stories',
    crossicon: './images/icons/cross-icon-popup.svg',
    subheading: 'CANOPY ',
    subheading2: '• Back End Dev • 2015',
    image: './images/cards/card2.svg',
    imageAlt: 'Multi-Post-stories-screenshot',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    technologies: ['html', 'Ruby on rails', 'css', 'Javascript'],
    seelive: 'https://samwfelice.github.io/Portfolio/',
    seesource: 'https://github.com/samWfelice/Portfolio',
  },

  {
    id: 2,
    title: 'Tonic',
    crossicon: './images/icons/cross-icon-popup.svg',
    subheading: 'CANOPY ',
    subheading2: '• Back End Dev • 2015',
    image: './images/cards/card3.svg',
    imageAlt: 'Tonic-screenshot',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    technologies: ['html', 'Ruby on rails', 'css', 'Javascript'],
    seelive: 'https://samwfelice.github.io/Portfolio/',
    seesource: 'https://github.com/samWfelice/Portfolio',
  },

  {
    id: 3,
    title: 'Multi-Post Stories',
    crossicon: './images/icons/cross-icon-popup.svg',
    subheading: 'CANOPY ',
    subheading2: '• Back End Dev • 2015',
    image: './images/cards/card4.svg',
    imageAlt: 'Multi-Post-stories-screenshot',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    technologies: ['html', 'Ruby on rails', 'css', 'Javascript'],
    seelive: 'https://samwfelice.github.io/Portfolio/',
    seesource: 'https://github.com/samWfelice/Portfolio',
  },
];
const btn0 = document.getElementById('0');
const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');
const userEmail = document.getElementById('userEmail');
const emailRegex = /^[a-z]+@[^\s]+\.[^\s]+$/;
const formBtn = document.querySelector('.form-btn');

function toggleMenu() {
  document.querySelector('.mobile-nav-menu').classList.toggle('d-block');
}

hamburgerBtn.addEventListener('click', toggleMenu);
crossIcon.addEventListener('click', toggleMenu);

navItems.forEach((navItem) => {
  navItem.addEventListener('click', toggleMenu);
});

function displayPopup(e) {
  const exData = portfolioData.filter((d) => +(e.target.id) === d.id);
  const data = exData[0];
  const popupWrapper = document.createElement('div');
  popupWrapper.className = 'project-one-pop';
  const popOverlay = document.createElement('div');
  popOverlay.className = 'pop-overlay';
  popupWrapper.appendChild(popOverlay);
  const popContent = document.createElement('div');
  popContent.className = 'pop-content';
  const popHeader = document.createElement('div');
  popHeader.className = 'popup-header';
  const popHeadline = document.createElement('h2');
  popHeadline.className = 'pop-heading';
  popHeadline.textContent = data.title;
  popHeader.appendChild(popHeadline);
  const popImage = document.createElement('img');
  popImage.setAttribute('src', './images/icons/cross-icon-popup.svg');
  popImage.addEventListener('click', (e) => {
    e.target.parentElement.parentElement.parentElement.remove();
  });
  popHeader.appendChild(popImage);
  popContent.appendChild(popHeader);
  const popSubheading = document.createElement('div');
  popSubheading.className = 'pop-subheading';
  const canopy = document.createElement('span');
  canopy.className = 'pop-canopy';
  canopy.textContent = data.subheading;
  popSubheading.appendChild(canopy);
  const grayMatter = document.createElement('span');
  canopy.className = 'pop-gray-matter';
  canopy.textContent = data.subheading2;
  popSubheading.appendChild(grayMatter);
  popContent.appendChild(popSubheading);
  const featuredImage = document.createElement('img');
  featuredImage.className = 'pop-image';
  featuredImage.setAttribute('src', data.image);
  featuredImage.setAttribute('alt', '');
  popContent.appendChild(featuredImage);
  const desktopContent = document.createElement('div');
  desktopContent.className = 'pop-desktop-content';
  const popParagraph = document.createElement('p');
  popParagraph.className = 'pop-paragraph';
  popParagraph.textContent = data.description;
  desktopContent.appendChild(popParagraph);
  const ulBtnWrapper = document.createElement('div');
  ulBtnWrapper.className = 'desktopPopLiBtn';
  const technologiesList = document.createElement('ul');
  technologiesList.className = 'card-list pop-card-list';
  data.technologies.forEach((tech) => {
    const technologiesItem = document.createElement('li');
    technologiesItem.className = 'card-list-items';
    technologiesItem.textContent = tech;
    technologiesList.appendChild(technologiesItem);
  });
  ulBtnWrapper.appendChild(technologiesList);
  const separaterLine = document.createElement('hr');
  separaterLine.className = 'pop-separator';
  ulBtnWrapper.appendChild(separaterLine);
  const btnWrapper = document.createElement('div');
  btnWrapper.className = 'popBtn';
  const liveBtn = document.createElement('a');
  liveBtn.className = 'pop-card-button';
  liveBtn.setAttribute('href', data.seelive);
  liveBtn.setAttribute('target', '_blank');
  liveBtn.textContent = 'See Live ';
  const liveBtnIcon = document.createElement('img');
  liveBtnIcon.setAttribute('src', './images/icons/github-icon.svg');
  liveBtn.appendChild(liveBtnIcon);
  btnWrapper.appendChild(liveBtn);
  const sourceBtn = document.createElement('a');
  sourceBtn.className = 'pop-card-button';
  sourceBtn.setAttribute('href', data.seesource);
  sourceBtn.setAttribute('target', '_blank');
  sourceBtn.textContent = 'See Source ';
  const sourceBtnIcon = document.createElement('img');
  sourceBtnIcon.setAttribute('src', './images/icons/source-icon.svg');
  sourceBtn.appendChild(sourceBtnIcon);
  btnWrapper.appendChild(sourceBtn);
  ulBtnWrapper.appendChild(btnWrapper);
  desktopContent.appendChild(ulBtnWrapper);
  popContent.appendChild(desktopContent);
  popupWrapper.appendChild(popContent);
  document.body.appendChild(popupWrapper);
}

btn0.addEventListener('click', (e) => {
  displayPopup(e);
});
btn1.addEventListener('click', (e) => {
  displayPopup(e);
});
btn2.addEventListener('click', (e) => {
  displayPopup(e);
});
btn3.addEventListener('click', (e) => {
  displayPopup(e);
});

const showError = (input, message) => {
  // get the form-field element
  const formField = input.parentElement;
  // add the error class
  formField.classList.remove('success');
  formField.classList.add('error');
  const errorMsg = document.createElement('span');
  errorMsg.className = 'small';
  // show the error message
  errorMsg.textContent = message;
  document.querySelector('.appendError').appendChild(errorMsg);
  setTimeout(() => {
    errorMsg.textContent = '';
  }, 1250);
};

const showSuccess = (input) => {
  // get the form-field element
  const formField = input.parentElement;
  // remove the error class
  formField.classList.remove('error');
  formField.classList.add('success');
  // hide the error message
  document.querySelector('.small').remove();
};

const isEmailValid = (email) => (
  emailRegex.test(email)
);

const checkEmail = () => {
  let valid = false;
  const email = userEmail.value.trim();
  if (!isEmailValid(email)) {
    showError(userEmail, 'Please use lower Case for the email.');
  } else {
    showSuccess(userEmail);
    valid = true;
  }
  return valid;
};

formBtn.addEventListener('click', (e) => {
  // prevent the form from submitting
  if (!checkEmail()) {
    e.preventDefault();
  }
});
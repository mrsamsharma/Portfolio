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
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960',
      technologies: ['html', 'css', 'Javascript'],
      seelive: 'https://samwfelice.github.io/Portfolio/',  
      seesource: 'https://github.com/samWfelice/Portfolio'
  },

  {
      id: 1,
      title: 'Multi-Post Stories',
      crossicon: './images/icons/cross-icon-popup.svg',
      subheading: 'FACEBOOK ',
      subheading2: '• Full Stack Dev • 2015',
      image: './images/cards/card2.svg',
      imageAlt: 'Multi-Post-stories-screenshot',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960',
      technologies: ['html','Ruby on rails' ,'css', 'Javascript'],
      seelive: 'https://samwfelice.github.io/Portfolio/',  
      seesource: 'https://github.com/samWfelice/Portfolio'  
  },

  {
      id: 2,
      title: 'Facebook 360',
      crossicon: './images/icons/cross-icon-popup.svg',
      subheading: 'FACEBOOK ',
      subheading2: '• Full Stack Dev • 2015',
      image: './images/cards/card3.svg',
      imageAlt: 'Tonic-screenshot',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960',
      technologies: ['html','Ruby on rails' ,'css', 'Javascript'],
      seelive: 'https://samwfelice.github.io/Portfolio/',  
      seesource: 'https://github.com/samWfelice/Portfolio'  
  },

  {
      id: 3,
      title: 'Uber Navigation',
      crossicon: './images/icons/cross-icon-popup.svg',
      subheading: 'Uber ',
      subheading2: '• Lead Developer • 2018',
      image: './images/cards/card4.svg',
      imageAlt: 'Multi-Post-stories-screenshot',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960',
      technologies: ['html','Ruby on rails' ,'css', 'Javascript'],
      seelive: 'https://samwfelice.github.io/Portfolio/',  
      seesource: 'https://github.com/samWfelice/Portfolio'  
  }
]

function toggleMenu() {
  document.querySelector('.mobile-nav-menu').classList.toggle('d-block');
}

hamburgerBtn.addEventListener('click', toggleMenu);
crossIcon.addEventListener('click', toggleMenu);

navItems.forEach((navItem) => {
  navItem.addEventListener('click', toggleMenu);
});

function displayPopup(id, title, subheading, image, description, technologies) {
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
  popHeadline.textContent = title;
  popHeader.appendChild(popHeadline);
  const popImage = document.createElement('img');
  popImage.setAttribute('src', './images/icons/cross-icon-popup.svg')
  popHeader.appendChild(popImage);
  popContent.appendChild(popHeader);
  const popSubheading = document.createElement('div');
  popSubheading.className = 'pop-subheading';
  const canopy = document.createElement('span');
  canopy.className = 'pop-canopy';
  canopy.textContent = subheading;
  popSubheading.appendChild(canopy);
  const grayMatter = document.createElement('span');
  canopy.className = 'pop-gray-matter';
  canopy.textContent = subheading2;
  popSubheading.appendChild(grayMatter);
  popContent.appendChild(popSubheading);
  const featuredImage = document.createElement('img');
  featuredImage.className = 'pop-image';
  featuredImage.setAttribute('src', image);
  featuredImage.setAttribute('alt', imageAlt);
  popContent.appendChild(featuredImage);
  const desktopContent = document.createElement('div');
  desktopContent.className = 'pop-desktop-content';
  const popParagraph = document.createElement('p');
  popParagraph.className = 'pop-paragraph';
  popParagraph.textContent = description;
  desktopContent.appendChild(popParagraph);
  const ulBtnWrapper = document.createElement('div');
  ulBtnWrapper.className = 'desktopPopLiBtn';
  const technologiesList = document.createElement('ul');
  technologiesList.className = 'card-list pop-card-list'
  const technologiesItem1 = document.createElement('li');
  technologiesItem.className = 'card-list-items';
  technologiesItem.textContent = technologies;
  ulBtnWrapper.appendChild(technologiesItem1);
  const technologiesItem2 = document.createElement('li');
  technologiesItem.className = 'card-list-items';
  technologiesItem.textContent = technologies;
  ulBtnWrapper.appendChild(technologiesItem2);
  const technologiesItem3 = document.createElement('li');
  technologiesItem.className = 'card-list-items';
  technologiesItem.textContent = technologies;
  ulBtnWrapper.appendChild(technologiesItem3);
  const separaterLine = document.createElement('hr');
  separaterLine.className = 'pop-separator';
  desktopContent.appendChild(separaterLine);
  const btnWrapper = document.createElement('div');
  btnWrapper.className = 'popBtn';
  const liveBtn = document.createElement('button');
  liveBtn.className = 'pop-card-button';
  liveBtn.setAttribute('type', 'button');
  liveBtn.textContent = 'See Live';
  const liveBtnIcon = document.createElement('img');
  liveBtnIcon.setAttribute('src', './images/icons/github-icon.svg');
  liveBtn.appendChild(liveBtnIcon);
  btnWrapper.appendChild(liveBtn);
  const sourceBtn = document.createElement('button');
  sourceBtn.className = 'pop-card-button';
  sourceBtn.setAttribute('type', 'button');
  sourceBtn.textContent = 'See Source';
  const sourceBtnIcon = document.createElement('img');
  liveBtnIcon.setAttribute('src', './images/icons/source-icon.svg');
  sourceBtn.appendChild(liveBtnIcon);
  btnWrapper.appendChild(sourceBtn);
  ulBtnWrapper.appendChild(btnWrapper);
  desktopContent.appendChild(ulBtnWrapper);
  popupWrapper.appendChild(desktopContent);
}
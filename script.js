const hamburger = document.querySelector('.hamburger');
const mobileMenuBar = document.querySelector('.hamburger-menu-container');
const body = document.querySelector('.body-container');

const mobileMenu = () => {
  hamburger.classList.toggle('active');
  mobileMenuBar.classList.toggle('show-menu');
  body.classList.toggle('remove-body');
};

hamburger.addEventListener('click', mobileMenu);

// Store speakers information in array
const speakerArray = [
  {
    speakerName: 'Adam Chase',
    speakerTitle: 'WSET Director | Commonwealth Wine School',
    speakerDescription: `Adam Chase serves as the Wine &  
                 Spirit Education Trust
                <strong>(WSET)</strong>
                Director at Commonwealth Wine School. He is founder of Grape
                Experience Wine & Spirit School in the San Francisco Bay Area,
                Nevada and Boston.`,
    speakerImage: './images/speakers/Adam Chase.jpg',
    chessboardImage: './images/chessboard-bg-img.jpg',
  },
  {
    speakerName: 'Elisha Cicerone',
    speakerTitle:
      'General Manager & Chief Operating Officer | Charlotte City Club',
    speakerDescription:
      'Elisha Cicerone is the General Manager and Chief Operating Officer of Charlotte City Club in North Carolina. Previous club experience includes Assistant General Manager and Food & Beverage Director at Chevy Chase Club in Maryland.',
    speakerImage: './images/speakers/Elisha Cicerone.jpg',
  },
  {
    speakerName: 'Laura Herman',
    speakerTitle: 'Executive Pastry Chef | Shoreacres',
    speakerDescription:
      'Laura Herman, CEPC, attended The French Pastry School. She has served as Pastry Chef for Westmoreland Country Club from 2010 to 2021. Today, Herman is the Executive Pastry Chef of Shoreacres       in Lake Bluff, Ill.',
    speakerImage: './images/speakers/Laura Herman.jpg',
  },
  {
    speakerName: 'Scott Craig',
    speakerTitle: 'Executive Chef | Cullasaja Club',
    speakerDescription:
      'Scott Craig is a World Association of Chefs’ Societies <strong>(WACS)</strong> International Certified Master Chef <strong>(CMC)</strong> and a 2012 International Culinary Olympic gold medalist. He is currently Executive Chef of Cullasaja Club in Highlands, N.C.',
    speakerImage: './images/speakers/Scott Craig.jpg',
  },
  {
    speakerName: 'Geo Lanez',
    speakerTitle: 'Executive Chef | The Patterson Club',
    speakerDescription:
      'Geoffrey Lanez began making a name for himself while in college at Johnson & Wales University by competing on the student level and studying under prominent chefs. At age 29, he now manages and oversees a team of about 40 staff and three kitchens to produce a high-quality dining experience for the club’s more than 450 member families.',
    speakerImage: './images/speakers/Geo Lanez.jpg',
  },
  {
    speakerName: 'Mellisa Root',
    speakerTitle: 'Executive Pastry Chef | Farmington Country Club',
    speakerDescription: `Mellisa Root is an acclaimed chocolatier and pastry chef based
                in Virginia. She grew up inspired by the legendary Julia Child,
                immersing herself in cookbooks at the local library and honing
                her culinary skills at home with her family. Eventually, Root
                discovered her true passion for baking, and she decided to
                pursue pastry at California College of the Arts
                <strong>(CCA)</strong> in San Francisco.`,
    speakerImage: './images/speakers/Mellisa Root.jpg',
  },
];

const speakersSection = document.querySelector('.judges-container');

const createSpeakers = () => {
  speakersSection.insertAdjacentHTML(
    'afterbegin',
    `<div class="single-judge">
            <div class="images">
              <img
                src="./images/chessboard-bg-img.jpg"
                alt="black and white chessboard background"
                class="bg-img"
              />
              <img
                src=""
                alt="Adam Chase"
                class="judge-avatar"
              />
            </div>
            <div class="judges-description">
              <h4 class="judge-name"></h4>
              <p class="judge-achievement">             
              </p>
              <div class="grey-borderline"></div>
              <p class="judge-background">               
              </p>
            </div>
          </div>`,
  );
};

for (let i = 0; i < speakerArray.length; i += 1) {
  createSpeakers();
  const speakerName = document.querySelector('.judge-name');
  const speakerTitle = document.querySelector('.judge-achievement');
  const speakerDescription = document.querySelector('.judge-background');
  const speakerImage = document.querySelector('.judge-avatar');

  speakerName.textContent = speakerArray[i].speakerName;
  speakerTitle.textContent = speakerArray[i].speakerTitle;
  speakerDescription.textContent = speakerArray[i].speakerDescription;
  speakerImage.setAttribute('src', speakerArray[i].speakerImage);
}

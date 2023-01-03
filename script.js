const hamburger = document.querySelector(".hamburger");
const mobileMenuBar = document.querySelector(".hamburger-menu-container");
const body = document.querySelector(".body-container");

const mobileMenu = () => {
  hamburger.classList.toggle("active");
  mobileMenuBar.classList.toggle("show-menu");
  body.classList.toggle("remove-body");
};

hamburger.addEventListener("click", mobileMenu);

// Store speakers information in array

const speakerArray = [
  {
    speaker1Name: "Adam Chase",
    speaker1Title: "WSET Director | Commonwealth Wine School",
    speaker1Description: `Adam Chase serves as the Wine &  
                 Spirit Education Trust
                <strong>(WSET)</strong>
                Director at Commonwealth Wine School. He is founder of Grape
                Experience Wine & Spirit School in the San Francisco Bay Area,
                Nevada and Boston.`,
    speaker1Image: "./images/speakers/Adam Chase.jpg",
  },
  {
    speaker1Name: "Elisha Cicerone",
    speaker1Title:
      "General Manager & Chief Operating Officer | Charlotte City Club",
    speaker1Description:
      "Elisha Cicerone is the General Manager and Chief Operating Officer of Charlotte City Club in North Carolina. Previous club experience includes Assistant General Manager and Food & Beverage Director at Chevy Chase Club in Maryland.",
    speaker1Image: "./images/speakers/Elisha Cicerone.jpg",
  },
  {
    speaker1Name: "Laura Herman",
    speaker1Title: "Executive Pastry Chef | Shoreacres",
    speaker1Description:
      "Laura Herman, CEPC, attended The French Pastry School. She has served as Pastry Chef for Westmoreland Country Club from 2010 to 2021. Today, Herman is the Executive Pastry Chef of Shoreacres       in Lake Bluff, Ill.",
    speaker1Image: "./images/speakers/Laura Herman.jpg",
  },
  {
    speaker1Name: "Scott Craig",
    speaker1Title: "Executive Chef | Cullasaja Club",
    speaker1Description: `Scott Craig is a World Association of Chefs’ Societies <strong>(WACS)</strong> International Certified Master Chef <strong>(CMC)</strong> and a 2012 International Culinary Olympic gold medalist. He is currently Executive Chef of Cullasaja Club in Highlands, N.C.`,
    speaker1Image: "./images/speakers/Scott Craig.jpg",
  },
  {
    speaker1Name: "Geo Lanez",
    speaker1Title: "Executive Chef | The Patterson Club",
    speaker1Description:
      "Geoffrey Lanez began making a name for himself while in college at Johnson & Wales University by competing on the student level and studying under prominent chefs. At age 29, he now manages and oversees a team of about 40 staff and three kitchens to produce a high-quality dining experience for the club’s more than 450 member families.",
    speaker1Image: "./images/speakers/Geo Lanez.jpg",
  },
  {
    speaker1Name: "Mellisa Root",
    speaker1Title: "Executive Pastry Chef | Farmington Country Club",
    speaker1Description: `Mellisa Root is an acclaimed chocolatier and pastry chef based
                in Virginia. She grew up inspired by the legendary Julia Child,
                immersing herself in cookbooks at the local library and honing
                her culinary skills at home with her family. Eventually, Root
                discovered her true passion for baking, and she decided to
                pursue pastry at California College of the Arts
                <strong>(CCA)</strong> in San Francisco.`,
    speaker1Image: "./images/speakers/Mellisa Root.jpg",
  },
];

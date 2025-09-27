
// Header hambuger button secction
document.addEventListener('DOMContentLoaded', () => {
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');
    const nameHeader = document.querySelector('.nameHeader');

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
        nameHeader.classList.toggle('hidden');
    });
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "images/nigeria.jpg"
  },
  {
    templeName: "Alabang Philippines",
    location: "Alabang, Philippines",
    dedicated: "2024, June, 9",
    area: 47000,
    imageUrl: "images/alabang_philippines_temple_exterior.jpeg"
  },
  {
    templeName: "Bahía Blanca Argentina",
    location: "Bahía Blanca, Argentina",
    dedicated: "2025, September, 8",
    area: 33000,
    imageUrl: "images/bahia_blanca_argentina_temple_exteriors.jpeg"
  },
  {
    templeName: "Brigham City Utah",
    location: "Brigham City, Utah, United States",
    dedicated: "2012, September, 23",
    area: 36000,
    imageUrl: "images/brigham_city_utah_temple_dawn.jpeg"
  },
  {
    templeName: "Brussels Belgium",
    location: "Brussels, Belgium",
    dedicated: "2026, May, 1", // rendering por ahora
    area: 28000,
    imageUrl: "images/temple_rendering_brussels_belgium_temple.jpeg"
  },
  {
    templeName: "Madrid Spain",
    location: "Madrid, Spain",
    dedicated: "1999, March, 19",
    area: 45800,
    imageUrl: "images/madrid_spain_temple_lds.jpeg"
  },
  {
    templeName: "Laie Hawaii",
    location: "Laie, Hawaii, United States",
    dedicated: "1919, November, 27",
    area: 42300,
    imageUrl: "images/laie_hawaii_temple_lds.jpeg"
  },
  {
    templeName: "Anchorage Alaska",
    location: "Anchorage, Alaska, United States",
    dedicated: "1999, January, 9",
    area: 11937,
    imageUrl: "images/anchorage_alaska_temple_lds.jpeg"
  },
  {
    templeName: "Orlando Florida",
    location: "Orlando, Florida, United States",
    dedicated: "1994, October, 9",
    area: 70348,
    imageUrl: "images/orlando_temple_lds.jpeg"
  }
];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container.home');
    const navLinks = document.querySelectorAll('.navigation a');
    const titleName = document.querySelector('.title');

    const displayTemples = (filteredTemples) => {
        container.innerHTML = '';
        filteredTemples.forEach(temple => {
            const card = document.createElement('div');
            card.className = 'temple-card';
            card.innerHTML = `
                <img src="${temple.imageUrl}"  loading="lazy"  width="${temple.width}" height="${temple.height}" alt="${temple.templeName} Temple">
                <div class="temple-info">
                    <h2>${temple.templeName}</h2>
                    <p><strong>Location:</strong> ${temple.location}</p>
                    <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                    <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
                </div>
            `;
            container.appendChild(card);
        });
    };

    const filterTemples = (criteria) => {
        let filteredTemples = temples;
        switch (criteria) {
            case 'old':
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
                titleName.innerHTML = 'Old Temples';
                break;
            case 'new':
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
                titleName.innerHTML = 'New Temples';
                break;
            case 'large':
                filteredTemples = temples.filter(temple => temple.area > 90000);
                titleName.innerHTML = 'Large Temples';
                break;
            case 'small':
                filteredTemples = temples.filter(temple => temple.area < 10000);
                titleName.innerHTML = 'Small Temples';
                break;
            default:
                filteredTemples = temples;
                titleName.innerHTML = 'All Temples';
                break;
        }
        displayTemples(filteredTemples);
    };

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(nav => nav.classList.remove('active'));
            e.target.classList.add('active');
            filterTemples(e.target.id);
        });
    });

    filterTemples('home-nav');
});


// Footer information
document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;
    const copyrightYearElement = document.getElementById('currentyear');
    const lastModifiedElement = document.getElementById('lastModified');
    copyrightYearElement.textContent = currentYear;
    lastModifiedElement.textContent = `Last update: ${lastModified}`;
});


const grid = document.querySelector(".container.home");
applyFilter("home"); // para render inicial
document.addEventListener('DOMContentLoaded', () => {

    const aboutMyself = document.querySelector('.about-myself');
    if (aboutMyself) {
        const aboutMyselfContent = `
            <h2>Transitioning to Software Development</h2>
            <p>
               I started my professional path as a <strong>freelancer</strong>, working on creative digital projects that combined design, organization, and technology.
            </p> 
            <p>
             I completed a <strong>Web Design course at UTN (National Technological University, Argentina)</strong>, where I learned structure, layout, and visual balance for modern web interfaces.
            </p>     
            <p>
                 I also studied <strong>Fashion Design at a private institute</strong>, which helped me develop creativity, color sense, and aesthetic vision — skills that now enhance my software projects.
            </p>
            <p>    
                 I am currently studying <strong>Software Development at Brigham Young University–Idaho</strong>, focusing on JavaScript, C#, and MySQL to create functional and elegant web applications.
            </p>
        `;
        aboutMyself.innerHTML = aboutMyselfContent;
    }

    const education = document.querySelector('.education');
    if (education) {
        const educationContent = `
            <h2>Education</h2>
            <p>
                I’m Maria Sol Caracciolo, a creative and curious freelancer who turned a love for design and problem-solving into a path in software development.
Through freelance projects, I’ve learned how to mix creativity, organization, and technology to bring ideas to life.
I enjoy turning small ideas into real projects that connect people and make digital experiences simple and beautiful.
            </p>
            <p>
                My education
                Software Development – Brigham Young University–Idaho
Learning JavaScript, C#, MySQL, and web development fundamentals.

Web Design Course – UTN, Argentina
Strengthened my sense of structure, color, and visual harmony in digital projects.

Fashion Design – Private Institute
Explored creativity and aesthetic composition, skills that now enhance my work as a developer.
            </p>
            <p>    
                My goal is to grow as a software developer who builds projects with meaning and creativity.
I want to keep learning, exploring new technologies, and creating websites that are both useful and inspiring.
            </p>
           
        `;
        education.innerHTML = educationContent;
    }
});
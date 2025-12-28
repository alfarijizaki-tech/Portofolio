const sections = document.querySelectorAll("section");
const skillSection = document.getElementById("skills");
const skillItems = document.querySelectorAll(".skills span");

window.addEventListener("scroll", () => {

  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.classList.add("show");
    }
  });


  const skillTop = skillSection.getBoundingClientRect().top;
  if (skillTop < window.innerHeight - 100) {
    skillItems.forEach((skill, index) => {
      setTimeout(() => {
        skill.classList.add("show");
      }, index * 150);
    });
  }

});

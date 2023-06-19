var images = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png"
  ];

 

  var headings = [
    "C Language",
    "C++ Language",
    "HTML","CSS","Javascript","MySql"
  ];

  var paragraphs = [
    "Throughout my exploration of C, I delved into its core concepts, syntax, and features. I learned how to write efficient and concise code by understanding variables, data types, operators, and control structures.",

    "Throughout my exploration of C++, I acquired a solid grasp of its core concepts, syntax, and features. I learned how to create classes and objects, encapsulating data and behavior into cohesive units.",

    "During my exploration of HTML, I acquired a solid grasp of its core concepts and syntax. I learned how to create the structure of a web page using various HTML elements such as headings, paragraphs, lists, and tables.",

    "Throughout my exploration of CSS, I acquired a solid grasp of its core concepts and syntax. I learned how to apply styles to HTML elements, enhancing the visual appeal and layout of web pages. By utilizing selectors, properties, and values, ",

    "Throughout my exploration of JavaScript, I acquired a solid grasp of its core concepts, syntax, and features. I learned how to manipulate the Document Object Model (DOM), which represents the structure and content of a web page, ",

    "Throughout my exploration of MySQL, I acquired a solid grasp of its core concepts and syntax. I learned how to design and create databases, define tables, and establish relationships between them."
  ];

  var slider = document.querySelector(".slider");
  var slide = slider.querySelector(".slide");
  var img = slide.querySelector("img");
  var heading = slide.querySelector("h1");
  var para = slide.querySelector("p");
  var currentSlide = 0;

  function changeSlide() {
    slide.style.opacity = 0;

    setTimeout(function() {
      img.src = images[currentSlide];
      heading.textContent = headings[currentSlide];
      para.textContent = paragraphs[currentSlide];
      slide.style.opacity = 1;
      currentSlide = (currentSlide + 1) % images.length;
    }, 500);

    setTimeout(changeSlide, 5000);
  }

  let sections=document.querySelectorAll('section');
  let navLinks=document.querySelectorAll('header nav a');

  window.onload = changeSlide;

  window.onscroll=()=>{
    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);
  }
  window.onscroll=()=>{
    sections.forEach(sec => {
        let top=window.scrollY;
        let offset=sec.offsetTop-100;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
        if(top>=offset && top<offset+height){

            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            })
            sec.classList.add('show-animate');
        }
        // else{
        //     sec.classList.remove('show-animate');
        // }
        
    });
    menuIcon.classList.remove('bx-x');
    navBar.classList.remove('active');
  }


  let menuIcon=document.querySelector('#menu-icon');
  let navBar=document.querySelector('.navbar');

  menuIcon.onclick= ()=>{
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
  }
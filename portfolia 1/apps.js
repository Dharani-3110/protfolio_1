// ================================
// PORTFOLIO JAVASCRIPT
// ================================

document.addEventListener("DOMContentLoaded", () => {

    // --------------------------------
    // 1. Navbar active link
    // --------------------------------

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navLinks.forEach(item => {
                item.classList.remove("active");
            });

            link.classList.add("active");

        });

    });


    // --------------------------------
    // 2. Robot eye movement
    // --------------------------------

    const eyes = document.querySelectorAll(".eye span");

    document.addEventListener("mousemove", (event) => {

        const x = (event.clientX / window.innerWidth - 0.5) * 8;
        const y = (event.clientY / window.innerHeight - 0.5) * 5;

        eyes.forEach(eye => {

            eye.style.transform =
                `translate(${x}px, ${y}px)`;

        });

    });


    // --------------------------------
    // 3. Scroll reveal animation
    // --------------------------------

    const revealElements = document.querySelectorAll(
        ".section, .skill-card, .project-card"
    );

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    revealElements.forEach(element => {
        element.classList.add("hidden");
        observer.observe(element);
    });


    // --------------------------------
    // 4. Current year in footer
    // --------------------------------

    const footerText = document.querySelector("footer p");

    if (footerText) {

        const currentYear = new Date().getFullYear();

        footerText.innerHTML =
            `© ${currentYear} Dharani Kuppam | AI & Full Stack Developer`;

    }


    // --------------------------------
    // 5. Robot AI core interaction
    // --------------------------------

    const aiCore = document.querySelector(".ai-core");

    if (aiCore) {

        aiCore.addEventListener("click", () => {

            aiCore.classList.add("active-core");

            aiCore.innerHTML = "ONLINE";

            setTimeout(() => {

                aiCore.innerHTML = "AI";
                aiCore.classList.remove("active-core");

            }, 2000);

        });

    }


    // --------------------------------
    // 6. Project card click effect
    // --------------------------------

    const projectCards =
        document.querySelectorAll(".project-card");

    projectCards.forEach(card => {

        card.addEventListener("click", () => {

            projectCards.forEach(item => {
                item.classList.remove("selected");
            });

            card.classList.add("selected");

        });

    });


    // --------------------------------
    // 7. Typing effect
    // --------------------------------

    const roleText =
        document.querySelector(".hero h2");

    if (roleText) {

        const originalText =
            roleText.textContent;

        roleText.textContent = "";

        let index = 0;

        function typeText() {

            if (index < originalText.length) {

                roleText.textContent +=
                    originalText.charAt(index);

                index++;

                setTimeout(typeText, 70);

            }

        }

        typeText();

    }


    // --------------------------------
    // 8. Smooth button click
    // --------------------------------

    document.querySelectorAll('a[href^="#"]')
        .forEach(link => {

            link.addEventListener("click", function(event) {

                const target =
                    document.querySelector(
                        this.getAttribute("href")
                    );

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            });

        });

});
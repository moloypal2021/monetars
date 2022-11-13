function flexToggle(id) {
     if (id.classList.contains("hidden")) {
          id.classList.add("flex");
          id.classList.remove("hidden");
     } else {
          id.classList.add("hidden");
          id.classList.remove("flex");
     }
}

function blockToggle(id) {
     if (id.classList.contains("hidden")) {
          id.classList.add("block");
          id.classList.remove("hidden");
     } else {
          id.classList.add("hidden");
          id.classList.remove("block");
     }
}

function accordionToggle(btn, id) {
     const sectionRoles = id.getAttribute("role");
     const sections = document.querySelectorAll(`[role="${sectionRoles}"]`);
     for (let i = 0; i < sections.length; i++) {
          const section = sections[i];
          section.classList.add("hidden");
          section.classList.remove("block");
     }

     const buttonRoles = btn.getAttribute("role");
     const buttons = document.querySelectorAll(`[role="${buttonRoles}"]`);
     for (let i = 0; i < buttons.length; i++) {
          const button = buttons[i];
          if (button.classList.contains("bg-blue-800")) {

               button.classList.add("bg-white", "text-black");
               button.classList.remove("bg-blue-800", "text-white");

               btn.classList.remove("bg-white", "text-black");
               btn.classList.add("bg-blue-800", "text-white");
          }
          else {
               button.classList.add("text-neutral-500", "border-neutral-500");
               button.classList.remove("text-blue-800", "border-blue-800");

               btn.classList.add("text-blue-800", "border-blue-800");
               btn.classList.remove("text-neutral-500", "border-neutral-500");
          }
     }

     id.classList.add("block");
     id.classList.remove("hidden");
}

function accordionToggle2(btn, id) {
     const sectionRoles = id.getAttribute("role");
     const sections = document.querySelectorAll(`[role="${sectionRoles}"]`);
     for (let i = 0; i < sections.length; i++) {
          const section = sections[i];
          section.classList.add("hidden");
          section.classList.remove("block");
     }

     const buttonRoles = btn.getAttribute("role");
     const buttons = document.querySelectorAll(`[role="${buttonRoles}"]`);
     for (let i = 0; i < buttons.length; i++) {
          const button = buttons[i];
          button.classList.add("text-neutral-500", "border-transparent");
          button.classList.remove("text-blue-800", "border-blue-800");

          btn.classList.add("text-blue-800", "border-blue-800");
          btn.classList.remove("text-neutral-500", "border-transparent");
     }

     id.classList.add("block");
     id.classList.remove("hidden");
}

function unlockToggle(btn, id) {
     const track = document.getElementById("track")
     if (track.classList.contains("bg-blue-800")) {
          track.classList.remove("bg-blue-800");
     } else {
          track.classList.add("bg-blue-800");
     }

     const profiles = document.querySelectorAll(`[role="profile"]`);
     for (let i = 0; i < profiles.length; i++) {
          const profile = profiles[i];
          profile.classList.add("hidden");
          profile.classList.remove("block");
     }
     const buttons = document.querySelectorAll(`[role="profileBtn"]`);
     for (let i = 0; i < buttons.length; i++) {
          const button = buttons[i];
          button.classList.add("hidden");
          button.classList.remove("block");
     }

     id.classList.remove("hidden");
     btn.classList.remove("hidden");
}

function footerSink() {
     const footer = document.querySelector("footer");
     const sections = footer.querySelectorAll(".footer-section");

     sections.forEach(section => {
          if (section.style.width === "100%") {
               section.style.width = "96%";
          } else {
               section.style.width = "100%";
          }
     })
}
// quay lai dau trang
const quaylai = document.querySelector(".btnquay");
quaylai.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const thuThachModalElements = document.querySelectorAll(".thuthach-modal");

function xemthem(trangThai, a) {
  let targetClass = `noidung${a}`;
  thuThachModalElements.forEach((element) => {
    if (trangThai == "mo") {
      // ["noidung2", "flex-col", "pl-10", "pb-5", "pr-5", "pt-2", "thuthach-modal"]
      if (element.classList.contains(targetClass)) {
        element.style.display = "flex";
      } else {
        element.style.display = "none";
      }
    } else {
      element.style.display = "none";
    }
  });
}

// thanh mennu
// const toggleButton = document.getElementById("toggleButton");
// const menu = document.getElementById("header__ul");

// toggleButton.addEventListener("click", () => {
//   if(menu.classList.contains("show")) {
//     menu.classList.remove("show");
//     requestAnimationFrame(() => {
//       menu.querySelectorAll("li").forEach((el)=> {
//         el.style.right="-100%"
//       });
//     })

//   } else {
//     menu.classList.add("show");
//     requestAnimationFrame(() => {
//       menu.querySelectorAll("li").forEach((el)=> {
//         el.style.right="0%"
//       });
//     })

//   }

// });
const toggleButton = document.getElementById("toggleButton");
const menu = document.querySelector("#header__ul");

toggleButton.addEventListener("click", () => {
  // menu.style.display = menu.style.display === "flex" ? "none" : "flex";
  // document.getElementById("menuButton").addEventListener("click");
  menu.classList.toggle("show");
});

let quaylaiElement = document.querySelector(".quaylai");

window.onscroll = function () {
  console.log(window.scrollY);

  // Kiểm tra nếu người dùng đang ở đầu trang
  if (window.scrollY === 0) {
    // Ẩn nút "quay lại" khi ở đầu trang
    quaylaiElement.classList.add("hidden");
    quaylaiElement.classList.remove("flex");
  } else {
    // Hiện nút "quay lại" khi cuộn xuống
    if (quaylaiElement.classList.contains("hidden")) {
      quaylaiElement.classList.remove("hidden");
    }
    if (!quaylaiElement.classList.contains("flex")) {
      quaylaiElement.classList.add("flex");
    }
  }
};
// chay chu
new Typed("#lichsu > span:first-child", {
  strings: ["Tổng quan <br> Lịch sử Việt Nam"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 2000,
});
//hieu uwng chuyeenr ddoongj

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal("#timeline  .container-noidung-12:nth-child(2n+1)", {
  ...scrollRevealOption,
  interval: 150,
  origin: "left",
});

ScrollReveal().reveal("#timeline .container-noidung-12:nth-child(2n)", {
  ...scrollRevealOption,
  interval: 150,
  origin: "right",
});
ScrollReveal().reveal("#trangchu, #PREHISTORIC16", {
  ...scrollRevealOption,
  interval: 150,
  origin: "bottom",
});

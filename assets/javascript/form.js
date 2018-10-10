(function() {
  const inputs = document.forms[0].elements;
  [...inputs].forEach(input => {
    input.addEventListener(
      "change",
      function(e) {
        e.target.parentElement.classList.toggle("checked");
      },
      false
    );
  });

  //   const button = document.getElementById("submit");
  //   button.addEventListener(
  //     "click",
  //     function(e) {
  //       e.preventDefault();
  //       console.log("clicked", e);
  //       const questions = document.querySelectorAll(".question");
  //       questions.forEach(question => {
  //         if (window.getComputedStyle(question).display === "none") {
  //           question.style.display = "flex";
  //         } else {
  //           question.style.display = "none";
  //         }
  //       });
  //     },
  //     false
  //   );
})();

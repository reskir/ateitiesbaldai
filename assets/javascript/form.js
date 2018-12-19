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
})();

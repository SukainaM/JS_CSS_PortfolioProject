(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})()

function onClick(element) {
    document.getElementById("image").src = element.src;
    document.getElementById("cardModal").style.display = "block";
    // OnClick="Add_Text();
  };

  function Add_Text(){
    var Elm = ocument.getElementById("Span_1");
    var TheText = "portfolio desc test";
    Elm.innerHTML = TheText;
  }
  

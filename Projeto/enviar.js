const editar = document.getElementById("editar");
var modal = document.getElementById("modalMensagem");
var previa = document.getElementById("previa");
var btnSalvar = document.getElementById("btnSalvar");
var copyNome = document.getElementById("nomeCopy");
var copyProduto = document.getElementById("produtoCopy");
var copy = document.getElementById("copy");
var textoFormatado = "";
var texto =
  "Olá [nome], boa tarde! \n \n Notamos que seu estoque do produto [produto] está acabando, gostaria de repor o estoque? \n\n Atenciosamente grupo LINX";

window.onload = function () {
  var teste = document.querySelectorAll("tr");

  copyNome.addEventListener("click", function () {
    copy.style.opacity = 1;
    setTimeout(() => {
      copy.style.opacity = 0;
    }, 3000);
    document.getElementById("nomeText").select();
    document.execCommand("copy");
  });

  copyProduto.addEventListener("click", function () {
    copy.style.opacity = 1;
    setTimeout(() => {
      copy.style.opacity = 0;
    }, 3000);
    document.getElementById("produtoText").select();
    document.execCommand("copy");
  });

  editar.addEventListener("click", () => {
    previa.value = texto;
    modal.classList.toggle("modalMensagemShow");
  });

  btnSalvar.addEventListener("click", () => {
    texto = previa.value;
    modal.classList.toggle("modalMensagemShow");
  });

  teste.forEach((link, key) => {
    if (key != 0) {
      link.setAttribute("id", `pessoa${key}`);
      link.children[3].children[0].setAttribute("data-marker", `pessoa${key}`);
    }
  });
};

document.querySelectorAll("tr td button").forEach((link) => {
  link.onclick = function () {
    const pessoa = link.getAttribute("data-marker");
    const nome = document.getElementById(pessoa).children[0].innerHTML;
    const telefone = document.getElementById(pessoa).children[1].innerHTML;
    const produto = document.getElementById(pessoa).children[2].innerHTML;

    textoFormatado = texto.replaceAll("[nome]", `${nome}`);
    textoFormatado = textoFormatado.replaceAll("[produto]", `${produto}`);

    let target = `https://web.whatsapp.com/send?phone=+550${encodeURIComponent(
      telefone
    )}&text=${encodeURIComponent(textoFormatado)}`;

    let a = document.createElement("a");
    a.target = "_blank";
    a.href = target;
    a.click();
  };
});

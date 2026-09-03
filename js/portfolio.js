const conteudo = document.getElementById("conteudo");
const btnSobre = document.getElementById("btn-sobre");
const btnProjetos = document.getElementById("btn-projetos");
const btnExperiencias = document.getElementById("btn-experiencias");
const btnContato = document.getElementById("btn-contato");
const menuNavegacao = document.getElementById("menu-navegacao");

emailjs.init({
    publicKey: "q1qk1MWNsuNka7HTy"
});


function mostrarInicio(perfil) {

    conteudo.innerHTML = `
        <div class="apresentacao">

            <div class="texto">

                <h1>Olá, eu sou Pedro</h1>

                <p>
                    Desenvolvedor e estudante de Engenharia de Software
                    na Pontifícia Universidade Católica de Minas Gerais.
                    Possuo interesse em desenvolvimento, principalmente
                    com as linguagens Java e JavaScript.
                    Meu principal objetivo é fazer aplicações que ajudem
                    a sociedade.
                </p>

            </div>

            <div class="circulo"></div>

        </div>
    `;
}


btnSobre.addEventListener("click", function () {
    mostrarInicio();
});


btnProjetos.addEventListener("click", function () {

    conteudo.innerHTML = `
        <div class="pagina">

            <h1>Projetos</h1>

            <p>
                Aqui estão alguns dos meus projetos.
            </p>
                <p class="item-vizualizavel"> <a href="https://github.com/N16Kss/Trabalho-de-SO"> Sistema do Banqueiro</a></p> 
                <p class="item-vizualizavel"> <a href="https://github.com/N16Kss/Segundo-trabalho-SO"> Trabalho sobre Paginação</a></p> 


        </div>
    `;

});


btnExperiencias.addEventListener("click", function () {

    conteudo.innerHTML = `
        <div class="pagina">

            <h1>Experiências</h1>

            <p>
               Ainda estou em busca de experiências
            </p>

        </div>
    `;

});


btnContato.addEventListener("click", function () {

    conteudo.innerHTML = `
        <div class="pagina contato">

            <h1>Contato</h1>

            <p>
                Entre em contato comigo:
            </p>

            <div class="icones-contato">

                <a
                    href="https://github.com/n16kss"
                    target="_blank"
                >
                    <i class="fa-brands fa-github"></i>
                    <span>GitHub</span>
                </a>

                <a href="#" id="gmail">

                    <i class="fa-solid fa-envelope"></i>

                    <span>Gmail</span>

                </a>

            </div>


            <div class="formulario-contato">

                <h2>Envie uma mensagem</h2>

                <form id="form-contato">

                    <input
                        type="text"
                        name="name"
                        placeholder="Seu nome"
                        required
                    >

                    <input
                        type="email"
                        name="email"
                        placeholder="Seu email"
                        required
                    >

                    <textarea
                        name="message"
                        placeholder="Sua mensagem"
                        required
                    ></textarea>

                    <button type="submit">
                        Enviar mensagem
                    </button>

                </form>

            </div>

        </div>
    `;


    const formulario = document.getElementById("form-contato");


    formulario.addEventListener("submit", function(event) {

        event.preventDefault();


        const campoTime = document.createElement("input");

        campoTime.type = "hidden";
        campoTime.name = "time";
        campoTime.value = new Date().toLocaleString("pt-BR");

        formulario.appendChild(campoTime);


        emailjs.sendForm(
            "service_fxfu6dn",
            "template_ts8muzm",
            formulario
        )

        .then(function() {

            alert("Mensagem enviada com sucesso!");

            formulario.reset();

        })

        .catch(function(error) {

            console.error("Erro:", error);

            alert("Erro ao enviar mensagem.");

        });

    });

});





function mostrarSelecao() {

     menuNavegacao.style.display = "none";

    conteudo.innerHTML = `
        <div class="selecao">

            <h1>Bem-vindo ao meu portfólio</h1>

            <p>O que você procura?</p>

            <div class="opcoes">

                <button id="opcao-recrutador" class="opcao">
                    <i class="fa-solid fa-briefcase"></i>
                    Recrutador
                </button>

                <button id="opcao-visitante" class="opcao">
                    <i class="fa-solid fa-user"></i>
                    Visitante
                </button>

                <button id="opcao-academico" class="opcao">
                    <i class="fa-solid fa-graduation-cap"></i>
                    Comunidade Acadêmica
                </button>

            </div>

        </div>
    `;

    document.getElementById("opcao-recrutador")
        .addEventListener("click", function() {
            menuNavegacao.style.display = "block";
            btnExperiencias.click();
        });

    document.getElementById("opcao-visitante")
        .addEventListener("click", function() {
            menuNavegacao.style.display = "block";
            btnSobre.click();
        });

    document.getElementById("opcao-academico")
        .addEventListener("click", function() {
            menuNavegacao.style.display = "block";
            btnProjetos.click();
        });
}














mostrarInicio();
mostrarSelecao();
const pixels        = 16;
const grid          = document.getElementById("grid");
const buttons       = document.getElementsByClassName("button");
const eraseButton   = document.getElementById("eraser");
const customButton  = document.getElementById("custom");

eraseButton.addEventListener("click", () => {descolorirGrid()});
customButton.addEventListener("click", () => {

    let numPixels = Number(prompt("Insira um número entre 1 e 100 para definir a quantidade de Pixels no quadro."));
    
    if(numPixels == 0 || isNaN(numPixels))
    {
        return alert("Você não inseriu um valor numérico valido.");

    } else if(numPixels < 1 || numPixels > 100) {
        
        return alert("Você inseriu um número fora do intervalo entre 1 e 100.");
    }

    apagarGrid();
    gerarPixels(numPixels);
})

for(const button of buttons)
{
    button.addEventListener("click", (button) => {
        
        apagarGrid();
        gerarPixels(button.target.id)}
    );
}

gerarPixels(pixels);

function gerarPixels(numPixels)
{
    for(i = 1; i <= numPixels; i++)
    {
        const novaLinha = document.createElement("div");
        
        novaLinha.setAttribute("class", "linha");

        for(j = 1; j <= numPixels; j++)
        {
            const novoPixel = document.createElement("div");
            
            novoPixel.setAttribute("class", "pixel");
            novoPixel.addEventListener("mouseover", (event) => {event.target.classList.add("permanent-color")});

            novaLinha.appendChild(novoPixel);            
        }

        grid.appendChild(novaLinha);
    }
}

function apagarGrid()
{
    grid.replaceChildren();
}

function descolorirGrid()
{
    let currentPixels = document.getElementsByClassName("pixel");

    for(const currentPixel of currentPixels)
    {
        currentPixel.classList.remove("permanent-color");
    }
}
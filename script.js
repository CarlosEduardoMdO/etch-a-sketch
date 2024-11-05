const pixels = 16;
const grid   = document.getElementById("grid");

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

            novaLinha.appendChild(novoPixel);            
        }

        grid.appendChild(novaLinha);
    }
}
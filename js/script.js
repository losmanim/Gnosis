let btnRelFil = document.getElementById('btn-mais');
let resutado = document.querySelector('.result');

btnRelFil.style.padding = '0.7rem';
btnRelFil.style.marginTop = '0.5rem';
btnRelFil.style.border = 'none';
btnRelFil.style.borderRadius = '0.5rem';
btnRelFil.style.cursor = 'pointer';

btnRelFil.addEventListener('click', () => {
    resutado.innerHTML = `<p>O gnosticismo é um conjunto de correntes filosófico-religiosas sincréticas oriundas da região do mediterrâneo durante os séculos I e II d.C., alicerçado em interpretações de relatos bíblicos e apócrifos pelo viés filosófico médio-platônico e de cultos de mistérios greco-romanos e orientais. Mesclara-se ao cristianismo primitivo dos primeiros séculos desta era, e fora condenado como heresia após um período de prestígio entre os intelectuais cristãos.</p>
    <a href="https://pt.wikipedia.org/wiki/Gnosticismo" target="_blank">Saiba mais</a>`;
    resutado.style.display = 'flex';
    resutado.style.margin = '1rem';
    resutado.style.width = '80%';
    resutado.style.padding = '1rem';
    resutado.style.borderRadius = '0.5rem';
    resutado.style.backgroundColor = 'rgba(0, 0, 0, 0.889)';
    resutado.style.color = 'wheat';
    resutado.style.alignItems = 'center';
    resutado.style.justifyContent = 'center';
    resutado.style.fontSize = '1.5rem';
    resutado.style.textAlign = 'justify';
    resutado.style.flexDirection = 'column';    
})

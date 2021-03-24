var itensInfo = [
    `<ul id="cxitem">
    <h2>Suporte para Notebook - 0100</h2>
    <figure>
        <img src="0100.png">
        <figcaption>
            <button>Saber mais...</button>
        </figcaption>
    </figure>
</ul>`,
    `<ul id="cxitem">
    <h2>Suporte para Notebook - 0100</h2>
    <figure>
        <img src="0100.png">
        <figcaption>
            <button>Saber mais...</button>
        </figcaption>
    </figure>
</ul>`,
    `<ul id="cxitem">
    <h2>Suporte para Notebook - 0100</h2>
    <figure>
        <img src="0100.png">
        <figcaption>
            <button>Saber mais...</button>
        </figcaption>
    </figure>
</ul>`,
    `<ul id="cxitem">
    <h2>Suporte para Notebook - 0100</h2>
    <figure>
        <img src="0100.png">
        <figcaption>
            <button>Saber mais...</button>
        </figcaption>
    </figure>
</ul>`,
    `<ul id="cxitem">
    <h2>Suporte para Notebook - 0100</h2>
    <figure>
        <img src="0100.png">
        <figcaption>
            <button>Saber mais...</button>
        </figcaption>
    </figure>
</ul>`,
    `<ul id="cxitem">
    <h2>Suporte para Notebook - 0100</h2>
    <figure>
        <img src="0100.png">
        <figcaption>
            <button>Saber mais...</button>
        </figcaption>
    </figure>
</ul>`,
]
itensInfo.sort()

var itensCell = [
    `<ul id="cxitem">
    <h2>Cabo nylon i2GO 2m - 0101</h2>
    <figure>
        <img src="0101.png">
        <figcaption>
            <button>Saber mais...</button>
        </figcaption>
    </figure>
</ul>`,
    `<ul id="cxitem">
    <h2>Cabo nylon i2GO 2m - 0101</h2>
    <figure>
        <img src="0101.png">
        <figcaption>
            <button>Saber mais...</button>
        </figcaption>
    </figure>
</ul>`,
    `<ul id="cxitem">
    <h2>Cabo nylon i2GO 2m - 0101</h2>
    <figure>
        <img src="0101.png">
        <figcaption>
            <button>Saber mais...</button>
        </figcaption>
    </figure>
</ul>`,
    `<ul id="cxitem">
    <h2>Cabo nylon i2GO 2m - 0101</h2>
    <figure>
        <img src="0101.png">
        <figcaption>
            <button>Saber mais...</button>
        </figcaption>
    </figure>
</ul>`,
    `<ul id="cxitem">
    <h2>Cabo nylon i2GO 2m - 0101</h2>
    <figure>
        <img src="0101.png">
        <figcaption>
            <button>Saber mais...</button>
        </figcaption>
    </figure>
</ul>`,
    `<ul id="cxitem">
    <h2>Cabo nylon i2GO 2m - 0101</h2>
    <figure>
        <img src="0101.png">
        <figcaption>
            <button>Saber mais...</button>
        </figcaption>
    </figure>
</ul>`,
]
itensCell.sort()

setTimeout(loadItens,0)

var itensJob = [
    `<ul id="cxitem">
    <h2>Visita Técnica - 0100</h2>
    <figure>
        <figcaption>
            <button>Saber mais...</button>
        </figcaption>
    </figure>
</ul>`,
    `<ul id="cxitem">
    <h2>Formatação sem Backup - 0102</h2>
    <figure>
        <figcaption>
            <button>Saber mais...</button>
        </figcaption>
    </figure>
</ul>`,
    `<ul id="cxitem">
    <h2>Formatação com Backup - 0100</h2>
    <figure>
        <figcaption>
            <button>Saber mais...</button>
        </figcaption>
    </figure>
</ul>`,
]
itensJob.sort()
function loadItens(){
    var info = document.getElementById("cxinfo")
    info.innerHTML+=itensInfo
    var cell = document.getElementById("cxCell")
    cell.innerHTML+=itensCell
    var job = document.getElementById("cxJob")
    job.innerHTML+=itensJob
}
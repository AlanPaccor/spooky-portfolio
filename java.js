document.addEventListener("DOMContentLoaded", function () {
    wrapWordsWithSpan("highlightText");
});

function wrapWordsWithSpan(elementId) {
    const textContainer = document.getElementById(elementId);
    const words = textContainer.textContent.split(/\s+/);

    let newText = "";

    words.forEach((word, index) => {
        const span = document.createElement("span");
        span.textContent = word + " ";
        
        if (index % 2 === 0) {
            span.classList.add("highlight-word");
        } else {
            span.classList.add("random-word");
        }

        newText += span.outerHTML;
    });

    textContainer.innerHTML = newText;

    const spans = textContainer.querySelectorAll('span');

    spans.forEach((span, index) => {
        span.addEventListener('mouseenter', () => {
            span.classList.add('hovered');
            spans[index - 1]?.classList.add('hovered');
            spans[index + 1]?.classList.add('hovered');
        });

        span.addEventListener('mouseleave', () => {
            spans.forEach(s => {
                s.classList.remove('hovered');
            });
        });
    });
}
document.addEventListener('DOMContentLoaded', function () {
    var secretText = document.querySelector('.secretText');
    var words = secretText.innerText.split(/\s+/);

    secretText.innerHTML = words.map(function (word) {
        return `<a class="secretHover" href="#">${word}</a>`;
    }).join(' ');
});
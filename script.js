document.addEventListener("DOMContentLoaded", () => {
    const el = document.querySelector(".typing");
    const text = el.innerHTML.trim();
    el.innerHTML = "";

    let i = 0;

    function type() {
        if (i < text.length) {
            el.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 25);
        }
    }

    type();
});

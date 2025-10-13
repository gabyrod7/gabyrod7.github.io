// Smoothly scroll the right column to the selected section
document.addEventListener("DOMContentLoaded", () => {
    const right = document.getElementById("right");

    document.querySelectorAll(".nav button").forEach((btn) => {
    btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-target");
        const el = right.querySelector("#" + id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    });
});

const toggleSwitch = document.getElementById("toggleSwitch");
const labelStatus = document.getElementById("status");

toggleSwitch.addEventListener("change", () => {
    labelStatus.textContent = toggleSwitch.checked
        ? "Não repetir número"
        : "Repetir número";
});

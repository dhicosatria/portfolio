document.addEventListener("DOMContentLoaded", async () => {
  try {
    const res = await fetch("https://dhico.goatcounter.com/counter.json");
    const data = await res.json();

    document.getElementById("gc-total").textContent =
      data.count ?? "0";

    document.getElementById("gc-page").textContent =
      data.paths?.[location.pathname] ?? "1";
  } catch (e) {
    document.getElementById("gc-total").textContent = "—";
    document.getElementById("gc-page").textContent = "—";
  }
});

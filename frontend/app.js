const API_BASE = "http://localhost:8000";

document.getElementById("load-btn").addEventListener("click", async () => {
  const list = document.getElementById("item-list");
  list.innerHTML = "<li>Loading...</li>";

  try {
    const res = await fetch(`${API_BASE}/items`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const items = await res.json();

    list.innerHTML = items
      .map((item) => `<li>#${item.id} — ${item.name}</li>`)
      .join("");
  } catch (err) {
    list.innerHTML = `<li style="color:red">Error: ${err.message}</li>`;
  }
});

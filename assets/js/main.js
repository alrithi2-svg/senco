// ✅ عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      name: "ساعة ذكية",
      price: "299 ر.س",
      image: "assets/images/placeholder.png"
    },
    {
      name: "سماعة بلوتوث",
      price: "199 ر.س",
      image: "assets/images/placeholder.png"
    },
    {
      name: "نظارة شمسية",
      price: "149 ر.س",
      image: "assets/images/placeholder.png"
    },
    {
      name: "حقيبة جلد أنيقة",
      price: "349 ر.س",
      image: "assets/images/placeholder.png"
    }
  ];

  const grid = document.getElementById("productGrid");

  if (!grid) return; // إذا الصفحة لا تحتوي على المنتجات، تجاهل

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="product-info">
        <h4>${product.name}</h4>
        <p class="price">${product.price}</p>
      </div>
    `;

    // إضافة الحدث عند الضغط على المنتج ← يذهب لصفحة التفاصيل
    card.addEventListener("click", () => {
      localStorage.setItem("selectedProduct", JSON.stringify(product));
      window.location.href = "product.html";
    });

    grid.appendChild(card);
  });
});

document.addEventListener("DOMContentLoaded", function () {
    const categoryList = document.getElementById("categoryList");
    const cards = document.querySelectorAll(".category-card");
    const nextButton = document.querySelector(".next");
    const prevButton = document.querySelector(".prev");

    const pageSize = 5;
    let firstCard = 0;

    function showCategories() {
        categoryList.classList.add("is-ready");

        cards.forEach(function (card, index) {
            const visible = index >= firstCard && index < firstCard + pageSize;
            card.classList.toggle("is-visible", visible);
        });

        prevButton.disabled = firstCard === 0;
        nextButton.disabled = firstCard + pageSize >= cards.length;
    }

    nextButton.addEventListener("click", function () {
        if (firstCard + pageSize < cards.length) {
            firstCard += pageSize;
            showCategories();
        }
    });

    prevButton.addEventListener("click", function () {
        if (firstCard > 0) {
            firstCard -= pageSize;
            showCategories();
        }
    });

    showCategories();
});
document.getElementById('searchInput').addEventListener('input', function () {
    let query = this.value;
    let box = document.getElementById('suggestionsBox');

    if (query.length > 2) {
        // 3 harf girildiğinde Controller'daki GetSuggestions metoduna git
        fetch(`/Library/GetSuggestions?q=${query}`)
            .then(response => response.json())
            .then(data => {
                box.innerHTML = '';
                if (data.length > 0) {
                    data.forEach(item => {
                        let li = document.createElement('li');
                        li.textContent = item.kitapAdi; // C#'tan gelen model özelliği
                        li.onclick = () => {
                            // Tıklanan kitabın sayfasına yönlendir
                            window.location.href = `/Library/${item.actionAdi}`;
                        };
                        box.appendChild(li);
                    });
                    box.style.display = 'block';
                } else {
                    box.style.display = 'none';
                }
            });
    } else {
        box.style.display = 'none'; // Kutu boşsa veya 3 harften azsa gizle
    }
});

// Sayfada başka bir yere tıklanınca öneri kutusunu kapat
document.addEventListener('click', function (e) {
    if (e.target.id !== 'searchInput') {
        document.getElementById('suggestionsBox').style.display = 'none';
    }
});
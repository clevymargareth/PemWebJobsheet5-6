async function loadTableData(filename, columns, tableBodySelector, loadingSelector) {
    const tbody = document.querySelector(tableBodySelector);
    const loading = document.getElementById(loadingSelector);
    if (!tbody) return;

    if (loading) loading.style.display = "block";
    tbody.innerHTML = "";

    try {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        
        const res = await fetch("/data/books.json");
        if (!res.ok) {
            throw new Error("Failed to fetch data (status " + res.status + ")");
        }
        const items = await res.json();

        items.forEach(function (item) {
            const tr = document.createElement("tr");
            
            let htmlContent = "";
            columns.forEach(function (col) {
                htmlContent += "<td>" + (item[col] !== undefined ? item[col] : "") + "</td>";
            });

            htmlContent += 
                "<td>" +
                "<button type=\"button\">Edit</button> " +
                "<button type=\"button\" class=\"btn-delete\">Delete</button>" +
                "</td>";

            tr.innerHTML = htmlContent;
            tbody.appendChild(tr);
        });

        if (typeof initDeleteConfirm === "function") {
            initDeleteConfirm();
        }

    } catch (err) {
        tbody.innerHTML = 
            "<tr><td colspan=\"" + (columns.length + 1) + "\">Failed to load data: " + err.message + "</td></tr>";
    } finally {
        if (loading) loading.style.display = "none";
    }
}
document.addEventListener("DOMContentLoaded", function () {
    loadTableData(
        "../data/books.json", 
        ["isbn", "title", "author", "year", "stock", "category"], 
        ".table-responsive table tbody",
        "loading-indicator"
    );
});
    


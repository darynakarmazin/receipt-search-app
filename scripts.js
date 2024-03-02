function app() {
  const form = document.querySelector("form");
  const input = document.querySelector("input");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${data.search}`
    );
  });
}

function app() {
  const form = document.querySelector("form");
  const resultsWrapper = document.querySelector(".results-wrapper");
  const renderItem = (itemData) => {
    return `
        <div class="item-wrapper">
          <img src="${itemData.strMealThumb}" />
          <h3>${itemData.strMeal}</h3>
          <p>${itemData.strCategory}</p>
          <p>${itemData.strArea}</p>
          <p>${itemData.strInstructions}</p>
        </div>
      `;
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    resultsWrapper.innerHTML = "";
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${data.search}`
    );
    const responseData = await res.json();

    let content = ``;
    for (let item of responseData.meals) {
      content += renderItem(item);
    }

    resultsWrapper.innerHTML = content;
  });
}

app();

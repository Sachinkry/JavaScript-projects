getRandomMeal();

async function getRandomMeal() {
    const resp = await fetch(
        'https://www.themealdb.com/api/json/v1/1/random.php'
    );

    const respData = await resp.json();
    const randomMeal = respData.meals[0];

    console.log(randomMeal);

    addMeal(randomMeal, true);
}

async function getMealById() {
    const meal = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id);

}

async function getMealBySearch() {
    const meals = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + term);
}

addMeal(mealdata, random = false) {
    const meal = document.createElement('div');
    meal.classList.add('meal');

    meal.innerHTML = `
         <div class="meal-header">
         ${random ?}
             <span class="random">Random Recipe</span>
             <img src="https://www.themealdb.com/images/media/meals/tnwy8m1628770384.jpg" alt="">
         </div>
         <div class="meal-body">
             <h4>Veggie Vaggies</h4>
             <button class="fav-btn">
                 <i class="fa fa-heart"></i>
             </button>
         </div>
    `
}

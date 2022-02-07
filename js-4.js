//let color=document.getElementById("step2red");
var dishes = [
    {
        "id": 1,
        "name": "Chicken Burger",
        "restaurant": "Mc Donalds",
        "availableMeals": ["lunch", "dinner"]
    },
    {
        "id": 2,
        "name": "Ham Burger",
        "restaurant": "Mc Donalds",
        "availableMeals": ["lunch", "dinner"]
    },
    {
        "id": 3,
        "name": "Cheese Burger",
        "restaurant": "Mc Donalds",
        "availableMeals": ["lunch", "dinner"]
    },
    {
        "id": 4,
        "name": "Fries",
        "restaurant": "Mc Donalds",
        "availableMeals": ["lunch", "dinner"]
    },
    {
        "id": 5,
        "name": "Egg Muffin",
        "restaurant": "Mc Donalds",
        "availableMeals": ["breakfast"]
    },
    {
        "id": 6,
        "name": "Burrito",
        "restaurant": "Taco Bell",
        "availableMeals": ["lunch", "dinner"]
    },
    {
        "id": 7,
        "name": "Tacos",
        "restaurant": "Taco Bell",
        "availableMeals": ["lunch", "dinner"]
    },
    {
        "id": 8,
        "name": "Quesadilla",
        "restaurant": "Taco Bell",
        "availableMeals": ["lunch", "dinner"]
    },
    {
        "id": 9,
        "name": "Steak",
        "restaurant": "BBQ Hut",
        "availableMeals": ["dinner"]
    },
    {
        "id": 10,
        "name": "Yakitori",
        "restaurant": "BBQ Hut",
        "availableMeals": ["dinner"]
    },
    {
        "id": 11,
        "name": "Nankotsu",
        "restaurant": "BBQ Hut",
        "availableMeals": ["dinner"]
    },
    {
        "id": 12,
        "name": "Piman",
        "restaurant": "BBQ Hut",
        "availableMeals": ["dinner"]
    },
    {
        "id": 13,
        "name": "Vegan Bento",
        "restaurant": "Vege Deli",
        "availableMeals": ["lunch"]
    },
    {
        "id": 14,
        "name": "Coleslaw Sandwich",
        "restaurant": "Vege Deli",
        "availableMeals": ["breakfast"]
    },
    {
        "id": 15,
        "name": "Grilled Sandwich",
        "restaurant": "Vege Deli",
        "availableMeals": ["breakfast"]
    },
    {
        "id": 16,
        "name": "Veg. Salad",
        "restaurant": "Vege Deli",
        "availableMeals": ["lunch", "dinner"]
    },
    {
        "id": 17,
        "name": "Fruit Salad",
        "restaurant": "Vege Deli",
        "availableMeals": ["lunch", "dinner"]
    },
    {
        "id": 18,
        "name": "Corn Soup",
        "restaurant": "Vege Deli",
        "availableMeals": ["lunch", "dinner"]
    },
    {
        "id": 19,
        "name": "Tomato Soup",
        "restaurant": "Vege Deli",
        "availableMeals": ["lunch", "dinner"]
    },
    {
        "id": 20,
        "name": "Minestrone Soup",
        "restaurant": "Vege Deli",
        "availableMeals": ["lunch", "dinner"]
    },
    {
        "id": 21,
        "name": "Pepperoni Pizza",
        "restaurant": "Pizzeria",
        "availableMeals": ["lunch", "dinner"]
    },
    {
        "id": 22,
        "name": "Pepperoni Pizza",
        "restaurant": "Pizzeria",
        "availableMeals": ["lunch", "dinner"]
    },
    {
        "id": 23,
        "name": "Hawaiian Pizza",
        "restaurant": "Pizzeria",
        "availableMeals": ["lunch", "dinner"]
    },
    {
        "id": 24,
        "name": "Seafood Pizza",
        "restaurant": "Pizzeria",
        "availableMeals": ["lunch", "dinner"]
    },
    {
        "id": 25,
        "name": "Deep Dish Pizza",
        "restaurant": "Pizzeria",
        "availableMeals": ["dinner"]
    },
    {
        "id": 26,
        "name": "Chow Mein",
        "restaurant": "Panda Express",
        "availableMeals": ["lunch", "dinner"]
    },
    {
        "id": 27,
        "name": "Mapo Tofu",
        "restaurant": "Panda Express",
        "availableMeals": ["lunch", "dinner"]
    },
    {
        "id": 28,
        "name": "Kung Pao",
        "restaurant": "Panda Express",
        "availableMeals": ["lunch", "dinner"]
    },
    {
        "id": 29,
        "name": "Wontons",
        "restaurant": "Panda Express",
        "availableMeals": ["lunch", "dinner"]
    },
    {
        "id": 30,
        "name": "Garlic Bread",
        "restaurant": "Olive Garden",
        "availableMeals": ["breakfast", "lunch", "dinner"]
    },
    {
        "id": 31,
        "name": "Ravioli",
        "restaurant": "Olive Garden",
        "availableMeals": ["lunch", "dinner"]
    },
    {
        "id": 32,
        "name": "Rigatoni Spaghetti",
        "restaurant": "Olive Garden",
        "availableMeals": ["lunch", "dinner"]
    },
    {
        "id": 33,
        "name": "Fettucine Pasta",
        "restaurant": "Olive Garden",
        "availableMeals": ["lunch", "dinner"]
    }
]
if (localStorage.getItem("JSONdata") === null) {
    localStorage.setItem("JSONdata", JSON.stringify(dishes));
}
else {

}
//console.log(localStorage.getItem("JSONdata"))
//console.log(JSON.parse(localStorage.getItem("meal")))
//localStorage.clear();
function step1() {
    //restaurant = dishes;
    let meal = document.getElementById("Select").value;
    let selectpeople = document.getElementById("people").value;
    if (meal == "") {
        document.getElementById("Select").style.borderColor = "red";
        alert("Please select Any Meal")
        return false;
    }
    else if (selectpeople == "") {
        document.getElementById("people").style.borderColor = "red";
        alert("Please select No of People")
        return false;
    }
    else {
        
        document.getElementById("step1").onclick = function () { location.href = "step2.html" }
        step2()
        document.getElementById("Select").style.borderColor = "green";
        document.getElementById("people").style.borderColor = "green";
      
    }
}
function step2() {
    let dish = [];
    let rest=[];
    let food = [];
    let mealpeople = {};
    dish = JSON.parse(localStorage.getItem("JSONdata"))
    let meal = document.getElementById("Select").value;
    let selectpeople = document.getElementById("people").value;
    //console.log(dish)
    for (let i = 0; i < dish.length; i++) {
        for (let k = 0; k < dish[i].availableMeals.length; k++) {
            if (dish[i].availableMeals[k].includes(meal)) {
                rest.push(dish[i])
            }
        }
    }
    mealpeople.meal = meal;
    mealpeople.people = selectpeople;
    mealpeople.restauran="";
    mealpeople.dis="";
    food.push(mealpeople);
    localStorage.setItem("filter",JSON.stringify (rest))
    console.log(rest);
    localStorage.setItem("meal", JSON.stringify(food))
}






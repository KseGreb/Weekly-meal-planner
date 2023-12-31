
import { useEffect, useState, } from 'react';
import './App.css';
import MyList from './MyList';
import MyMealsAndIngredients from './MyMealsAndIngredients';
import uuid from 'react-uuid';

function App() {

  const [mealPlans, setMealsPlans] = useState(
    localStorage.mealPlans ? JSON.parse(localStorage.mealPlans) : []);
  const [selectedDay, setSelectedDay] = useState(false)

useEffect( () => {
  localStorage.setItem("mealPlans", JSON.stringify(mealPlans))
}, [mealPlans])

 const addMeal = () => {
  const newMeal = {
    title: "Today is...",
    id: uuid(),
    mealForADay: "",
    ingredients: "" 
  }
  setMealsPlans([newMeal, ...mealPlans])
  console.log(newMeal)
 }

 const deleteItem = (mealId) => {
  setMealsPlans(mealPlans.filter(({id})=> id !== mealId))
}

const updateDay = (myUptatedMeal) => {
  const updatedMeals = mealPlans.map((mealPlan) => {
    if (mealPlan.id === myUptatedMeal.id) {
      return myUptatedMeal;
    }
    return mealPlan;
  })
  setMealsPlans(updatedMeals)
}

const getActiveMeal = () => {
  return mealPlans.find(({id}) => id === selectedDay)
}

  return (
    <div className="App">
      <MyList 
        deleteItem={deleteItem} 
        mealPlans={mealPlans} 
        addMeal={addMeal}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        />
      <MyMealsAndIngredients 
        selectedDay={getActiveMeal()}
        updateDay={updateDay}/>
    </div>
  );
}

export default App;

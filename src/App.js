
import { useState } from 'react';
import './App.css';
import MyList from './MyList';
import MyMealsAndIngredients from './MyMealsAndIngredients';
import uuid from 'react-uuid';

function App() {

  const [mealPlans, setMealsPlans] = useState([]);
  const [selectedDay, setSelectedDay] = useState(false)

 const addMeal = () => {
  const newMeal = {
    title: "Today is...",
    id: uuid(),
    mealForADay: "" 
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
        selectedDay={selectedDay}
        updateDay={updateDay}/>
    </div>
  );
}

export default App;

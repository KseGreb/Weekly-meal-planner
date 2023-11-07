
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

  return (
    <div className="App">
      <MyList 
        deleteItem={deleteItem} 
        mealPlans={mealPlans} 
        addMeal={addMeal}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        />
      <MyMealsAndIngredients/>
    </div>
  );
}

export default App;

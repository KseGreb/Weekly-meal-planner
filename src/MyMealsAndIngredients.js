const MyMealsAndIngredients = () => {

    const addingDay = () =>{
        
    }

    return(
        <div  className="whole-plan">
            <div className="meal-editing">
                <input
                    type="text"
                    className="myInput"
                    placeholder="Today is..."
                    onChange={addingDay}
                />
                <textarea
                    placeholder="Write your meal plan here"
                />
                <textarea
                    placeholder="List of ingredients"
                />
            </div>
           
        </div>
    )
}
export default MyMealsAndIngredients;
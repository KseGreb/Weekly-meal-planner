const MyList = ({mealPlans, addMeal, deleteItem, selectedDay, setSelectedDay}) => {

    return(
        <div className="myPlanForWeek">
            <h1>Weekly Meal Plan Ideas</h1>
            <button className="button-add" onClick={addMeal}>ADD</button>
            
            <div>
                {mealPlans.map(({title, id, mealForADay}) => (
                    <div 
                        className={`meal ${id === selectedDay ? "selected" : "default"}`}
                        onClick={() => setSelectedDay(id)}
                        key={id}
                    >
                        <p className="title">{title}</p>
                        <p>{mealForADay.substring(0, 45)}</p>
                        <button className="button-delete" onClick={()=>deleteItem(id)}>DELETE</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default MyList;
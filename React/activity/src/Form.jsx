function handleFormSubmit(event){
    console.log("form was submitted")
    // event.preventDefault();
}

export default function Form() {
    return (
        <form onSubmit={handleFormSubmit}>
            <input placeholder="Write Your Name"/>
            <button>Submit</button>
        </form>
    )
}
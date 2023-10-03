import "./Main.css";

function Main() {
    return(
        <main>
            <h2>RESERVE A TABLE</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="firstName">First Name</label><br/>
                <input type="text" name="firstName" id="firstName"/><br/>
                <label htmlFor="lastName">Last Name</label><br/>
                <input type="text" name="lastName" id="lastName"/><br/>
                <label htmlFor="email">Email</label><br/>
                <input type="text" name="email" id="email" autoComplete="on"/><br/>
                <label htmlFor="date">Date</label><br/>
                <input type="date" name="date" id="date"/><br/>
                <label htmlFor="time">Time</label><br/>
                <input type="time" name="time" id="time"/><br/>
                <label htmlFor="diners">Number of Diners</label><br/>
                <input type="number" name="diners" id="diners" min="1" max="6"/><br/>
                <button type="submit">Submit</button>
            </form>
        </main>
    );
}

export default Main;
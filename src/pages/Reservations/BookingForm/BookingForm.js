import { useEffect, useState } from "react";
import "./BookingForm.css";

let today = new Date().toLocaleString();
today = new Date(today).toISOString().split('T')[0];

function BookingForm(props) {

    const { availableTimes, setAvailableTimes, submitForm } = props;

    const [date, setDate] = useState(null);
    const [dateInput, setDateInput] = useState(today);

    const [time, setTime] = useState(null);
    const [timeInput, setTimeInput] = useState(availableTimes[0]);

    const [guests, setGuests] = useState(null);
    const [guestsInput, setGuestsInput] = useState("1");

    const [occasion, setOccasion] = useState(null);
    const [occasionInput, setOccasionInput] = useState("None");

    function handleChangeDate(e) {
        setDateInput(e.target.value);
        setAvailableTimes(e.target.value);
    }

    function handleChangeTime(e) {
        setTimeInput(e.target.value);
    }

    function handleChangeGuests(e) {
        setGuestsInput(e.target.value);
    }

    function handleChangeOccasion(e) {
        setOccasionInput(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        const formData = {
            date: date,
            time: time,
            guests: guests,
            occasion: occasion,
        }
        setDate(dateInput);
        setTime(timeInput);
        setGuests(guestsInput);
        setOccasion(occasionInput);
        setDateInput(today);
        setTimeInput(availableTimes[0]);
        setGuestsInput("1");
        setOccasionInput("None");
        submitForm(formData);
    }

    return(
        <section className="reservations">
            <h2>RESERVE A TABLE</h2>
            <form onSubmit={onSubmit}>
                {/* <label htmlFor="firstName">First Name</label><br/>
                <input type="text" name="firstName" id="firstName"/><br/>
                <label htmlFor="lastName">Last Name</label><br/>
                <input type="text" name="lastName" id="lastName"/><br/>
                <label htmlFor="email">Email</label><br/>
                <input type="text" name="email" id="email" autoComplete="on"/><br/> */}
                <label htmlFor="date">Date</label><br/>
                <input 
                    type="date" 
                    name="date" 
                    id="date"
                    min={today}
                    value={dateInput}
                    onChange={handleChangeDate}
                    required={true}
                    data-testid="date"
                /><br/>
                <label htmlFor="time">Time</label><br/>
                <select 
                    type="time" 
                    name="time" 
                    id="time"
                    value={timeInput}
                    onChange={handleChangeTime}
                    required={true}
                >
                    {availableTimes.map(time => 
                        <option 
                            key={time} 
                            value={time}
                            data-testid="time"
                        >
                            {time}
                        </option>
                    )}
                </select><br/>
                <label htmlFor="guests">Number of Guests</label><br/>
                <input 
                    type="number" 
                    name="guests" 
                    id="guests" 
                    min="1" 
                    max="10" 
                    placeholder="1"
                    value={guestsInput}
                    onChange={handleChangeGuests}
                    required={true}
                /><br/>
                <label htmlFor="occasion">Occasion</label><br/>
                <select 
                    name="occasion" 
                    id="occasion" 
                    value={occasionInput} 
                    onChange={handleChangeOccasion}
                >
                    <option value="none">None</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                </select><br/>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default BookingForm;
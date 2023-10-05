import Header from "./Header/Header";
import BookingForm from "./BookingForm/BookingForm";
import { useReducer, useState } from "react";
import { fetchAPI, submitAPI } from "../../utils/fetchAPI";

let today = new Date().toLocaleString();
today = new Date(today).toISOString().split('T')[0];

function Reservations() {
    const [bookingConfirmed, setBookingConfirmed] = useState(false);
    const [availableTimes, setAvailableTimes] = useReducer(updateTimes, initializeTimes());

    function updateTimes(availableTimes, date) {
        const newDate = new Date(date).toLocaleString();
        let response = fetchAPI(new Date(newDate));
        return response.length ? response : availableTimes;
    }

    function initializeTimes() {
        return fetchAPI(new Date(today));
    }

    function submitForm(formData) {
        submitAPI(formData) && setBookingConfirmed(true);
    }

    return(
        <>
            <Header/>
            <main>
                {!bookingConfirmed ?
                <BookingForm 
                    availableTimes={availableTimes}
                    setAvailableTimes={setAvailableTimes}
                    submitForm={submitForm}
                />
                    :
                <section className="reservations">
                    <h3>Your reservation has been confirmed</h3>
                    <p>We will be waiting to seat you!</p>
                </section>
                }
            </main>
        </>
    );
}

export default Reservations;
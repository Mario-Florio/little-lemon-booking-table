import Header from "./Header/Header";
import BookingForm from "./BookingForm/BookingForm";
import { useReducer } from "react";
import { fetchAPI } from "../../utils/fetchAPI";

function Reservations() {
    const [availableTimes, setAvailableTimes] = useReducer(updateTimes, initializeTimes());

    function updateTimes(availableTimes, date) {
        const newDate = new Date(date).toLocaleString();
        let response = fetchAPI(new Date(newDate));
        return response.length ? response : availableTimes;
    }

    function initializeTimes() {
        // fetchAPI returns tms available times within this function (unlike 'updateTimes')
        // due to this, it is currently neccessary to initialize with yesterdays date
        let yesterday = new Date().toLocaleString();
        yesterday = new Date(yesterday);
        yesterday.setDate(yesterday.getDate() - 1);
        return fetchAPI(new Date(yesterday));
    }

    return(
        <>
            <Header/>
            <main>
                <BookingForm 
                    availableTimes={availableTimes}
                    setAvailableTimes={setAvailableTimes}
                />
            </main>
        </>
    );
}

export default Reservations;
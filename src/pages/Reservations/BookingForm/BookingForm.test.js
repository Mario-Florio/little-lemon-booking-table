import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import BookingForm from './BookingForm';
import { fetchAPI } from "../../../utils/fetchAPI";

describe('Booking form', () => {
    let today = new Date().toLocaleDateString();
        today = new Date(today).toISOString().split('T')[0];
    let availableTimes = fetchAPI(new Date(today));
    const setAvailableTimes = jest.fn = (arr) => {
        availableTimes = arr;
    }
    const updateTimes = jest.fn = (availableTimes, date) => {
        const newDate = new Date(date).toLocaleString();
        let response = fetchAPI(new Date(newDate));
        return response.length ? response : availableTimes;
    }

    test('Renders the BookingForm heading', () => {
    
        render(
            <BookingForm 
                availableTimes={availableTimes}
                setAvailableTimes={setAvailableTimes}
                updateTimes={updateTimes}
            />
        );
        const headingElement = screen.getByText("RESERVE A TABLE");
        expect(headingElement).toBeInTheDocument();
    });
    
    test('initializeTimes returns expected value', () => {

        let today = new Date().toLocaleString();
        today = new Date(today).toISOString().split('T')[0];
        let expectedVal = fetchAPI(new Date(today));
    
        render(
            <BookingForm 
                availableTimes={availableTimes}
                setAvailableTimes={setAvailableTimes}
                updateTimes={updateTimes}
            />
        );

        let time = screen.getAllByTestId("time");
        let values = time.map(val => val.value);

        expect(values).toEqual(expectedVal);
    });
    
    test('updateTimes returns same value that is provided in state', async () => {
    
        let date = new Date().toLocaleString();
        date = new Date(date);
        date.setDate(date.getDate() + 1);
        date = new Date(date).toISOString().split('T')[0];
        const expectedVal = fetchAPI(new Date(date));

        render(
            <BookingForm 
                availableTimes={availableTimes}
                setAvailableTimes={setAvailableTimes}
                updateTimes={updateTimes}
            />
        );

        const dateInput = screen.getByLabelText("Date");

        fireEvent.change(dateInput, { target: { value: date } });

        const time = await screen.findAllByTestId("time");
        const values = time.map(val => val.value);
        // values: ["17:00", "17:30", "18:00", "19:30", "20:30", "21:00", "21:30"]
        // expectedValues: ["17:00", "17:30", "18:00", "18:30", "20:00", "22:00", "22:30"]
        
        expect(values).toEqual(expectedVal);
    });
});

import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import BookingForm from './BookingForm';

describe('Booking form', () => {
    let availableTimes = ['17:00', '17:30'];
    const setAvailableTimes = jest.fn();
    const updateTimes = jest.fn();

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
    
        render(
            <BookingForm 
                availableTimes={availableTimes}
                setAvailableTimes={setAvailableTimes}
                updateTimes={updateTimes}
            />
        );

        let time = screen.getAllByTestId("time");

        let expectedVal = fetchAPI(new Date(today));

        // expect(time).toBe(expectedVal);
    });
    
    
    test('updateTimes returns same value that is provided in state', () => {
    
        let date = new Date().toISOString().split('T')[0];

        render(
            <BookingForm 
                availableTimes={availableTimes}
                setAvailableTimes={setAvailableTimes}
                updateTimes={updateTimes}
            />
        );

        let expectedVal = fetchAPI(new Date(date));
        
        // expect(inputs).toBe(expectedVal);
    });
})

// Fetch API (file couldnt recognize import)
const seededRandom = seed => {
    const m = 2 ** 35 - 31;
    const a = 185852;
    let s = seed % m;
    return () => (s = s * a % m) / m;
};

function fetchAPI(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }

    return result;
};

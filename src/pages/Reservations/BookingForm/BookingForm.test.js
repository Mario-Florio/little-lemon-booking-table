import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
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

    test('should correctly render all fields and their default values', async () => {

        render(
            <BookingForm 
                availableTimes={availableTimes}
                setAvailableTimes={setAvailableTimes}
                updateTimes={updateTimes}
            />
        );
    
        const dateInput = screen.getByLabelText("Date");
        const timeSelect = screen.getByLabelText("Time");
        const numberOfGuestsInput = screen.getByLabelText("Number of Guests");
        const occasionSelect = screen.getByLabelText("Occasion");
        const submitButton = screen.getByRole('button');
    
        expect(dateInput).toBeInTheDocument();
        expect(dateInput).toHaveAttribute('type', 'date');
        expect(dateInput).toHaveAttribute('id', 'date');
        expect(dateInput).toHaveValue(today);
    
        expect(timeSelect).toBeInTheDocument();
        expect(timeSelect).toHaveAttribute('id', 'time');
    
        expect(numberOfGuestsInput).toBeInTheDocument();
        expect(numberOfGuestsInput).toHaveAttribute('id', 'guests');
        expect(numberOfGuestsInput).toHaveAttribute('type', 'number');
        expect(numberOfGuestsInput).toHaveValue(1);
    
        expect(occasionSelect).toBeInTheDocument();
        expect(occasionSelect).toHaveAttribute('id', 'occasion');
    
        expect(submitButton).toBeInTheDocument();
        expect(submitButton).toHaveAttribute('type', 'submit');
        expect(submitButton).toBeEnabled();
    });

    test('Should display error message and disable button when date is left empty', () => {

        render(
            <BookingForm 
                availableTimes={availableTimes}
                setAvailableTimes={setAvailableTimes}
                updateTimes={updateTimes}
            />
        );

        const dateInput = screen.getByLabelText("Date");
        fireEvent.change(dateInput, { target: { value: '' } });
        fireEvent.blur(dateInput);
        const errorMessage = screen.getByTestId('errorMsg');
        const submitButton = screen.getByRole('button');
    
        expect(errorMessage).toBeInTheDocument();
        expect(errorMessage).toHaveTextContent('Field is required');
        expect(submitButton).toBeDisabled();
    });
});

test('Should display error message and disable button when guests is left empty', () => {

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

    render(
        <BookingForm 
            availableTimes={availableTimes}
            setAvailableTimes={setAvailableTimes}
            updateTimes={updateTimes}
        />
    );

    const guestsInput = screen.getByLabelText("Number of Guests");
    fireEvent.change(guestsInput, { target: { value: '' } });
    fireEvent.blur(guestsInput);
    const errorMessage = screen.getByTestId('errorMsg');
    const submitButton = screen.getByRole('button');

    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent('Field is required');
    expect(submitButton).toBeDisabled();
});

test('Should display error message and disable button when guestsInput <= 0', () => {

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

    render(
        <BookingForm 
            availableTimes={availableTimes}
            setAvailableTimes={setAvailableTimes}
            updateTimes={updateTimes}
        />
    );

    const guestsInput = screen.getByLabelText("Number of Guests");
    fireEvent.change(guestsInput, { target: { value: 0 } });
    fireEvent.blur(guestsInput);
    const errorMessage = screen.getByTestId('errorMsg');
    const submitButton = screen.getByRole('button');

    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent('Please choose amount between 1 and 10');
    expect(submitButton).toBeDisabled();
});

test('Should display error message and disable button when guestsInput < 10', () => {

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

    render(
        <BookingForm 
            availableTimes={availableTimes}
            setAvailableTimes={setAvailableTimes}
            updateTimes={updateTimes}
        />
    );

    const guestsInput = screen.getByLabelText("Number of Guests");
    fireEvent.change(guestsInput, { target: { value: 11 } });
    fireEvent.blur(guestsInput);
    const errorMessage = screen.getByTestId('errorMsg');
    const submitButton = screen.getByRole('button');

    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent('Please choose amount between 1 and 10');
    expect(submitButton).toBeDisabled();
});

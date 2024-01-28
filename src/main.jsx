import { Routes, Route, useNavigate } from "react-router-dom";
import { useReducer } from "react"
import Homepage from './HomePage';
import BookingForm from './BookingForm';
import fakeAPI from './fakeAPI';
import "./Main.css"
import ConfirmedBooking from "./ConfirmedBooking";


function Main() {
    const navigate = useNavigate();
    const initializeTimes = fakeAPI.fetchAPI(new Date());

    const updateTimes = (state, action) => {
        switch (action.type) {
            case "book":
                return state.filter((slot) => slot != action.bookedSlot)
        }
    };
    const [availableTimes, dispatchAvailableTimes] = useReducer(updateTimes, initializeTimes)

    const submitForm = (formData) => {
        dispatchAvailableTimes({
            type: "book",
            bookedSlot: formData.time
        });

        if (fakeAPI.submitAPI(formData)) {
            navigate("/confirmed")
        };
    }

    return (
        <main>
            <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/reservation" element={<BookingForm availableTimes={availableTimes} submitForm={submitForm} />}></Route>
                <Route path="/confirmed" element={<ConfirmedBooking />}></Route>
            </Routes>
        </main >
    )
}

export default Main
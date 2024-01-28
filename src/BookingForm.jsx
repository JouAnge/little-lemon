import { useState, useEffect } from 'react'
import './BookingForm.css'

function BookingForm({ availableTimes, submitForm }) {
    const [fname, setFName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState(availableTimes[0]);

    useEffect(() => {
        setTime(availableTimes[0])
    }, [availableTimes])

    return (
        <div className="booking">
            <h2>Book a table</h2>
            <form className="booking_form">
                <div className="booking_form_item">
                    <label htmlFor="full_name">Full Name</label>
                    <input type="text" id="full_name" name="full_name" value={fname} onChange={(ev) => { setFName(ev.currentTarget.value) }} />
                </div>
                <div className="booking_form_item">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={email} onChange={(ev) => { setEmail(ev.currentTarget.value) }} />
                </div>
                <div className="booking_form_item">
                    <label htmlFor="phone_number">Phone number</label>
                    <input type="text" id="phone_number" name="phone_number" value={phoneNumber} onChange={(ev) => { setPhoneNumber(ev.currentTarget.value) }} />
                </div>
                <div className="booking_form_item">
                    <label htmlFor="guests">How many guests?</label>
                    <input type="number" min={1} id="guests" name="guests" value={guests} onChange={(ev) => { setGuests(ev.currentTarget.value) }} />
                </div>
                <div className="booking_form_item">
                    <label htmlFor="occasion">Occasion</label>
                    <select name="occasions" id="occasions" value={occasion} onChange={(ev) => { setOccasion(ev.currentTarget.value) }}>
                        <option value="birthday">Birthday</option>
                        <option value="anniversary">Anniversary</option>
                    </select>
                </div>
                <div className="booking_form_item">
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" name="date" value={date} onChange={(ev) => { setDate(ev.currentTarget.value) }} />
                </div>
                <div className="booking_form_item">
                    <label htmlFor="time">Choose time</label>
                    <select id="time " value={time} onChange={(ev) => { setTime(ev.currentTarget.value) }}>
                        {availableTimes.map((slot) => <option key={slot}>{slot}</option>)}
                    </select>
                </div>
                <button type="submit" onClick={(ev) => {
                    ev.preventDefault();
                    submitForm({
                        fname: fname,
                        email: email,
                        phoneNumber: phoneNumber,
                        guests: guests,
                        occasion: occasion,
                        date: date,
                        time: time
                    });
                }} className="booking_form_submit">Book</button>
            </form>
        </div >
    )
}

export default BookingForm
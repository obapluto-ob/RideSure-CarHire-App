import React from 'react';

const BookingConfirmation = ({ bookingDetails, onModify, onCancel, onConfirm }) => {
  if (!bookingDetails) {
    return <div>No booking details available.</div>;
  }

  return (
    <div className="booking-confirmation">
      <h2>Booking Confirmation</h2>
      <div className="booking-summary">
        <p><strong>Car:</strong> {bookingDetails.name}</p>
        <p><strong>Price per day:</strong> ${bookingDetails.pricePerDay}</p>
        <p><strong>Pickup Location:</strong> {bookingDetails.pickup}</p>
        <p><strong>Drop-off Location:</strong> {bookingDetails.dropoff}</p>
        <p><strong>Date:</strong> {bookingDetails.date}</p>
        <p><strong>Time:</strong> {bookingDetails.time}</p>
      </div>
      <div className="booking-actions">
        <button onClick={onModify}>Modify Booking</button>
        <button onClick={onCancel}>Cancel Booking</button>
        <button onClick={onConfirm}>Confirm & Pay</button>
      </div>
    </div>
  );
};

export default BookingConfirmation;
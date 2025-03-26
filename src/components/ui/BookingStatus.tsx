import { TBookingStatus } from "../../types";

const BookingStatus = ( code : string) : TBookingStatus => {
    const status  = {} as TBookingStatus;


    switch (code) {
        case "9000":
            status.title = "All";
            status.message = "All bookings.";
            status.color = "#000000";
            status.textColor="#000000";
            status.borderColor="#000000";
            break;
        case "9001":
            status.title = "Pending";
            status.message = "Your booking is pending.";
            status.color = "#ffedd5";
            status.textColor="#9a3412";
            status.borderColor="#fb923c";
            break;
        case "9002":
            status.title = "Canceled";
            status.message = "Your booking has been canceled.";
            status.color = "#fee2e2";
            status.textColor="#991b1b";
            status.borderColor="#f87171";
            break;
        case "9003":
            status.title = "Confirmed";
            status.message = "Your booking has been confirmed.";
            status.color = "#dcfce7";
            status.textColor="#166534";
            status.borderColor="#4ade80";
            break;
        case "9004":
            status.title = "Missed";
            status.message = "You missed the reservation.";
            status.color = "#ffe4e6";
            status.textColor="#9f1239";
            status.borderColor="#fb7185";
            break;
        case "9005":
            status.title = "Completed";
            status.message = "Your trip has been completed.";
            status.color = "#dbeafe";
            status.textColor="#1e40af";
            status.borderColor="#60a5fa";
            break;
        case "9006":
            status.title = "Processing";
            status.message = "Confirming your ride with the car owner, please wait!";
            status.color = "#f4842e";
            status.textColor="#000000";
            status.borderColor="#000000";
            break;
        default:
            status.title = "Unknown";
            status.message = "Unknown status code.";
            status.color = "#000000";
            status.textColor="#000000";
            status.borderColor="#000000";
            break;
    }

    return status;
};

export default BookingStatus;
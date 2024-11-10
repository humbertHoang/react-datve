import { Provider } from "react-redux";
import store from "./store/store";
import Booking from "./BookingTickets/Booking.jsx";

function App() {
  return (
    <Provider store={store}>
      <Booking />
    </Provider>
  );
}

export default App;

import { useDispatch } from "react-redux";
import { deleteSeat } from "../store/actions/bookingActions";
const BookingTable = (props) => {
  const dispatch = useDispatch();
  const bookingSeats = props.bookingSeats;
  const deleteSeatHandler = (seat) => {
    dispatch(deleteSeat(seat));
  };
  const bookingTable = bookingSeats.map((seat, index) => (
    <tr key={index}>
      <th scope="row" className="firstChar">
        {seat.soGhe}
      </th>
      <td>{seat.gia.toLocaleString()}</td>
      <td>
        <button
          className="btn btn-sm"
          onClick={() => {
            deleteSeatHandler(seat.soGhe);
          }}>
          ❌
        </button>
      </td>
    </tr>
  ));
  const totalPrice = bookingSeats.reduce((total, seat) => total + seat.gia, 0);
  return (
    <>
      <h3 className="text-uppercase text-center text-white fw-bold">
        Danh Sách Ghế Bạn Chọn
      </h3>
      <ul className="seat-group mt-4">
        <li className="seat-item">
          <button className="gheDuocChon me-2"></button>Ghế đã đặt
        </li>
        <li className="seat-item">
          <button className="gheDangChon me-2"></button>Ghế đang chọn
        </li>
        <li className="seat-item">
          <button className="ghe me-2"></button>Ghế chưa đặt
        </li>
      </ul>
      <table id="showTable" className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Số ghế</th>
            <th scope="col">Giá</th>
            <th scope="col">Hủy</th>
          </tr>
        </thead>
        <tbody>
          {bookingTable}
          <tr>
            <th scope="row">Tổng tiền</th>
            <td>{totalPrice.toLocaleString()}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default BookingTable;

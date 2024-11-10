import { useDispatch } from "react-redux";
import { addSeat } from "../store/actions/bookingActions";
const BookingDisplay = (props) => {
  const dispatch = useDispatch();
  const bookingSeats = props.bookingSeats;
  const addSeatHandler = (seat) => {
    if (!seat.daDat && !bookingSeats.some((s) => s.soGhe === seat.soGhe))
      return dispatch(addSeat(seat));
  };
  const { danhSachGhe } = props;
  const h = danhSachGhe.map(({ hang }) => hang);
  const dsg = danhSachGhe.map(({ danhSachGhe }) => danhSachGhe);
  const renderGhe = () => {
    return h.map((hang, index) => (
      <tr key={`tr-${index}`}>
        <th scope="row" key={`th-${index}`}>
          {hang}
        </th>
        {dsg[index].map((obj, i) => (
          <td key={`td-${i}`}>
            <button
              value={obj.soGhe}
              className={obj.daDat ? "gheDuocChon" : "ghe"}
              onClick={() => {
                addSeatHandler(obj);
              }}>
              {i + 1}
            </button>
          </td>
        ))}
      </tr>
    ));
  };
  return (
    <>
      <h3 className="text-uppercase text-center text-warning fw-bolder">
        Đặt Vé Xem Phim CyberLearn.vn
      </h3>
      <p className="mb-0 fw-bolder">Màn hình</p>
      <div className="screen"></div>
      <div className="table-responsive">
        <table id="screenTable" className="table table-borderless align-middle">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">1</th>
              <th scope="col">2</th>
              <th scope="col">3</th>
              <th scope="col">4</th>
              <th scope="col">5</th>
              <th scope="col">6</th>
              <th scope="col">7</th>
              <th scope="col">8</th>
              <th scope="col">9</th>
              <th scope="col">10</th>
              <th scope="col">11</th>
              <th scope="col">12</th>
            </tr>
          </thead>
          <tbody>{renderGhe()}</tbody>
        </table>
      </div>
    </>
  );
};

export default BookingDisplay;

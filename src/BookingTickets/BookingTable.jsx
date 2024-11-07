import "./BookingTable.css";
const BookingTable = () => {
  return (
    <>
      <h3 className="text-uppercase text-center text-white fw-bold">
        Danh Sách Ghế Bạn Chọn
      </h3>
      <ul className="seat-group mt-4">
        <li className="seat-item">
          <button className="gheDuocChon btn btn-warning me-2"></button>Ghế đã
          đặt
        </li>
        <li className="seat-item">
          <button className="gheDangChon btn btn-success me-2"></button>Ghế đang
          chọn
        </li>
        <li className="seat-item">
          <button className="ghe btn btn-secondary me-2"></button>Ghế chưa đặt
        </li>
      </ul>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Số ghế</th>
            <th scope="col">Giá</th>
            <th scope="col">Huỷ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">A1</th>
            <td>Mark</td>
            <td>
              <button className="btn btn-sm">❌</button>
            </td>
          </tr>
          <tr>
            <th scope="row">A2</th>
            <td>Jacob</td>
            <td>
              <button className="btn btn-sm">❌</button>
            </td>
          </tr>
          <tr>
            <th scope="row">A3</th>
            <td>Larry the Bird</td>
            <td>
              <button className="btn btn-sm">❌</button>
            </td>
          </tr>
          <tr>
            <th scope="row">Tổng tiền</th>
            <td>500.000</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default BookingTable;

const BookingDisplay = () => {
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
          <tbody>
            <tr>
              <th scope="row">A</th>
              <td>
                <button className="ghe">1</button>
              </td>
              <td>
                <button className="ghe">2</button>
              </td>
              <td>
                <button className="ghe">3</button>
              </td>
              <td>
                <button className="ghe">4</button>
              </td>
              <td>
                <button className="ghe">5</button>
              </td>
              <td>
                <button className="ghe">6</button>
              </td>
              <td>
                <button className="ghe">7</button>
              </td>
              <td>
                <button className="ghe">8</button>
              </td>
              <td>
                <button className="ghe">9</button>
              </td>
              <td>
                <button className="ghe">10</button>
              </td>
              <td>
                <button className="ghe">11</button>
              </td>
              <td>
                <button className="ghe">12</button>
              </td>
            </tr>
            <tr>
              <th scope="row">B</th>
              <td>
                <button className="ghe">1</button>
              </td>
              <td>
                <button className="ghe">2</button>
              </td>
              <td>
                <button className="ghe">3</button>
              </td>
              <td>
                <button className="ghe">4</button>
              </td>
              <td>
                <button className="ghe">5</button>
              </td>
              <td>
                <button className="ghe">6</button>
              </td>
              <td>
                <button className="ghe">7</button>
              </td>
              <td>
                <button className="ghe">8</button>
              </td>
              <td>
                <button className="ghe">9</button>
              </td>
              <td>
                <button className="ghe">10</button>
              </td>
              <td>
                <button className="ghe">11</button>
              </td>
              <td>
                <button className="ghe">12</button>
              </td>
            </tr>
            <tr>
              <th scope="row">C</th>
            </tr>
            <tr>
              <th scope="row">D</th>
            </tr>
            <tr>
              <th scope="row">E</th>
            </tr>
            <tr>
              <th scope="row">F</th>
            </tr>
            <tr>
              <th scope="row">G</th>
            </tr>
            <tr>
              <th scope="row">H</th>
            </tr>
            <tr>
              <th scope="row">I</th>
            </tr>
            <tr>
              <th scope="row">J</th>
            </tr>
            <tr>
              <th scope="row">K</th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BookingDisplay;

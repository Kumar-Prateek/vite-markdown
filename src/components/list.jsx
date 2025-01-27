import PropTypes from "prop-types";

export default function List({ data }) {
  return (
    <>
      {data?.length > 0 ? (
        <ul className="bill-data-list">
          {data?.map((item, index) => (
            <li key={index + item.id} className="bill-data-list-item">
              <strong>{item.id}. Name:</strong> {item.name}
              <br />
              <strong>Bill Amount:</strong> {item.billAmount}
              <br />
              <strong>Tip Percentage:</strong> {item.tipPercentage}
              <br />
              <strong>Total Amount:</strong> {item.totalAmount}
            </li>
          ))}
        </ul>
      ) : (
        <small> No Bills Found</small>
      )}
    </>
  );
}

List.propTypes = {
  data: PropTypes.array,
};

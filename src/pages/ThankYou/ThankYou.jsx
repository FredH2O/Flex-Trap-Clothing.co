import "./ThankYou.css";

const ThankYou = ({ cart }) => {
  const monthsArray = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  function handleDate() {
    const currentDate = new Date();

    const date = currentDate.getDate() + 3;
    const month = monthsArray[currentDate.getMonth()];

    const futureDate = new Date();

    futureDate.setDate(currentDate.getDate() + 6);

    const futureDay = futureDate.getDate();
    const futureMonth = monthsArray[futureDate.getMonth()];
    return `from ${date}/${month} to ${futureDay}/${futureMonth}`;
  }

  return (
    <div className="container thank-you-container">
      <div className="thank-you">
        <h2>Thank You for the purchase!</h2>
        <p>Your order will be delivered :</p>
        <p>
          <span className="delivery-time">{handleDate()}</span>
        </p>
        <p>Our deliveries usually takes 3-6 working days!</p>
      </div>
    </div>
  );
};

export default ThankYou;

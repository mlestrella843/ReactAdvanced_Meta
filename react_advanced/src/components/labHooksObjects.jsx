import { useState } from "react";

export default function Lab() {
  const [giftCard, setGiftCard] = useState(
    {
        firstName: "Jennifer",
        lastName: "Smith",
        text: "Free dinner for 4 guests",
        valid: true,
        instructions: "To use your coupon, click the button below.",
    }
  );

  function spendGiftCard() {
    setGiftCard((prevState) => {
      return {
        ...prevState,
        text: "Your coupon has been used.",
        valid: false,
        instructions: "`Please visit our restaurant to renew your gift card.`."
            };
      }
    );
  };

  return (
    <div className="bg-slate-400 border-2 border-gray-500">
      <h1>
        Gift Card Page
      </h1>
      <h2>
        Customer: {giftCard.firstName} {giftCard.lastName}
      </h2>
      <h3>
        {giftCard.text}
      </h3>
      <p>
        {giftCard.instructions}
      </p>
      {
        giftCard.valid && (
          <button className="bg-blue-400 border-2 border-white text-white px-2 py-2"  onClick={spendGiftCard}>
            Spend Gift Card
          </button>
        )
      }
    </div>
  );
}

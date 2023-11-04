import React, { useState } from 'react';
import './chat.css'; // Make sure to create an App.css file for your styles

function Chat() {
  const [wish, setWish] = useState('');
  const [showWish, setShowWish] = useState(false);

  const handleWishChange = (e) => {
    setWish(e.target.value);
  };

  const handleShowWish = () => {
    setShowWish(true);
  };

  return (
    <div className="app-container">
      <div>
      <h1>Write your wish</h1>
      </div>
      <input
        type="text"
        placeholder="Type your wish here"
        value={wish}
        onChange={handleWishChange}
      />
      <button onClick={handleShowWish}>Generate</button>

      {showWish && (
        <div className="wish-box">
          <p>Your Wish:</p>
          <p>{wish}</p>
        </div>
      )}
    </div>
  );
}

export default Chat;

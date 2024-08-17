'use client';
import React, { useState } from 'react';

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [resultImage, setResultImage] = useState(null);
  const [error, setError] = useState(null);

  const handleImageUpload = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const removeBackground = async () => {
    if (!selectedImage) {
      setError('Please select an image first.');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedImage);

    try {
      const response = await fetch('/api/removeBg', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        setResultImage(data.imagePath);
      } else {
        setError(`Error: ${data.error}`);
      }
    } catch (error) {
      setError(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h1>Remove Image Background</h1>
      {error && <p className="text-red-500">{error}</p>}
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <button onClick={removeBackground}>Remove Background</button>
      {resultImage && (
        <div>
          <h2>Processed Image:</h2>
          <img src={resultImage} alt="No background" />
        </div>
      )}
    </div>
  );
};

export default Home;

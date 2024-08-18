'use client';
import axios from 'axios';
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
      const response = await axios.post('/api/removeBg', formData);

      if (response.status === 200) {
        setResultImage(response.data.imageUrl);
      } else {
        setError(`Error: server returned ${response.status} status code. Please try again. `);
        console.error(response.data);
      }
    } catch (error) {
      setError('something went wrong. Please try again later.')
      console.log(`Error: ${error.message}`);

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

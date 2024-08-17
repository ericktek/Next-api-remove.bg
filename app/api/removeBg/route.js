import { NextResponse } from 'next/server';
import axios from 'axios';
import FormData from 'form-data';

export async function POST(req) {
  const API_KEY = process.env.API_KEY;

  try {
    const formData = await req.formData();
    const imageFile = formData.get('image');

    if (!imageFile) {
      return NextResponse.json({ error: 'No image uploaded' }, { status: 400 });
    }

    const arrayBuffer = await imageFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const axiosFormData = new FormData();
    axiosFormData.append('size', 'auto');
    axiosFormData.append('image_file', buffer, {
      filename: imageFile.name,
      contentType: imageFile.type,
    });

    const response = await axios.post('https://api.remove.bg/v1.0/removebg', axiosFormData, {
      headers: {
        'X-Api-Key': API_KEY,
        ...axiosFormData.getHeaders(),
      },
      responseType: 'arraybuffer',
    });

    if (response.status === 200) {
      // Return the image data as a base64-encoded string
      const base64Image = Buffer.from(response.data, 'binary').toString('base64');
      const imageUrl = `data:image/png;base64,${base64Image}`;
      return NextResponse.json({
        message: 'Background removed successfully',
        imageUrl, // Include the image URL directly in the response
      });
    } else {
      return NextResponse.json({ error: response.statusText }, { status: response.status });
    }
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

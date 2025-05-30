import axios from 'axios';

const sendToTranslate = async (file: File, inputType: string) => {
  const formData = new FormData();
  formData.append('payload', file); // 파일 필드 (FastAPI에서는 UploadFile로 받음)

  try {
    const response = await axios.post(
      `http://localhost:8000/translate?input_type=${inputType}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    // 응답 처리
    if (inputType === 'text') {
      return response.data.video_url;
    } else {
      return response.data.text;
    }
  } catch (error) {
    console.error('요청 실패:', error);
  }
};

const uploadRecordedVideo = async (blob: Blob, filename: string) => {
  const formData = new FormData();
  formData.append('file', blob, filename); // FastAPI에서 "file"로 받음

  try {
    const response = await axios.post(
      'http://localhost:8000/upload',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    console.log('업로드 성공:', response.data);
  } catch (error) {
    console.error('업로드 실패:', error);
  }
};

export { uploadRecordedVideo, sendToTranslate };

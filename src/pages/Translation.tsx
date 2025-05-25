import { BsCameraVideoFill } from 'react-icons/bs';
import {
  VideoCard,
  VideoConnection,
  VideoRecordControls,
  VideoRecordBox,
  DefaultVideoBox,
} from '../components';
import { sendToTranslate, uploadRecordedVideo } from '../api/translation';
import { useState } from 'react';
import {
  useCameraStream,
  useReciveRealtime,
  useSendRealtime,
} from '../hooks/VideoManage';
import RealtimeCanvas from '../components/translation/RealtimeCanvas';

const Translation = () => {
  const {
    videoRef,
    isLoading,
    isRecording,
    setReady,
    isError,
    isActive,
    setActive,
    downloadVideo,
    startRecording,
    stopRecording,
    pauseRecording,
  } = useCameraStream();

  // 실시간 송신 (카메라 영상 프레임 전송)
  const { startRealtimeSending, stopRealtimeSending } = useSendRealtime(
    videoRef,
    'ws://localhost:8000/stream/receive'
  );

  // 실시간 수신 (서버에서 처리된 이미지 프레임 수신)
  const { imageSrc, isActiveReceive, errorReceive, setIsActiveReceive } =
    useReciveRealtime('ws://localhost:8000/stream/send');

  const [translated, setTranslated] = useState(null);
  const [isRealTime, setRealTime] = useState(false);

  function uploadRecording() {
    const { videoBlob, fileName } = downloadVideo();
    uploadRecordedVideo(videoBlob, fileName);
  }

  async function translateVideo() {
    const { videoBlob, fileName } = downloadVideo();

    const file = new File([videoBlob], fileName, {
      type: 'video/webm',
      lastModified: Date.now(),
    });
    const translatedVideoURL = await sendToTranslate(file, 'text');
    const translatedText = await sendToTranslate(file, 'video');
    setTranslated({
      url: translatedVideoURL,
      text: translatedText,
    });
  }

  return (
    <div className='flex flex-col justify-center items-start p-[50px] gap-[50px]'>
      <header className='flex flex-col items-start gap-5'>
        <h2 className='text-[36px] font-bold'>수어 번역기</h2>
        <p className='text-[18px]'>
          번역할 수어를 촬영하고 번역 결과를 확인하세요
        </p>
        <VideoConnection isActive={isActive} setActive={setActive} />
        <div
          className='flex flex-col after:bg-gray-50 p-4 rounded-xl shadow-sm border 
        border-gray-200 text-2xl leading-relaxed text-gray-700 gap-[10px]'
        >
          <div className='flex flex-col items-start'>
            <p className='mb-2'>
              <strong className='text-blue-500'>🎥 녹화 모드:</strong> 수어
              영상을 촬영 후 업로드하면 서버에서 텍스트와 영상으로 번역해줍니다.
            </p>
            <VideoRecordControls
              isRecording={isRecording}
              isLoading={isLoading}
              onStart={startRecording}
              onStop={stopRecording}
              onPause={pauseRecording}
              onUpload={uploadRecording}
            />
          </div>
          <div className='flex flex-col gap-2 mt-4'>
            <p className='mb-2'>
              <strong className='text-green-500'>📡 실시간 모드:</strong>{' '}
              실시간으로 카메라 영상을 서버에 전송하면 바로 번역 결과를 확인할
              수 있습니다.
            </p>
            <div className='flex gap-3 text-2xl'>
              <button
                className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'
                onClick={() => {
                  setRealTime(true);
                  startRealtimeSending();
                  setIsActiveReceive(true);
                }}
              >
                실시간 시작
              </button>
              <button
                className='px-4 py-2 bg-gray-300 text-gray-800 rounded-lg  hover:bg-gray-400'
                onClick={() => {
                  setRealTime(false);
                  stopRealtimeSending();
                  setIsActiveReceive(false);
                }}
              >
                실시간 중단
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className='flex gap-[30px] items-end'>
        <div className='flex flex-col items-start gap-4'>
          <VideoCard
            title={'번역할 수어'}
            onActionClick={translateVideo}
            word='사과'
          >
            <VideoRecordBox
              videoRef={videoRef}
              isLoading={isLoading}
              isActive={isActive}
              isError={isError}
              setReady={setReady}
            />
          </VideoCard>
        </div>

        <VideoCard
          title={'번역된 수어'}
          onActionClick={() => setTranslated(null)}
          word={translated?.text ?? '번역하기를 누르세요'}
        >
          <DefaultVideoBox
            title={isRealTime ? '실시간 번역중' : ''}
            content={
              isRealTime ? (
                <RealtimeCanvas
                  wsUrl='ws://localhost:8000/stream/send'
                  isActive={isActiveReceive}
                />
              ) : !translated ? (
                <BsCameraVideoFill color='gray' size={30} />
              ) : (
                <video
                  src={`http://localhost:8000${translated.url}`}
                  controls
                  autoPlay
                  playsInline
                  className='w-full h-full'
                />
              )
            }
          />
        </VideoCard>
      </div>
    </div>
  );
};
export default Translation;

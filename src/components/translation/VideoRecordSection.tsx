import { useVideoRecorder } from '../../hooks/useVideoRecorder.tsx'
import { VideoCard, VideoConnection, VideoRecordControls, VideoRecordBox } from '../index.tsx'

const VideoRecordSection = () => {
    const {
        videoRef,
        isActive,
        isLoading,
        isError,
        setReady,
        isRecording,
        setActive,
        downloadVideo,
        startRecording,
        stopRecording,
        pauseRecording,
    } = useVideoRecorder()
    return (
        <div className="flex flex-col items-start gap-4">
            <VideoConnection isActive={isActive} setActive={setActive} />
            <VideoRecordControls isRecording={isRecording}
                                 isLoading={isLoading}
                                 onStart={startRecording}
                                 onStop={stopRecording}
                                 onPause={pauseRecording}
                                 onDownload={downloadVideo} />


            {/* todo: 실시간 연결 했는데 수정 필요할 수도 있음 */
            }
            <VideoCard title={'번역할 수어'}
                       onActionClick={() => {
                       }}
                       word="사과">
                <VideoRecordBox setReady={setReady}
                                isError={isError}
                                videoRef={videoRef}
                                isLoading={isLoading}
                                isActive={isActive} />
            </VideoCard>

        </div>
    )
}

export default VideoRecordSection
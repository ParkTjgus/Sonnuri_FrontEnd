import { BsCameraVideoFill } from 'react-icons/bs'
import { VideoCard, DefaultVideoBox, VideoRecordSection } from '../components'


const Translation = () => {
    return (
        <div
            className="flex flex-col justify-center items-start p-[50px] gap-[50px]">

            <header className="flex flex-col items-start">
                <h2 className="text-[36px] font-bold">수어 번역기</h2>
                <p className="text-[18px]">번역할 수어를 촬영하고 번역 결과를 확인하세요</p>
            </header>
            <div className="flex gap-[30px] items-end">
                <VideoRecordSection />
                <VideoCard title={'번역된 수어'} onActionClick={() => {
                }} word={'apple'}>
                    <DefaultVideoBox content={
                        <BsCameraVideoFill color="gray" size={30} />
                    } />
                </VideoCard>
            </div>


        </div>
    )

}
export default Translation

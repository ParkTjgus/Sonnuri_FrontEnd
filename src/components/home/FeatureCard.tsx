import type { ReactNode } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

interface FeatureCardProps {
    icon: ReactNode
    title: string
    description: string
    actionLabel: string
    onActionClick?: () => void
    textColor: string
    bgColor: string
}

const FeatureCard = ({
    icon,
    title,
    description,
    actionLabel,
    onActionClick,
    bgColor,
    textColor,
}: FeatureCardProps) => {
    return (
        <article className="flex border border-[#F3F4F6] flex-col gap-[20px] p-[33px] rounded-[12px] shadow-lg">
            <header
                className={`${bgColor} ${textColor} w-[48px] h-[48px] rounded-[12px] flex items-center justify-center`}
            >
                {icon}
            </header>

            <h4 className="text-[20px] font-semibold">{title}</h4>

            <section>
                <p className="text-[16px] max-w-[300px]">{description}</p>
            </section>

            <footer className={`${textColor}  flex gap-[13px] items-center`}>
                <button onClick={onActionClick}>{actionLabel}</button>
                <FaArrowRightLong />
            </footer>
        </article>
    )
}
export default FeatureCard

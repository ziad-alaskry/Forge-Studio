import {FC, ReactNode} from 'react';

interface ForgeCardProps {
    children: ReactNode;
}

const ForgeCard: FC<ForgeCardProps> = ({children}) =>{
    return (
        <div className='bg-forgeMetal rounded-2xl p-4 sm:p-6  shadow-forgeGlow
            border border-forgeGlow/20 hover:shadow-forgeGlow'>
                {children}
            </div>
    )
}

export default ForgeCard;
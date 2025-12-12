import {FC} from 'react';

interface ForgeButtonProps {
    label: string;
    onClick?: () => void;
}

const ForgeButton: FC<ForgeButtonProps> = ({label, onClick}) =>{
    return (
        <button 
        onClick={onClick}
        className='px-6 py-3 bg-forgeBlue rounded-xl shadow-forgeGlow 
        hover:bg-blue-600 active:scale-95'>
            {label}
        </button>
    )
}

export default ForgeButton;
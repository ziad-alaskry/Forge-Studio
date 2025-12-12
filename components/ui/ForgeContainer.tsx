import {FC, ReactNode} from 'react';

interface ForgeContainerProps {
    children: ReactNode;
}

const ForgeContainer: FC<ForgeContainerProps> = ({children}) => {
    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-4 py-8'>
            {children}
        </div>
    )
}

export default ForgeContainer; 
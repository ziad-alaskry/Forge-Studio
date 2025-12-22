import { FC, ReactNode } from 'react';
import ForgeNavbar from './ForgeNavbar';
import ForgeBackground from '../3d/ForgeBackground';

interface ForgeLayoutProps {
    children: ReactNode;
}

const ForgeLayout: FC<ForgeLayoutProps> = ({ children }) => {
    return (
        <div className='min-h-screen text-white relative'>
            <ForgeBackground />
            <ForgeNavbar />
            <main className='relative z-10'>
                {children}
            </main>
        </div>
    )
}

export default ForgeLayout;
import {FC , ReactNode} from 'react';
import ForgeNavbar from './ForgeNavbar';
interface ForgeLayoutProps {
    children: ReactNode;
}

const ForgeLayout: FC<ForgeLayoutProps> = ({children}) =>
{
    return (
        <div className='bg-forgeDark min-h-screen text-white'>
            <ForgeNavbar/>
            <main className='pt-24'>
                {children} 
            </main>
        </div>
    )
}

export default ForgeLayout;
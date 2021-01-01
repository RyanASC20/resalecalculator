import { useEffect } from 'react';
import { useRouter } from 'next/router';
import HeadTag from '../components/HeadTag/HeadTag';

const Index = () => {
    const router = useRouter();
    useEffect(() => {
        router.push('/resale-value-calculator');
    });

    return (
        <div>
            <HeadTag />
        </div>
    );
} 

export default Index;
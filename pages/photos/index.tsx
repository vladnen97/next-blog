import MainContainer from '@/components/MainContainer';
import Image from 'next/image';

export async function getStaticProps(context) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos`)
    const photos = await res.json()
    return {
        props: {photos: photos.slice(1, 20)}
    }
}

const Photos = ({photos}) => {
    return (
        <MainContainer title={'Photos'}>
            <h1>Photos</h1>
            <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                {photos.map(el => <div key={el.id} style={{display: 'flex', alignItems: 'center', gap: '25px'}}>
                    <Image src={el.thumbnailUrl} alt={'photo'} width={150} height={150}/>
                    {el.title}
                </div>)}
            </div>
        </MainContainer>
    );
};

export default Photos;
import Link from 'next/link';
import MainContainer from '@/components/MainContainer';

export async function getStaticProps(context) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const users = await res.json()
    return {
        props: {users}
    }

}

const Users = ({users}) => {
    return (
            <MainContainer title={'Users'}>
                <h1>Users list</h1>
                <ul>
                    {users.map(el => <li key={el.id}>
                        <Link href={`/users/${el.id}`}>{el.name}</Link>
                    </li>)}
                </ul>
            </MainContainer>
    )
}

export default Users;
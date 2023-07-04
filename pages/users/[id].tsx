import MainContainer from '@/components/MainContainer';

export async function getServerSideProps({params}) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await res.json()
    return {
        props: {user}
    }

}

export default function User({user}) {

    return (
        <MainContainer title={user.name}>
            <div><b>name:</b> {user.name}</div>
            <div><b>username:</b> {user.username}</div>
            <div><b>email:</b> {user.email}</div>
            <div><b>address:</b> {JSON.stringify(user.address)}</div>
        </MainContainer>
    )
}


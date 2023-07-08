import MainContainer from '@/components/MainContainer';

export async function getServerSideProps({params}) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const res2 = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const posts = await res2.json()
    const user = await res.json()
    return {
        props: {user, posts: posts.filter(el => el.userId === +params.id)}
    }

}

export default function User({user, posts}) {

    return (
        <MainContainer title={user.name}>
            <div><b>name:</b> {user.name}</div>
            <div><b>username:</b> {user.username}</div>
            <div><b>email:</b> {user.email}</div>
            <div><b>address:</b> {JSON.stringify(user.address)}</div>
            <div>posts: </div>
            <ol>
                {posts.map(el => <li key={el.id}>
                    <h5>{el.title}</h5>
                    <p>{el.body}</p>
                </li>)}
            </ol>
        </MainContainer>
    )
}


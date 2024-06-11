

const MyPage = ({ params }) => {
    console.log(params)
    return (
        <>MyPage {params.id}</>
    )
}

export default MyPage
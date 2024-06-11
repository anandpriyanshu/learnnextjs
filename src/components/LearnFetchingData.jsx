async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    return res.json()

}
const LearnFetchingData = async () => {
    const data = await getData()
    console.log(data)
    return (
        <>

            {data.map((ele, i) => {

                return <div key={i}>

                    <h1>{ele.title}</h1>
                    <p>{ele.body}</p>
                    <hr />
                </div >

            })}
        </>
    )
}

export default LearnFetchingData

const LearnFetchingData = async () => {

    const res = await fetch("https://jsonplaceholder.typicode.com/posts")

    const data = await res.json()
    console.log(data)
    return (
        <>

            {data.map((ele, i) => {

                return <div key={i}>

                    <h1>{ele.title}</h1>
                    <p>{ele.id}</p>
                    <hr />
                </div >

            })}
        </>
    )
}

export default LearnFetchingData
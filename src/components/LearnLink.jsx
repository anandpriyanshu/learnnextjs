import Link from "next/link"


const LearnLink = () => {
    const id = 2
    return (
        <>

            <div className="grid">

                <Link href="/admin/dashboard">Go to admin dashboard</Link>

                <Link href="/admin/profile">Go to admin profile</Link>
                <Link href="/user/settings">Go to  setting</Link>
                <Link href={`/user/profile/${id}`}>Go to profile</Link>

            </div>


        </>
    )
}

export default LearnLink
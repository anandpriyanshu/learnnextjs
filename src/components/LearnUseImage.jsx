import Image from "next/image"
import Myimage from '../../public/images/car.jpg'

const LearnUseImage = () => {
    return (
        <>
            <Image src={Myimage} />
        </>
    )
}

export default LearnUseImage
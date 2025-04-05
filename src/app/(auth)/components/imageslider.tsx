import myImage from '../asset/7707558_3722303.svg';
import Image from 'next/image';
export default function ImageSlider() {
    return (
        <Image
                            src={myImage}
                            alt="/My SVG Icon"
                            width={500} // Default size
                            height={500} // Default size
                            priority
                            className="max-w-[60%] sm:max-w-[50%] md:max-w-[40%] lg:max-w-full h-auto"
                            style={{ transform: "scaleY(-1) rotate(180deg)" }}
                        />
    )
}
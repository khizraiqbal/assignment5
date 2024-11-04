import Image from "next/image";
import Header from "./components/Header";
import { Libre_Bodoni } from '@next/font/google';

const libreBodoni = Libre_Bodoni({
  weight: ['600'], // Specify the weights you need
  subsets: ['latin'], // Choose subsets you need, e.g., 'latin'
});




export default function Home() {
  return (
    <div className="h-screen">
    <Header/>
    <div className="flex h-[80%] ">


    <div className="w-1/2 flex flex-col justify-start items-start m-16">

<h1 className={` ${libreBodoni.className} text-[40px] text-[#000] h-[189px] w-[496px] absolute top-[316px] left-[176px]`} >IMPECCABLE CRAFTSMANSHIP AND FINESSE
</h1>

<p className={` ${libreBodoni.className} w-[902px] h-[147px] text-[30px] text-[#787054] absolute top-[533px] left-[171px] leading-[49.35px] tracking-wide`}>An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>



<button className={`${libreBodoni.className} w-[300px]  bg-[#A29875]  text-[30px] rounded-[10px] absolute top-[730px] left-[176px] p-2 flex place-content-center text-white leading-[37.5px]`}>Explore Now</button>


    </div>
    
        
    <div className="w-1/2 flex justify-center items-center absolute top-[198px] left-[1164px] ">
    <Image 
            src={'/image/model picture.png'}
            alt=" model image"
            width={462} 
            height={647}
            
       />

    </div>
    
    </div>
    </div>
  );
}

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Item, ItemMedia, ItemContent, ItemTitle } from "@/components/ui/item"
import { IcMain, IcSuc, IcFree, IcCorrect, IcGlobal, IcSponsored } from "@/shared/api"
import Image from "next/image"

export default function MainContent() {
  const listItems = ['Powerfull online protection.', 'Internet without borders.', 'Supercharged VPN', 'No specific time limits.']

  const planItems = [
    { title: "Free Plan", price: "Free" },
    { title: "Standard Plan", price: "$9 / mo" },
    { title: "Premium Plan", price: "$12 / mo" }
  ]

  const planDescribes = [
    ["Unlimited Bandwitch", "Encrypted Connection", "No Traffic Logs", "Works on All Devices"],
    ["Unlimited Bandwitch", "Encrypted Connection", "Yes Traffic Logs", "Works on All Devices", "Connect Anyware"],
    ["Unlimited Bandwitch", "Encrypted Connection", "Yes Traffic Logs", "Works on All Devices", "Connect Anyware", "Get New Features"]
  ]

    return (
    <div className="mt-8 md:mt-24 w-full">
      <div className="px-4 md:px-46.25 flex flex-col md:flex-row items-center justify-between gap-8 mb-8 md:mb-33">
        <div className="w-full md:w-auto">
          <Image src={IcMain} alt="ic_main" className="w-full h-auto md:w-auto"/>
        </div>
        <div className="flex flex-col text-center md:text-left">
          <h2 className="font-medium text-[24px] md:text-[35px] text-[#0B132A] mb-4 md:mb-5">
            We Provide Many <br /> Features You Can Use
          </h2>
          <h3 className="text-[#4F5665] text-[14px] md:text-[16px] mb-4 md:mb-5">
            You can explore the features that we provide with fun and <br /> have their own functions each feature.
          </h3>
          {listItems.map((item, index) => (
            <Item key={index} className="justify-center md:justify-start">
              <ItemMedia variant={'icon'}>
                <Image width={20} height={20} className="w-5 h-5 md:w-6 md:h-6" src={IcSuc} alt="ic" />
              </ItemMedia>
              <ItemContent>
                <ItemTitle className="text-[#4F5665] text-sm md:text-base">{item}</ItemTitle>
              </ItemContent>
            </Item>
          ))}
        </div>
      </div>
      
       <div className="bg-[#FBFBFB] px-4 md:px-46.25 flex flex-col items-center justify-center">
         <h2 className="mt-8 md:mt-20 mb-4 md:mb-5 font-medium text-[24px] md:text-[35px] text-[#0B132A] text-center">
           Choose Your Plan
         </h2>
         <h3 className="text-[14px] md:text-[16px] text-[#4F5665] mb-8 md:mb-15 text-center max-w-md">
           Let&#39;s choose the package that is best for you and explore it happily and cheerfully.
         </h3>
         <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12.5 w-full max-w-6xl">
           {planItems.map((item, index) => (
             <Card className="w-full md:w-82.5 h-auto md:h-190 border-2 border-[#DDDDDD] rounded-[10px] bg-white mb-4 md:mb-0" key={index}>
               <CardHeader className="mt-[40px] md:mt-[79px] mx-4 md:mx-[92.55px]">
                 <Image loading={'lazy'} width={100} height={120} className="object-contain w-24 h-30 md:w-36 md:h-40 mx-auto" src={IcFree} alt="" />
                 <CardTitle className="text-[#0B132A] flex justify-center mt-4 md:mt-7.5 text-lg md:text-xl">{item.title}</CardTitle>
               </CardHeader>
               <CardContent className="flex flex-col mx-auto mt-2.5 gap-2 md:gap-3">
                 {planDescribes[index]?.map((desc, descIndex) => (
                   <div key={descIndex} className="flex flex-row items-center gap-1 md:gap-2">
                     <Image loading={'lazy'} width={16} height={16} className="w-4 h-4 md:w-6 md:h-6" src={IcCorrect} alt="check" />
                     <span className="text-[#4F5665] text-xs md:text-sm">{desc}</span>
                   </div>
                 ))}
               </CardContent>
               <CardFooter className="bg-white flex flex-col mt-auto justify-center items-center ">
                 <span className="text-base md:text-lg text-[#0B132A] text-[20px] md:text-[25px] font-semibold mb-[15px] md:mb-[20px]">{item.price}</span>
                 <Button className="text-[#F53838] mb-[30px] md:mb-[50px] text-[12px] md:text-[16px] font-bold w-[140px] md:w-[178px] h-[35px] md:h-[45px] rounded-[50px] hover:bg-[#F53838] hover:text-white bg-white border-[#F53838] shadow-xl md:shadow-2xl shadow-[#F53838]">Select</Button>
               </CardFooter>
             </Card>
           ))}
         </div>

          <div className="mt-[80px] md:mt-[150px] flex flex-col items-center">
            <div className="flex flex-col text-center mb-[80px] md:mb-[155px] max-w-md">
              <span className="title text-[#0B132A] text-[24px] md:text-[35px] font-medium mb-[15px] md:mb-[20px]">Huge Global Network <br /> of Fast VPN</span>
              <span className="text-[14px] md:text-[16px] text-[#4F5665]">See <span className="font-bold">LaslesVPN</span> everywhere to make it easier for you when you move locations.</span>
            </div>
            <div className="mb-[30px] md:mb-[50px]">
              <Image loading={'lazy'} className="mb-[6px] w-full h-auto md:w-auto" src={IcGlobal} alt="" />
              <Image src={IcSponsored} alt="" loading={'lazy'} className="w-full h-auto md:w-auto"/>
            </div>
            <div className="flex flex-col text-center mb-[40px] md:mb-[60px]">
               <span className="title text-[#0B132A] text-[24px] md:text-[35px] font-medium mb-[15px] md:mb-[20px]">
                Trusted by Thousands of <br /> Happy Customer
                </span>
                <span className="text-[14px] md:text-[16px] text-[#4F5665]">
                  These are the stories of our customers who have joined us with great <br /> pleasure when using this crazy feature.
                </span>
            </div>
          </div>


      </div>
    </div>
  )
}
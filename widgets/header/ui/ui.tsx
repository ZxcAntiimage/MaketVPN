import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { IcHeader, IcLocation, IcServer, IcUser, Logo } from "@/shared/api";
import Image from "next/image";

export default function Header(){

    const Links = [
        {id: 1, title: "About", href: "#about"},
        {id: 2, title: "Features", href: "#features"},
        {id: 3, title: "Pricing", href: "#pricing"},
        {id: 4, title: "Testimonials", href: "#testimonials"},
        {id: 5, title: "Help", href: "#help"},
    ]

    return(
        <div className="flex flex-col mx-4 md:mx-37.5 mt-4 md:mt-12.5">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
                <div className="Logo w-full md:w-auto flex justify-center md:justify-start">
                    <Image loading={"lazy"} src={Logo} alt="Logo" className="w-32 h-auto md:w-auto"/>
                </div>
                
                <div className="Links w-full md:w-auto my-4 md:my-0">
                    <NavigationMenu className="w-full mx-auto justify-center">
                        <NavigationMenuList className="flex-row gap-1 md:gap-10 justify-center w-full space-x-0">
                            {Links.map((item)=>(
                                <NavigationMenuItem key={item.id}>
                                    <NavigationMenuLink 
                                        href={item.href}
                                        className="block px-3 py-2 text-[14px] md:text-[16px] text-[#4F5665] hover:text-[#F53855] transition-colors font-normal whitespace-nowrap"
                                    >
                                        {item.title}
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                
                <div className="Auth flex flex-row items-center justify-center gap-4 md:gap-7.5 w-full md:w-auto">
                    <Button className="text-[#0B132A] text-sm md:text-lg bg-transparent hover:bg-gray-50 shadow-none px-3 py-2 md:px-4 md:py-2">
                        Sign In
                    </Button>
                    <Button className="w-32 md:w-37.5 h-10 md:h-11.25 border border-[#F53855] rounded-[50px] bg-transparent px-4 py-2 text-[14px] md:text-[16px] text-[#F53855] hover:bg-[#F53855] hover:text-white transition-colors shadow-none">
                        Sign Up
                    </Button>
                </div>
            </div>

            <div className="header__block-1 mt-8 md:mt-32.5 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left flex flex-col items-center md:items-start w-full md:w-auto">
                    <h1 className="header_block__title text-[#0B132A] text-[28px] md:text-[50px] font-medium mb-4 md:mb-5 leading-snug md:leading-tight">
                        Want anything to be <br /> easy with <span className="font-bold">LaslesVPN.</span>
                    </h1>
                    <h3 className="text-[14px] md:text-[16px] text-[#4F5665] mb-8 md:mb-12.5 max-w-[555px]">
                        Provide a network for all your needs with ease and fun using LaslesVPN <br className="hidden md:inline" /> discover interesting features from us.
                    </h3>
                    <Button className="w-full sm:w-62.5 h-12 md:h-15 text-white bg-[#F53838] flex justify-center items-center shadow-lg md:shadow-2xl shadow-[#F53838]/40 hover:bg-[#e03030] transition-colors text-sm md:text-base font-bold rounded-lg">
                        Get Started
                    </Button>
                </div>
                <div className="w-full md:w-auto flex justify-center">
                    <Image loading={"lazy"} src={IcHeader} alt="BgIcon" className="w-full max-w-[400px] md:max-w-none h-auto md:w-auto"/>
                </div>
            </div>

            <div className="header__block-2 mt-12 md:mt-25.75 flex flex-col md:flex-row items-center justify-center shadow-xl md:shadow-2xl shadow-[#F5F5F5]/50 rounded-xl">
                 <div className="bg-white w-full max-w-[1140px] px-6 md:px-12 py-8 md:py-16 flex flex-col sm:flex-row items-center justify-between divide-y md:divide-y-0 sm:divide-x divide-[#EEEFF2] gap-6 sm:gap-0 rounded-xl">
                     <div className="header__block-2_item flex flex-row items-center justify-center gap-4 md:gap-6 w-full sm:w-1/3">
                         <Image loading={"lazy"} src={IcUser} alt="user" className="w-8 h-8 md:w-auto"/>
                         <div className="flex flex-col">
                             <p className="font-bold text-[#0B132A] text-[20px] md:text-[25px] mb-1">90+</p>
                             <p className="text-[#4F5665] text-[14px] md:text-[16px]">Users</p>
                         </div>
                     </div>
                     <div className="header__block-2_item flex flex-row items-center justify-center gap-4 md:gap-6 w-full sm:w-1/3 pt-4 sm:pt-0">
                         <Image loading={"lazy"} src={IcLocation} alt="location" className="w-8 h-8 md:w-auto" />
                         <div className="flex flex-col">
                             <p className="font-bold text-[#0B132A] text-[20px] md:text-[25px] mb-1 ">30+</p>
                             <p className="text-[#4F5665] text-[14px] md:text-[16px]">Locations</p>
                         </div>
                     </div>
                     <div className="header__block-2_item flex flex-row items-center justify-center gap-4 md:gap-6 w-full sm:w-1/3 pt-4 sm:pt-0">
                         <Image loading={"lazy"} src={IcServer} alt="servers" className="w-8 h-8 md:w-auto" />
                         <div className="flex flex-col">
                             <p className="font-bold text-[#0B132A] text-[20px] md:text-[25px] mb-1">50+</p>
                             <p className="text-[#4F5665] text-[14px] md:text-[16px]">Servers</p>
                         </div>
                     </div>
                 </div>
             </div>
        </div>
    )
}

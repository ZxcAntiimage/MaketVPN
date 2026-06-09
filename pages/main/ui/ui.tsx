import { Header } from "@/widgets/header";
import { MainContent } from "@/widgets/main";

export default function MainPage(){
    return(
        <div className="w-full h-full">
            <Header/>
            <MainContent/>
        </div>
    )
}
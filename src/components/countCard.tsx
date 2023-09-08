
import { byellow } from "@/assets/colors"
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import { styled } from "../../stiches.config"
import {LuArrowRightCircle, LuArrowRightToLine} from 'react-icons/lu'

type Props = {
    title:string, 
    count: number
}

const CountCard = ({title, count}:Props) => {
    return(
        <Root className="flex flex-col gap-3 justify-center px-5 items-start w-full">
            <p className="text-xl">{title}</p>
            <div className="flex items-center justify-between gap-5 w-full">
                <CountNumber className="text-2xl">{count}</CountNumber>
                <LuArrowRightToLine size={30} color={byellow}/>
            </div>
        </Root>
    )
}

const Root = styled('div', {
    maxWidth:"400px",
    aspectRatio:"400/200",
    boxShadow:"1px 1px 2px 1px #e4a95130",

})



const CountNumber = styled('div', {
    backgroundColor:"$yellow100",
    padding:"4%",
    borderRadius:"50%",
})


export default CountCard
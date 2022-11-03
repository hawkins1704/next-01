import { useRouter } from "next/router"
import Link from "next/link"
const style={
    color:'#0070f3',
}
const ActiveLink = ({href,text}) => {
    const {asPath}=useRouter();
  return (
    <Link href={href} style={(asPath===href)?style:null}>{text}</Link>
  )
}

export default ActiveLink
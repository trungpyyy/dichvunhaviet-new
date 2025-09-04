import { useParams } from "react-router"
export default function Test() {
  const {test} = useParams();
  console.log(test)
  return (
    <div>Test</div>
  )
}

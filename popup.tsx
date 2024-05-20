import { useState } from "react"
import Index from "./components/Index";
import { ChakraProvider } from '@chakra-ui/react'

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <ChakraProvider>
<Index />
    </ChakraProvider>
  )
}

export default IndexPopup

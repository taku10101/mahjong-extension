import { ChakraProvider } from "@chakra-ui/react"

import Index from "./components/Index"

function IndexPopup() {
  return (
    <ChakraProvider>
      <Index />
    </ChakraProvider>
  )
}

export default IndexPopup

import React from "react";
import {
  Grid,
  GridItem,
  Box,
  Image,
  Container,
  Button,
} from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon, EmailIcon } from "@chakra-ui/icons";

function GridComp(props) {
  return (
    // <Container>
    //   <Grid templateColumns="repeat(2,1fr)" templateRows="repeat(2,1fr)">
    //     <GridItem>
    //       <Box maxW="sm">
    //         <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
    //       </Box>
    //     </GridItem>
    //     <GridItem>
    //       <Box maxW="sm">
    //         <Image
    //           src="https://digitalsynopsis.com/wp-content/uploads/2014/06/supercar-wallpapers-bugatti-3.jpg"
    //           alt="Car1"
    //         />
    //       </Box>
    //     </GridItem>
    //     <GridItem>
    //       <Box maxW="sm">
    //         <Image
    //           src="https://th.bing.com/th/id/OIP.LetyK3wxsvKevxvmaQGL1QHaFj?pid=ImgDet&rs=1"
    //           alt="Dan Abramov"
    //         />
    //       </Box>
    //     </GridItem>
    //     <GridItem>
    //       <Box maxW="sm">
    //         <Image
    //           src="https://www.gannett-cdn.com/-mm-/d79d626f7be1d8a0681c896ce5f79d37003c3064/c=0-331-4466-2854/local/-/media/2017/01/30/Salinas/Salinas/636213994394143446-2017-Ford-Fusion-Sport.jpg?width=3200&height=1680&fit=crop"
    //           alt="Car1"
    //         />
    //       </Box>
    //     </GridItem>
    //   </Grid>
    // </Container>
    <Container maxW="6xl" bg="red" mt="5" p="20px">
      <Grid
        gap="5"
        templateColumns="repeat(5,1fr)"
        templateRows="repeat(2,100px)"
      >
        <GridItem
          bg="orange"
          w="100%"
          colStart="1"
          colEnd="2"
          rowStart="1"
          rowEnd="3"
        >
          <PhoneIcon />
          <AddIcon />
          <Button leftIcon={<EmailIcon />} colorScheme="green" variant="solid">
            Email
          </Button>
        </GridItem>
        <GridItem
          bg="orange"
          w="100%"
          colStart="2"
          colEnd="4"
          rowStart="1"
          rowEnd="2"
        />
        <GridItem
          bg="orange"
          w="100%"
          colStart="4"
          colEnd="6"
          rowStart="1"
          rowEnd="2"
        />
        <GridItem
          bg="orange"
          w="100%"
          colStart="2"
          colEnd="6"
          rowStart="2"
          rowEnd="3"
        />
        {/* <GridItem
          bg="orange"
          w="100%"
          colStart="4"
          colEnd="6"
          rowStart="2"
          rowEnd="3"
        /> */}
      </Grid>
    </Container>
  );
}

export default GridComp;

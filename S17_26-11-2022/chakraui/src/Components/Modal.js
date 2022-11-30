import React from "react";
import {
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Container,
} from "@chakra-ui/react";

function ModalComp(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Container mt="10">
        <Button variant="solid" color="blue" onClick={onOpen}>
          Open Modal
        </Button>
      </Container>

      <Modal isOpen={isOpen}>
        <ModalContent>
          <ModalHeader>Modal Header</ModalHeader>

          <ModalBody>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
            praesentium nemo non ducimus, possimus illo quasi pariatur cumque
            laborum? Officiis dolor delectus aperiam reiciendis odio cumque
            eligendi voluptates itaque iste sequi sapiente quibusdam quae aut
            minima, accusamus soluta eaque aliquam! Pariatur laudantium
            reprehenderit laborum officia blanditiis deleniti, ratione possimus
            incidunt!
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default ModalComp;

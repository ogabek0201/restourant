import React from "react";
import Container from "../s-components/Container";
import Flex_con from "../s-components/Flex_con";
import logo from "../../assets/img/logo.png";
import Text from "../s-components/Text";
import Btn from "../s-components/Btn";


function Header() {
  return (
    <Container data-aos="fade-down" bg='#fff'>
      <Flex_con h="90px" gap="40px" jes="space-between" align='center'>
        <img src={logo} alt="" />
        <div className="list">
          <Flex_con align='center' gap='32px'>
            <Text color="#101A24">Menu</Text>
            <Text color="#101A24">Events</Text>
            <Text color="#101A24">Gallery</Text>
            <Text color="#101A24">About</Text>
            <Text color="#101A24">Contact</Text>
          </Flex_con>
        </div>
          <Btn color='#FFFFFF' size='20px' p='16px 32px' border='15px 0px 15px 0px' bg='#EA6D27'>Book a table </Btn>
      </Flex_con>
    </Container>
  );
}

export default Header;

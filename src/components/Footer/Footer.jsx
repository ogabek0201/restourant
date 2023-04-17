import React from "react";
import Container from "../s-components/Container";
import Flex_con from "../s-components/Flex_con";
import Head from "../s-components/Head";
import Text from "../s-components/Text";
import logo from "../../assets/img/logo.png";
import soc from "../../assets/img/soc.png";
function Footer() {
  return (
    <Container bg={"#F5FBFC"} m='0px 0 0'>
      <Flex_con jes='space-between' align='center' h='430px' >
        <div className="col">
          <img src={logo} alt="" />
          <Text wid='240px' color='#546285' m='30px 0 0'>
          Takeaway & Delivery template for small - medium businesses.
          </Text>
        </div>
        <Flex_con gap='120px'>
          <div className="col">
            <Head size='13px' color='#08090A'>COMPANY</Head>
            <Text color='#546285' m='28px 0'>Home</Text>
            <Text color='#546285' m='28px 0'>Order</Text>
            <Text color='#546285' m='28px 0'>FAQ</Text>
            <Text color='#546285' m='28px 0'>Contact</Text>
          </div>
          <div className="col">
            <Head size='13px' color='#08090A'>TEMPLATE</Head>
            <Text color='#546285' m='28px 0'>Style Guide</Text>
            <Text color='#546285' m='28px 0'>Changelog</Text>
            <Text color='#546285' m='28px 0'>Licence</Text>
            <Text color='#546285' m='28px 0'>Webflow University</Text>
          </div>
          <div className="col">
            <Head size='13px' color='#08090A' m='0 0 20px'>FLOWBASE</Head>
            <img src={soc} alt="" />
          </div>
        </Flex_con>
      </Flex_con>
    </Container>
  );
}

export default Footer;

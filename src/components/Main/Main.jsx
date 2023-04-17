import React, { useEffect } from "react";
import Container from "../s-components/Container";
import one from "../../assets/img/1.png";
import two from "../../assets/img/2,1.png";
import tw from "../../assets/img/2,2.png";
import t from "../../assets/img/2,3.png";
import o from "../../assets/img/2,4.png";
import three from "../../assets/img/3.png";
import check from "../../assets/img/check.png";
import four from "../../assets/img/4.png";
import five from "../../assets/img/5.png";
import user from "../../assets/img/user.png";
import soc from "../../assets/img/soc.png";
import Head from "../s-components/Head";
import Text from "../s-components/Text";
import Btn from "../s-components/Btn";
import Flex_con from "../s-components/Flex_con";
import Eat from "./Eat/Eat";
import Feed from "./Feed/Feed.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import AOS from "aos";
import "aos/dist/aos.css";

const eat = [
  {
    img: two,
    h: "Lumpia with Suace",
    p: "Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor ",
  },
  {
    img: tw,
    h: "Fish and Veggie",
    p: "Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor ",
  },
  {
    img: t,
    h: "Tofu Chili",
    p: "Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor ",
  },
  {
    img: o,
    h: "Egg and Cocumber",
    p: "Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor ",
  },
];

const feed = [
  { user: user, names: "Ama Ampomah", jobs: "CEO & Founder Inc " },
  { user: user, names: "Ama Ampomah", jobs: "CEO & Founder Inc " },
  { user: user, names: "Ama Ampomah", jobs: "CEO & Founder Inc " },
  { user: user, names: "Ama Ampomah", jobs: "CEO & Founder Inc " },
];

function Main() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <Container
        m="50px 0"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <Flex_con>
          <div>
            <Head w="700" size="70px" wid="610px" color="#101A24">
              We provide the best food for you
            </Head>
            <Text color="#5C6574" wid="375px" m="70px 0 20px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Flex_con gap="25px" m="0 0 100px">
              <Btn
                color="#FFFFFF"
                size="20px"
                p="16px 32px"
                border="15px 0px 15px 0px"
                bg="#101A24"
              >
                Menu
              </Btn>
              <Btn
                color="#FFFFFF"
                size="20px"
                p="16px 32px"
                border="15px 0px 15px 0px"
                bg="#EA6D27"
              >
                Book a table{" "}
              </Btn>
            </Flex_con>
            <img src={soc} alt="" />
          </div>
          <img src={one} alt="" width={552} className="img" />
        </Flex_con>
      </Container>
      <Container bg="#F3F3F4" p="100px 0 0">
        <Head
          data-aos="zoom-in"
          p="100px 0 0"
          color="#101A24"
          w="700"
          size="60px"
          align="center"
        >
          Our Special Dishes
        </Head>
        <Text
          data-aos="zoom-out"
          color="#5C6574"
          wid="375px"
          m="20px auto 150px"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt{" "}
        </Text>
        <Flex_con gap="30px" p="0 0 150px" data-aos="flip-up">
          {eat.map((e) => (
            <Eat {...e} />
          ))}
        </Flex_con>
        <Flex_con
          p="0 0 300px"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="200"
          data-aos-offset="0"
        >
          <img src={three} alt="" width={700} className="img" />
          <div>
            <Head color="#101A24" w="700" size="60px" wid="520px">
              Wecome to Our Restaurant
            </Head>
            <Text color="#5C6574" wid="375px" m="30px 0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Flex_con gap="25px" m="0 0 100px">
              <Btn
                color="#FFFFFF"
                size="20px"
                p="16px 32px"
                border="15px 0px 15px 0px"
                bg="#101A24"
              >
                Menu
              </Btn>
              <Btn
                color="#FFFFFF"
                size="20px"
                p="16px 32px"
                border="15px 0px 15px 0px"
                bg="#EA6D27"
              >
                Book a table{" "}
              </Btn>
            </Flex_con>
          </div>
        </Flex_con>
      </Container>
      <Container p="120px 0">
        <Flex_con data-aos="fade-up" data-aos-duration="3000">
          <div>
            <Head color="#101A24" w="700" size="60px">
              Our Expects Chef
            </Head>
            <Text color="#5C6574" wid="375px" m="20px 0 25px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Flex_con>
              <Flex_con dir="column" gap="33px">
                <Flex_con gap="10px" align="center">
                  <img src={check} alt="" />
                  <Text color="#5C6574">
                    Lorem ipsum dolor sit amet, consectetur{" "}
                  </Text>
                </Flex_con>
                <Flex_con gap="10px" align="center">
                  <img src={check} alt="" />
                  <Text color="#5C6574">
                    Lorem ipsum dolor sit amet, consectetur{" "}
                  </Text>
                </Flex_con>
                <Flex_con gap="10px" align="center">
                  <img src={check} alt="" />
                  <Text color="#5C6574">
                    Lorem ipsum dolor sit amet, consectetur{" "}
                  </Text>
                </Flex_con>
              </Flex_con>
              <Flex_con dir="column" gap="33px">
                <Flex_con gap="10px" align="center">
                  <img src={check} alt="" />
                  <Text color="#5C6574">
                    Lorem ipsum dolor sit amet, consectetur{" "}
                  </Text>
                </Flex_con>
                <Flex_con gap="10px" align="center">
                  <img src={check} alt="" />
                  <Text color="#5C6574">
                    Lorem ipsum dolor sit amet, consectetur{" "}
                  </Text>
                </Flex_con>
                <Flex_con gap="10px" align="center">
                  <img src={check} alt="" />
                  <Text color="#5C6574">
                    Lorem ipsum dolor sit amet, consectetur{" "}
                  </Text>
                </Flex_con>
              </Flex_con>
            </Flex_con>
            <Flex_con gap="25px" m="50px 0 0px" jes="center">
              <Btn
                color="#FFFFFF"
                size="20px"
                p="16px 32px"
                border="15px 0px 15px 0px"
                bg="#101A24"
              >
                Menu
              </Btn>
              <Btn
                color="#FFFFFF"
                size="20px"
                p="16px 32px"
                border="15px 0px 15px 0px"
                bg="#EA6D27"
              >
                Book a table{" "}
              </Btn>
            </Flex_con>
          </div>
          <img src={four} alt="" className="img" />
        </Flex_con>
      </Container>
      <Container bg="#F3F4F4" p="100px 0">
        <Head color="#101A24" w="700" size="60px" align="center">
          Our Happy Customers
        </Head>
        <Text color="#5C6574" wid="375px" align="center" m="18px auto 0px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt{" "}
        </Text>
        <Swiper
          data-aos="zoom-out-up"
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {feed.map((e) => (
            <SwiperSlide>
              <Feed {...e} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
}

export default Main;

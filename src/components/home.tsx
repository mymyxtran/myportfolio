import * as React from "react";
import {
  Flex,
  Avatar,
  Box,
  Text,
  Badge,
  Stack,
  Link,
  UnorderedList,
  ListItem,
  useColorModeValue
} from "@chakra-ui/react";
import { Link as NavLink } from "react-router-dom";
import { MotionBox, MotionFlex } from "./motion";
import Header from "./header";
import Projects from "./projects";
import { projectsList } from "data/projects-list";
import "style/style.css";
import UserIcon from "assets/images/user_icon.png";

const ANIMATION_DURATION = 0.5;
const ORANGE = "#ff9400";

const Home = () => {
  return (
    <Flex direction="column" align="center">
      <Flex direction={["column", "column", "row"]}>
        <MotionBox
          opacity="0"
          initial={{
            translateX: -150,
            opacity: 0
          }}
          animate={{
            translateX: 0,
            opacity: 1,
            transition: {
              duration: ANIMATION_DURATION
            }
          }}
          m="auto"
          mb={[16, 16, "auto"]}
        >
          <Avatar
            size={"2xl"}
            src={UserIcon}
            // src={"https://avatars2.githubusercontent.com/u/37842853?v=4"}
          />
        </MotionBox>
        <MotionFlex
          ml={["auto", "auto", 16]}
          m={["auto", "initial"]}
          w={["90%", "85%", "80%"]}
          maxW="800px"
          opacity="0"
          justify="center"
          direction="column"
          initial={{
            opacity: 0,
            translateX: 150
          }}
          animate={{
            opacity: 1,
            translateX: 0,
            transition: {
              duration: ANIMATION_DURATION
            }
          }}
        >
          <Header underlineColor={ORANGE} emoji="👋" mt={0} className="face">
            Hello!
          </Header>
          <Box as="h2" fontSize="2xl" fontWeight="400" textAlign="left">
            My name is{" "}
            <Box as="strong" fontWeight="600">
              Mymy
            </Box>{" "}
            and I am computer engineering student
            <Box as="span" whiteSpace="nowrap">
            </Box>{" "}
            from{" "}
            <Box as="span" whiteSpace="nowrap">
              Canada 
            </Box>
          </Box>
          <Box as="h2" fontSize="2xl" fontWeight="400" mt={5} textAlign="left">
            I have a strong desire to positively impact the world and am not afraid to take a shot. I am comfortable with working in fast pace environments, and embrace new challenges. My interest lies in the following areas: software development, data analytics, environmental policy, and education.😊
          </Box>
        </MotionFlex>
      </Flex>
      <MotionBox
        w="100%"
        opacity="0"
        initial={{
          translateY: 80
        }}
        animate={{
          translateY: 0,
          opacity: 1,
          transition: {
            delay: ANIMATION_DURATION - 0.1,
            duration: ANIMATION_DURATION
          }
        }}
      >
        <Box mt={10}>
          <Stack
            mb={10}
            mx={[0, 0, 10]}
            padding={4}
            align="start"
            borderLeft="4px solid"
            borderColor={"#53c8c4"}
            color={"whatsapp"}
            _hover={{ shadow: "lg" }}
            backgroundColor={useColorModeValue("gray.100", "#1e2533")}
            rounded="sm"
            fontSize="md"
          >
            <Text textAlign="center" color="#53c8c4" fontWeight="bold">
              Highlights
            </Text>
            <UnorderedList textAlign="left" paddingLeft={5} m={0}>
            <ListItem>
                <Link as={NavLink} to="/open-source">
                   Open Source Project
                  <Badge ml="1" colorScheme="green">
                    New
                  </Badge>
                </Link>
            </ListItem>
              <ListItem>
                <Link as={NavLink} to="/story-timeline">
                  Timeline of Experiences
                </Link>
              </ListItem>
              <ListItem>
                <Link as={NavLink} to="/tech-stack">
                  My Tech Stack
                </Link>
              </ListItem>
              <ListItem>
                <Link as={NavLink} to="/achievements">
                  Achievements
                </Link>
              </ListItem>
            </UnorderedList>
          </Stack>
          <Projects projects={projectsList} />
        </Box>
      </MotionBox>
    </Flex>
  );
};

export default Home;

import * as React from "react";
import {
  FiPackage,
  FiHome,
  FiEdit2,
  FiUsers,
  FiBarChart2,
  FiCalendar,
} from "react-icons/fi";
import { VStack, Heading, Box, Link, LinkProps } from "@chakra-ui/react";
import { TimelineItem } from "./Timeline";
import { PageSlideFade } from "./page-transitions";
import { Link as NavLink } from "react-router-dom";
import Header from "./header";

interface ExternalLinkProps extends LinkProps {
  url: string;
  linkProps?: LinkProps;
  text: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  url,
  linkProps,
  text,
  ...props
}) => {
  return (
    <Link href={url} {...linkProps} {...props}>
      {text}
    </Link>
  );
};

const InternalLink: React.FC<ExternalLinkProps> = ({
  url,
  linkProps,
  text,
  ...props
}) => {
  return (
    <Link as={NavLink} to={url} {...linkProps} {...props}>
      {text}
    </Link>
  );
};
const Achievements = () => {
  return (
    <PageSlideFade>
      <Box align="start" mb={6}>
        <Header mt={0} mb={0}>
          Achievements
        </Header>
      </Box>
      <VStack textAlign="start" align="start" mb={5}>
        <Box>
        <Heading fontSize="2xl" fontWeight="600" my={5}>
            2023
          </Heading>
          <Box>
            <TimelineItem icon={FiUsers}>In my last semester of school. ❤️</TimelineItem>
            <TimelineItem icon={FiHome}>
              Built my portfolio with React and Chakra UI{" "}
              <InternalLink
                color={"blue.200"}
                url="https://github.com/mymyxtran/myportfolio"
                text={"source on github"}
              />
            </TimelineItem>
          </Box>

          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2022
          </Heading>
          <Box>
             <TimelineItem icon={FiPackage}>
              Published or contributed to{" "}
              <InternalLink
                color={"blue.200"}
                url="/open-source"
                text={"1 open-source repository"}
              />
            </TimelineItem>
          </Box>
        </Box>
        <Box>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2020
          </Heading>
          <Box>
            <TimelineItem icon={FiCalendar} skipTrail>
              Participated in my first hackathon, NewHacks - IEEE University of Toronto, {" "}
              <ExternalLink
                color={"blue.200"}
                url="https://devpost.com/software/toasty-timer"
                text={"source on Devpost"}
                target="_blank"
              />
              .
            </TimelineItem>
          </Box>
        </Box>
      </VStack>
    </PageSlideFade>
  );
};

export default Achievements;

import { Heading } from "@chakra-ui/react";
import PostCard from "./PostCard";
import { Container, Grid, GridItem } from "@chakra-ui/react";
import {blogData} from "../../Data/index"

const RecentPosts = () => {
  return (
    <Container maxW="1300px">
    <Heading m="8" fontSize="2xl">
        Recent Posts
      </Heading>
      <Grid gridGap="4" gridTemplateColumns="repeat(auto-fit,minmax(20rem,1fr))">
        
      {blogData.map((post) => (
          <GridItem key={post.title} display="flex" justifyContent="center">
            <PostCard post={post} />
          </GridItem>
        ))}
      </Grid>
      <Heading m="8" textAlign="center" fontSize="2xl">
        Read more...
      </Heading>
    </Container>
  );
};

export default RecentPosts;

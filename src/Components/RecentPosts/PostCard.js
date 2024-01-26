import { Avatar, Button, Flex, Heading, Stack,Tag,Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';

const PostCard = ({post}) => {
  return (
    <Stack w="20rem" boxShadow="lg" borderRadius="lg" overflow="hidden">
        <Image src={post.imageUrl}/>
        <Stack p="4">
            <Heading mb="4" fontSize="xl">{post.title}</Heading>
            <Flex align="center" mb="4">
            <Avatar size="sm" mr="2" src={post.avatar}/>
            <Text fontweight="bold" mr="2" fontSize="md">{post.authorName}</Text>
            <Text fontSize="md">{post.publishDate}</Text>
            </Flex>
            <Text mb="4">{post.description}</Text>
            <Flex mb="4">
                {post.tags.map((tag)=>(
                <Tag key={tag}>{tag}</Tag>
                ))}
            </Flex>
            <Button alignSelf="flex-end" colorScheme='orange'>Readmore</Button>
        </Stack>
    </Stack>
  )
}

export default PostCard;
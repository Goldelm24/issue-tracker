import { Box, Card, Flex } from '@radix-ui/themes';
import Skeleteon from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const LoadingIssueDetailPage = () => {
  return (
    <Box className='max-w-xl'>
      <Skeleteon/>
      <Flex className="space-x-3" my="2">
        <Skeleteon width='5rem'/>
        <Skeleteon width='8rem'/>
      </Flex>
      <Card className="prose" mt="4">
       <Skeleteon count={3}/>
      </Card>
    </Box>
  );
};

export default LoadingIssueDetailPage;

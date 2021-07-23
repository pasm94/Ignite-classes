import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align='center'>
      {showProfileData && (
        <Box mr='4' textAlign='right'>
          <Text>Paulo A. S. Müller</Text>
          <Text color='gray.300' fontSize='small'>
            paulo@example.com
          </Text>
        </Box>
      )}

      <Avatar
        size='md'
        name='Paulo Müller'
        src='https://github.com/pasm94.png'
      />
    </Flex>
  );
}

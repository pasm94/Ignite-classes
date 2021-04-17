import {
  Icon,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  Text,
} from '@chakra-ui/react';
import { ElementType } from 'react';
import Link from 'next/link';

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  // ElementType -> quando eu passo o nome/referencia do componente (RiDashboardLine),
  // e nao a declaracao <RiDashboardLine/>
  children: string;
  href: string;
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <Link href={href} passHref>
      {/* passHref mostra o link no hover, eh como colocar um <a> em volta de tudo */}
      <ChakraLink display='flex' align='center' {...rest}>
        <Icon as={icon} fontSize='20' />
        <Text ml='4' fontWeight='medium'>
          {children}
        </Text>
      </ChakraLink>
    </Link>
  );
}

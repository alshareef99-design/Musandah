import {
    Box,
    HStack,
    IconButton,
    Image,
    VStack,
    useBreakpointValue,
    useDisclosure,
} from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Link as RouterLink } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';
import { Navbar } from './Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveLink } from '@/store/slices/navSlice';
import { FaXmark } from 'react-icons/fa6';
import { LangToggle } from './LangToggle';
import { selectLanguage } from '../store/slices/languageSlice';
import { useRef } from 'react'; // 👈 import React ref
import { useOnClickOutside } from 'usehooks-ts';
import { useEffect, useState } from "react";


export const Header = () => {
    const headerRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const lang = useSelector(selectLanguage) === 'en';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },  []);
    // Redux hooks
    const dispatch = useDispatch();
    const currentLanguage = useSelector(selectLanguage);
    const isMobileOrTablet = useBreakpointValue({ base: true, lg: false });
    const { open, onToggle, onClose } = useDisclosure();
    // 👇 Ref for collapsible menu
    const menuRef = useRef<HTMLDivElement>(null!);

    // 👇 Hook: close when clicking outside
    useOnClickOutside(menuRef, () => {
        if (open) onClose();
    });
    return (
<HStack
      as="header"
      ref={headerRef}
      position="sticky"
      top={0}
      zIndex={100}
      w="100%"
      p={4}
      justifyContent="center"
      bg={scrolled ? "white" : useColorModeValue("white", "gray.900")}
      transition="background-color 0.3s ease"
    >
            {/* Header Row */}
            <HStack w={"fill"} justify="space-between" gap={'4rem'} align="center">
                {/* Logo */}
                <HStack gap={"4rem"} justify="space-between" >
                    <RouterLink to="/" onClick={() => dispatch(setActiveLink('/'))}>
                        <Image
                            src={currentLanguage === 'en' ? '/logo-en.png' : '/logo-ar.png'}
                            alt="Logo"
                            width="4.25rem"
                            height={"auto"}
                        />
                    </RouterLink>

                    <HStack gap={"3.5rem"}>
                        {!isMobileOrTablet && (
                            <Navbar />
                        )}

                        <LangToggle />
                    </HStack>
                </HStack>


                {/* Desktop Login (hidden) */}
                {false && !isMobileOrTablet && (
                    <Box p={"1rem"} gap={"10px"} borderRadius={'1rem'}
                        onClick={() => window.open('https://portal.lsc-sa.net/', '_blank')}
                        bgColor={"#5A77BB"} color={"white"}
                        _hover={{ cursor: "pointer", transform: "scale(1.02)" }}
                    >                 
{ lang ? 'Login' : 'تسجيل الدخول' }
                    </Box>
                )}

                {/* Mobile Hamburger */}
                {isMobileOrTablet &&
                    ((!open && (
                        <IconButton
                            border={'1px solid #ddd'}
                            bgColor={'transparent'}
                            color={'#4d7cb1'}
                            aria-label="Toggle Menu"
                            onClick={onToggle}
                            variant="outline"
                        >
                            <MdMenu size="md" />
                        </IconButton>
                    )) ||
                        (open && (
                            <IconButton
                                bgColor={'transparent'}
                                color={'#4d7cb1'}
                                aria-label="Toggle Menu"
                                onClick={onToggle}
                                variant="outline"
                            >
                                <FaXmark />
                            </IconButton>
                        )))}
            </HStack>

            {/* Mobile Collapsible Menu */}
            {isMobileOrTablet && open && (
                <VStack
                    zIndex={100}
                    position={"fixed"}
                    ref={menuRef}
                    top={"100px"}
                    left={0}
                    w="100%"
                    maxW={"90vw"}
                    justify="space-between"
                    align="stretch"
                    gap={4}
                    bg={useColorModeValue('gray.50', 'gray.800')}
                    p={4}
                    borderRadius="md"
                    boxShadow="md"
                >
                    <Navbar />
                    {/* Mobile Login (hidden) */}
                    {false && (
                      <Box p={"1rem"}
                          onClick={() => window.open('https://portal.lsc-sa.net/', '_blank')}
                          gap={"10px"} borderRadius={'1rem'} bgColor={"#5A77BB"} color={"white"}
                      >
                          تسجيل الدخول
                      </Box>
                    )}
                </VStack>
            )}
        </HStack>
    );
};

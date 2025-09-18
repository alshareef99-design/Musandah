import {
    Box,
    Menu,
    Portal,

} from '@chakra-ui/react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { setLanguage } from '../store/slices/languageSlice';
import { useDispatch, useSelector } from 'react-redux';
// import { toaster } from "./ui/toaster" // your custom toaster.tsx

import { selectLanguage } from '../store/slices/languageSlice';
export const LangToggle = () => {
    const dispatch = useDispatch();
    // const InfoToaster = () => {
    //     toaster.create({
    //         title: "English translation coming soon",
    //         description: "We are working on providing the English version of this content.",
    //         type: "Info",   // ✅ new API uses "type", not "status"
    //         duration: 5000,
    //         closable: false,    // ✅ new API uses "closable", not "isClosable"
    //     })
    // }
    const currentLanguage = useSelector(selectLanguage);

    return (
        <>
            {/* Language Switcher */}
            <Menu.Root >
                <Menu.Trigger asChild>
                    <Box
                        _hover={{ cursor: "pointer", transform: "scale(1.1)" }}
                        width={'auto'} gap={'0.5rem'} display={'flex'} flexDir={'row'}>
                        {/* {currentLanguage === 'en' ? (
                            <>
                                English <MdOutlineKeyboardArrowDown size={'1.5rem'} />
                            </>
                        ) : (
                            <>
                                <MdOutlineKeyboardArrowDown size={'1.5rem'} />
                                العربية

                            </>
                        )} */}
                                 <MdOutlineKeyboardArrowDown size={'1.5rem'} />
                                 العربية
                    </Box>
                </Menu.Trigger>

                <Portal>
                    <Menu.Positioner>
                        <Menu.Content>
                            <Menu.Item
                            //     value="en"
                            //     onClick={() => 
                            //         // InfoToaster()
                            //         dispatch(setLanguage('en'))
                            //     }
                            // >
                            //     English
                            // </Menu.Item>
                            // <Menu.Item
                                value="ar"
                                onClick={() => dispatch(setLanguage('ar'))}
                            >
                                العربية
                            </Menu.Item>
                        </Menu.Content>
                    </Menu.Positioner>
                </Portal>
            </Menu.Root>
        </>
    )
}
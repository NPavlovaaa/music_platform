import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {useRouter} from "next/router";
import {useState} from "react";
import {AppBar, CssBaseline, IconButton, Toolbar, Typography} from "@mui/material";
import {Home, QueueMusic, ChevronLeft, Menu} from "@mui/icons-material";
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';

import styles from "./Navbar.module.scss";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const menuItems = [
        {text: 'Главная', href: '/'},
        {text: 'Список треков', href: '/tracks'},
        {text: 'Список альбомов', href: '/albums'},
    ]

    return (
        <div>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={styles.header}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                    >
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Меню
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="persistent"
                PaperProps={{
                    sx: {
                        backgroundColor: "#101010"
                    }
                }}
                anchor="left"
                open={open}
            >
                <div>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeft/>
                    </IconButton>
                </div>
                <List>
                    {menuItems.map(({text, href}) => (
                        <ListItem button key={href} onClick={() => router.push(href)}>
                            <ListItemIcon>
                                {text === 'Главная' ? <Home color="primary"/> :
                                 text === 'Список треков' ? <QueueMusic color="primary"/> : <LibraryMusicOutlinedIcon color="primary"/>}
                            </ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    );
}

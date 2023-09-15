import React from "react";
import Navbar from "../components/Navbar/Navbar";
import {Container, CssBaseline} from "@mui/material";
import {createMuiTheme, ThemeProvider} from "@mui/material";
import { ThemeOptions } from '@mui/material/styles';
import Header from "../components/Header/Header";

export const themeOptions: ThemeOptions = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#e81c65',
        },
        secondary: {
            main: '#f50057',
        },
        background: {
            paper: '#101010',
        },
        divider: 'rgba(0,0,0,0.18)',
        error: {
            main: '#fb0408',
        },
        info: {
            main: '#f50057',
        },
    },
};

const MainLayout: React.FC = ({children}) => {
    const theme = createMuiTheme(themeOptions);
    return(
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header/>
            <Container style={{margin: '90px auto'}}>
                {children}
            </Container>
        </ThemeProvider>
    )
}
export default MainLayout
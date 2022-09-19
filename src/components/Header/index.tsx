import React, { useState } from 'react'
import { StyleSheet, useWindowDimensions, Image, Text, View, TouchableOpacity } from 'react-native'
import menu from '../../../assets/icons/menu.png'
import logo from '../../../assets/images/generic-logo.png'


const paddingResponsive = (width: number) => {
    if (width < 410) return '0'
    else if (width < 480) return '25%'
    else if (width < 680) return '30%'
    else if (width > 680) return '40%'
}

function RenderMenu(width: number, { menuOpen, setMenuOpen }: { menuOpen: boolean, setMenuOpen: any }) {
    const GoSchedule = () => {
        console.log('it works (:');
    }
    if (width < 415) {
        return (<TouchableOpacity onPress={() => setMenuOpen(true)}><Image style={styles.logoMenu} source={menu} /></TouchableOpacity>)
    }
    else {
        return (<ul style={{ ...styles.list, paddingLeft: paddingResponsive(width) }}>
            <a href="#about">
                <li style={styles.options}>Sobre</li>
            </a>
            <a href="#instagram">
                <li style={styles.options}>Instagram</li>
            </a>
            <a href='https://www.trinks.com/ferreirabarbearia' target="_blank">
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => GoSchedule()}>
                    <li style={styles.options}>Agendar</li>
                </TouchableOpacity>
            </a>
        </ul>)
    }
}


export default function Header({ menuOpen, setMenuOpen }: { menuOpen: boolean, setMenuOpen: any }) {
    const { width } = useWindowDimensions()
    console.log(width);

    return (
        <View style={styles.header}>
            <View style={styles.menu}>
                <>
                    <a href='#'>
                        <Image source={logo} style={styles.logo} />
                    </a>
                    {RenderMenu(width,
                    {menuOpen,
                    setMenuOpen})}
                </>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        height: 64,
        width: '100%',
    },
    menu: {
        flex: 2,
        display: 'flex',
        flexDirection: 'row',
        height: '15vh',
        width: '100%',
        backgroundColor: "#ffbc00",
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 5,
    },
    logo: {
        padding: 25,
        width: 10,
        height: 10,
        alignItems: 'center',
        marginLeft: 5,
    },
    list: {
        flex: 1,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    options: {
        paddingRight: 22,
        color: "#272727",
        alignItems: 'center',
        fontFamily: 'Roboto Condensed',
        fontSize: 18
    },
    logoMenu: {
        width: 20,
        height: 20,
        paddingRight: 6,
        alignItems: 'center',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#FFD664',
        paddingVertical: 10,
        borderRadius: 7,
    }
})
// #e8e8e8
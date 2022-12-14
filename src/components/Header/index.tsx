import React, { useState } from 'react'
import { StyleSheet, useWindowDimensions, Image, Text, View, TouchableOpacity } from 'react-native'
import menu from '../../../assets/icons/menu.png'
import logo from '../../../assets/images/generic-logo.png'
import { Options } from './style'


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
    if (width < 590) {
        return (<TouchableOpacity onPress={() => setMenuOpen(true)}><Image style={styles.logoMenu} source={menu} /></TouchableOpacity>)
    }
    else {
        return (<ul style={{ ...styles.list, paddingLeft: paddingResponsive(width) }}>
            <a href="#about">
                <Options>Sobre</Options>
            </a>
            <a href="#instagram">
                <Options>Instagram</Options>
            </a>
            <a href='https://www.trinks.com/ferreirabarbearia' target="_blank">
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => GoSchedule()}>
                    <Options>Agendar</Options>
                </TouchableOpacity>
            </a>
        </ul>)
    }
}


export default function Header({ menuOpen, setMenuOpen }: { menuOpen: boolean, setMenuOpen: any }) {
    const { width } = useWindowDimensions()
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
    logoMenu: {
        width: 20,
        height: 20,
        paddingRight: 6,
        alignItems: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffbc00',
        paddingVertical: 10,
        borderRadius: 7,
    }
})
import React from 'react'
import { StyleSheet, useWindowDimensions, Text, View } from 'react-native'

const paddingResponsive = (width:number) => {
    if (width < 360) return '0'
    else if (width < 480) return '25%'
    else if (width < 680) return '30%'
    else if (width > 680) return '40%'
}

export default function Header() {
    const { width } = useWindowDimensions()
    console.log(width);
    

    return (
        <header style={styles.header}>
            <nav style={styles.menu}>
                <p style={styles.logo}>okokokokok</p>
                <ul style={{...styles.list, paddingLeft: paddingResponsive(width)}}>
                    <li style={styles.options}>balabl</li>
                    <li style={styles.options}>bababl</li>
                    <li>balbalbal</li>
                </ul>
            </nav>
        </header>
    )
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        height: '10vh',
        width: '100%',
        backgroundColor: 'blue'
    },
    menu: {
        flex: 2,
        display: 'flex',
        flexDirection: 'row',
        height: '10vh',
        width: '100%',
        backgroundColor: 'blue',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        padding: 12,
        paddingLeft: 16,
    },
    list: {
        flex: 1,
        display: 'flex',
        justifyContent: 'space-around',
    
    },
    options: {
        paddingRight: 22,
    }
})
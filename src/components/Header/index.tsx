import React from 'react'
import { StyleSheet, useWindowDimensions, Image, Text, View } from 'react-native'
import menu from '../../../assets/icons/menu.png'


const paddingResponsive = (width: number) => {
    if (width < 410) return '0'
    else if (width < 480) return '25%'
    else if (width < 680) return '30%'
    else if (width > 680) return '40%'
}
function RenderMenu(width: number) {
    console.log(width);
    if (width < 415) {
        return (<Image style={styles.logoMenu} source={menu} />)
    }
    else {
        return (<ul style={{ ...styles.list, paddingLeft: paddingResponsive(width) }}>
            <li style={styles.options}>balabl</li>
            <li style={styles.options}>bababl</li>
            <li>balbalbal</li>
        </ul>)
    }
}


export default function Header() {
    const { width } = useWindowDimensions()
    console.log(width);

    return (
        <View style={styles.header}>
            <View style={styles.menu}>
                <>
                    <Text style={styles.logo}>okokokokok</Text>
                    {RenderMenu(width)}
                </>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        height: 32,
        width: '100%',
    },
    menu: {
        flex: 2,
        display: 'flex',
        flexDirection: 'row',
        height: '15vh',
        width: '100%',
        backgroundColor: "#272727",
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 5,
    },
    logo: {
        padding: 12,
    },
    list: {
        flex: 1,
        display: 'flex',
        justifyContent: 'space-around',

    },
    options: {
        paddingRight: 22,
    },
    logoMenu: {
        width: 20,
        height: 20,
        paddingRight: 10
    }
})
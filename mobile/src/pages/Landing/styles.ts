import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 40,
        backgroundColor: '#8657e5'
    },
    banner:{
        width: '100%',
        resizeMode: 'contain'
    },
    title:{
        marginTop: 80,
        fontFamily: 'Poppins_400Regular',
        fontSize: 20,
        lineHeight: 30,
        color: '#fff'
    },
    titleBold:{
        fontFamily: 'Poppins_600SemiBold'
    },
    buttonsContainer:{
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        justifyContent: 'space-between',
        marginTop: 16,
        padding: 24,
        height: 150,
        width: '48%',
        borderRadius: 8
    },
    buttonPrimary:{
        backgroundColor: '#9871f5'
    },
    buttonSecondary: {
        backgroundColor: '#04d361'
    },
    buttonText:{
        fontFamily: 'Archivo_700Bold',
        fontSize: 20,
        color: '#fff'
    },
    totalConnection: {
        marginTop: 40,
        maxWidth: 140,
        fontFamily: 'Poppins_400Regular',
        fontSize: 12,
        lineHeight: 20,
        color: '#d4c2ff'
    }

})

export default styles
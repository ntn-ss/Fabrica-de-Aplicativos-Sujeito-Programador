import {View, Text, Image} from 'react-native'
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer'

const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <View style={{
                width: '100%', height: 77, alignitems: 'center', justifyContent: 'center',
                marginTop: 15
            }}>
                <Image source={'../img/profile.png'} style={{width: 65, height: 65}} />
                <Text style={{color: '#000', fontSize: 17, marginTop: 5, marginBottom: 25}}>Bem-vindo!</Text>
            </View>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
    )
}

export default CustomDrawer
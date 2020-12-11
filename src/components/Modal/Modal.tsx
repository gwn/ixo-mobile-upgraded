import React from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';


interface ModalProps {
    navigation: any;
}
interface ModalItemProps {
    title:string;
    onPress?:any;
}

const ModalItem:React.FC<ModalItemProps> =({title, onPress})=>{
    return (
        <TouchableOpacity style={{marginHorizontal:8,marginTop:5, height:40, width:'92%'
            ,backgroundColor:'#F0F3F9',alignItems:'flex-start',justifyContent:'center', borderRadius:7,}} onPress={onPress}>
            <Text style={{marginLeft:4}}>{title}</Text></TouchableOpacity>)
}

let modalItems = [
    {
        title:'All Time',
    },
    {
        title:'1 year',
    },
    {
        title:'6 months',
    },
    {
        title:'1 month',
    },
    {
        title:'1 week',
    },
    {
        title:'1 day',
    },
]

const Modal: React.FC<ModalProps> = ({ navigation }) => {
    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-end',
            }}>
            <TouchableOpacity onPress={()=>navigation.goBack()} style={{
                height: '60%',
                width: '100%',
                flexDirection: 'column',
                justifyContent: 'flex-end',
            }}/>
            <View
                style={{
                    opacity:0.99,
                    height: '40%',
                    width: '100%',
                    backgroundColor: '#F0F3F9',
                    borderRadius:30,
                    alignItems:'center',
                }}>
                { modalItems.map((item,index)=>
                    <ModalItem title={item.title} key={index} onPress={()=>console.log('modal press')}/>
                )}
            </View>
        </View>
    );
};
export default Modal;

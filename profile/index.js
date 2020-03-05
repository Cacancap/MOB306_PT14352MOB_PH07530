import React, { useState } from 'react';
import { Text, View, Modal, StyleSheet, TextInput, TouchableOpacity, Dimensions} from 'react-native';
import IndexItem from './index-item';

const { width: WIDTH } = Dimensions.get('window')
export default function Main() {
    const users = [
    ]
    const [userInfo, setUserInfo] = useState(users);
    const [showModal, setShowModal] = useState(true);

    //khai bao +ham thay doi gia tri cua modal;
    const [addName, setAddName] = useState('');
    const [addAge, setAddAge] = useState('');

    const setAdd = () => {
        setAddName('');
        setAddAge('');
    }
    //insert
    const addInfo = () => {
        const newAddInfo = {
            name: addName,
            age: addAge
        };
        let newAddInfoList = users;
        newAddInfoList.push(newAddInfo);
        users.info = newAddInfoList;

        setUserInfo(users);
        setShowModal(false);
        setAdd();
        console.log(users);
    }
    function validateFrom() {
        if (addName == '') {
            alert('Bạn chưa nhập tên');
        } else if (addAge == '') {
            alert('Vui long nhap tuoi');
        }
        else if (isNaN(addAge)) {
            alert("Vui long nhap so");
        }
        else if (addAge < 18) {
            alert('Tuoi phai lon hon 18');
        } else {
            addInfo();
            setShowModal(false);
        }
    }

    return (
        <View style={style.mainContainer}>
            <View>
                {userInfo ? <IndexItem data={users} /> : null}
            </View>
          
            <Modal
                visible={showModal}>
                <Text style={style.textTile} >TRUYỆN HAY</Text>

                <Text style={style.textStyle} >NAME:</Text>
                <TextInput
                    placeholder={'Vui lòng nhập tên'}
                    style={style.textContainer}
                    value={addName} onChangeText={(value) => setAddName(value)} />
                <Text style={style.textStyle} >AGE:</Text>
                <TextInput
                    keyboardType='numeric'
                    style={style.textContainer}
                    placeholder={'Vui lòng nhập tuổi 18+'}
                    value={addAge} onChangeText={(value) => setAddAge(value)} />

                {/* <Button title='Reading' style={style.btnButtom} onPress={() => { validateFrom() }} /> */}
                <TouchableOpacity style={style.btnLogin}
                    onPress={() => { validateFrom() }}>
                    <Text style={style.txtLogin}>Login</Text>
                </TouchableOpacity>
            </Modal>
        
        </View>

    );
}

const style = StyleSheet.create({
    mainContainer: {},
    textTile: {
        fontSize: 30,
        color: 'red',
        textAlign: 'center',
        marginTop: 100,
        fontWeight: '700',
        marginVertical: 120
    },
    textStyle: {
        fontWeight: '700',
        fontSize: 16,
        marginLeft: 25
    },
    textContainer: {
        height: 45,
        width: WIDTH - 55,
        paddingLeft: 25,
        borderColor: 'gray',
        borderWidth: 1.5,
        borderRadius: 25,
        margin: 20
    },
    btnLogin: {
        marginHorizontal: 20,
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        backgroundColor: '#1E90FF',
        justifyContent: 'center',
        marginTop: 40
    },
    txtLogin: {
        fontSize: 16,
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 1.0)'
    },
    backgroundContainer: {
        flex: 1,
        backgroundColor: '#fff',
        width: null,
        height: null,
        alignItems: 'center',
        justifyContent: 'center',
    }


})
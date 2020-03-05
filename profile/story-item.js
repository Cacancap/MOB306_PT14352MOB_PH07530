import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, Alert, Image, Modal } from 'react-native';

export default function storyItem({ item, handle_DeleteItem }) {
    const [showModal, setShowModal] = useState(false);
    const alertDelete = (key, handle_DeleteItem) => {
        return Alert.alert(
            'Delete Subject', // tham so dau tien: title
            `Ban co muon xoa ${key} khong?`, // tham so t2: content
            [
                {
                    text: 'Co',
                    onPress: () => { handle_DeleteItem(key) }
                },
                {
                    text: 'Khong',
                    onPress: () => { }
                }
            ],
            { cancleable: false } // cho click ra ben ngoai alert hay khong (true -> disable)
        )
    };

    return (
        <View style={style.row}>
            <View>
                <Image source={{ uri: item.avatar }}
                    style={{ width: 50, height: 50, borderRadius: 50 }} />
            </View>
            <View>
                <Text >{`Name: ${item.name}`} </Text>
                <Text>{`The Loai: ${item.category}`}</Text>
                <Text>{`So Chuong: ${item.total_chapters}`}</Text>
                <Text>{`Status:${item.status}`}</Text>
            </View>
            <View>
                <Modal visible={showModal}>
                    <View>
                        <View>
                            <Text>{item.key}</Text>
                            <Text>{item.name}</Text>
                            <Text>{item.category}</Text>
                            <Text>{item.status}</Text>

                        </View>

                        <Button
                            title='Cancle' onPress={()=>{setShowModal(false)}}
                        />
                    </View>
                </Modal>
            </View>
            <View>
                <Button title='Delete' onPress={() => { alertDelete(item.key, handle_DeleteItem) }} />
                <Button title='Detail' onPress={() => { setShowModal(true) }} />

            </View>
        </View>
    );
}
const style = StyleSheet.create({
    row: {
        flexDirection: 'row',
        padding: 10,
    }
});

import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, Image, Button, Modal } from 'react-native';


import StoryItem from './story-item';

export default function Story() {
    const storys =
    {
        info: [
            {
                key: "01",
                avatar: "https://findicons.com/files/icons/1514/doraemon/256/doraemon.png",
                name: "Doremon",
                category: "Truyen tranh",
                total_chapters: "600",
                status: 'true'
            }, {
                key: "02",
                avatar: "https://upload.wikimedia.org/wikipedia/vi/3/3e/Detective_conan_cover_1.jpg",
                name: "Connan",
                category: "Truyen tranh",
                total_chapters: "900",
                status: 'true'
            },
            {
                key: "03",
                avatar: "https://pbs.twimg.com/media/ClD3FbsVAAALFPZ.jpg",
                name: "Nobita",
                category: "Truyen tranh",
                total_chapters: "700",
                status: 'true'
            },
            {
                key: "04",
                avatar: "https://cdn130.picsart.com/283278893009201.jpg?type=webp&to=min&r=640",
                name: "xuka",
                category: "Truyen tranh",
                total_chapters: "400",
                status: 'true'
            },
            {
                key: "05",
                avatar: "https://i.ytimg.com/vi/JuNOXFXq3u8/mqdefault.jpg",
                name: "gau boonie",
                category: "Truyen tranh",
                total_chapters: "7700",
                status: 'true'
            }    

        ]
    };

    const [listStory, setListStory] = useState(true);

    const [dataStory, setDataStory] = useState(storys);

    const [showModal, setShowModal] = useState(false);

    // console.log(dataStory);

    //Delete---------
    const handle_Delete = (key) => {
        let newStorys = dataStory.info;

        newStorys = newStorys.filter((story) => story.key != key);
        storys.info = newStorys;
        console.log(storys);

        setDataStory(storys)
        setListStory();

    }
    // Delete----------
    return (
        <View style={style.profileContainer}>

            <View>
                <FlatList
                    data={dataStory.info}
                    renderItem={({ item }) => <StoryItem item={item} handle_DeleteItem={handle_Delete} />}
                    keyExtractor={(item, story) => story}
                />
            </View>

            {/* Show Detal */}
            <View>
                <Modal visible={showModal}>

                </Modal>
            </View>

            {/*  */}

        </View>

    );
}
const style = StyleSheet.create({
    profileContainer: {},
    avatar: {},
    image: {
        width: 200,
        height: 200,
        borderRadius: 200
    }
});
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card } from 'react-native-paper';

export default function Home() {
    const data = [
        {id : 1,name:'raaj',position:'web dev'},
        {id : 2,name:'raaj',position:'web dev'},
        {id : 3,name:'raaj',position:'web dev'},
        {id : 4,name:'raaj',position:'web dev'}
    ]
    const renderList = data.map((item)=>{
        return(
            <Card style={styles.myCard} key={item.id}>
            <View style={styles.card2}>
                {/* <Image
                    style={{ height: 50, width: 50, borderRadius: "50%" }}
                    source={{ uri: "https://images.unsplash.com/photo-1569466896818-335b1bedfcce?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" }}
                /> */}
                <View>
                <Text style={{ fontSize: 20,paddingLeft : 15 }}>{item.name}</Text>
                <Text style={{ fontSize: 18,paddingLeft : 15 }}>{item.position}</Text>
                </View>
               
            </View>
        </Card>
        )
    })
    return (
       <View>
           <renderList />
       </View>
    );
}

const styles = StyleSheet.create({
    myCard: {
        backgroundColor: '#fff',
        margin: 10,
        padding: 10,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    card2: {
    flexDirection : 'row',
},
});

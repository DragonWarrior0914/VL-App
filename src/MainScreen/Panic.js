import React from 'react';
import { Image, View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { Button, Text, Footer, Content, Container, FooterTab, Icon, Drawer, List, Switch, ListItem, Left, Right, Thumbnail, Body, Input, Form, Textarea, Item, Picker } from 'native-base';
import styles, { colors } from '../CustomStyle.js';
import { Table, Row, Rows } from 'react-native-table-component';
import Sidebar from './Sidebar';
class PanicScreen extends React.Component {
    static navigationOptions = {
        title: 'Panic',
    };
    constructor(props) {
        super(props);
        this.state = {
            selected2: undefined
        };
    }
    drawerContent = () => {
        return (
            <TouchableOpacity style={{ backgroundColor: 'rgb(55,119,187)', flex: 1 }} onPress={() => this.closeDrawer()} activeOpacity={1} >
                <Sidebar navigation={this.props.navigation}/>
            </TouchableOpacity>

        );
    };

    closeDrawer() {
        this.drawer._root.close()
    };
    openDrawer() {
        this.drawer._root.open()
    };
    render() {
        const { navigate } = this.props.navigation;

        return (
            <Drawer ref={(ref) => { this.drawer = ref; }} content={this.drawerContent()} onClose={() => this.closeDrawer()} >
                <Container>
                    <Content>
                        <View style={{ width: "100%", height: "100%" }}>
                            <Image source={require('../assets/main_background.png')}
                                style={{ width: "100%", height: 750 }} resizeMode={'stretch'}
                            ></Image>
                        </View>
                        <View style={{ position: "absolute", backgroundColor: "rgba(255,255,255,0.5)", width: "90%", height: "70%", marginTop: 150, marginLeft: 20,paddingTop:30 }}>
                            <ListItem icon>
                                <Body>
                                    <Text>HABILITAR PÂNICO</Text>
                                </Body>
                                <Right>
                                    <Switch value={true} />
                                </Right>
                            </ListItem>
                            <View style={{width:"100%",flexDirection:"row",paddingTop:30}}>
                                <View style={{flexDirection:"column",width:"70%",paddingLeft:20}}>
                                    <Text>ENVIAR ÁUDIO</Text>
                                    <Text>Não esquece de ligar o áudio na saída do dispositivo</Text>
                                </View>
                                <View style={{width:"30%",alignItems:"flex-end",paddingTop:20}}>
                                    <Switch value={false} />
                                </View>
                                
                                
                            </View>
                            <View style={{ width: "97%", alignItems: "flex-end", marginTop: 300, marginRight: 20 }}>
                                <Button style={{width: "60%", borderRadius: 10, backgroundColor: "rgb(222,108,39)",alignItems:"center",justifyContent:"center"}}><Text style={{ fontSize: 21 }}>CANCELAR</Text></Button>
                                </View>
                        </View>



                    </Content>
                    <Footer style={{ height: 80 }}>
                        <FooterTab style={{backgroundColor:'rgb(55,119,187)'}}>
                            <Button vertical>
                                <Image source={require('../assets/roteador_btn.png')}
                                    style={{ width: 50, height: 50 }}
                                ></Image>
                                <Text style={{ fontSize: 12 }}>Roteader</Text>
                            </Button>
                            <Button vertical>
                                <Image source={require('../assets/3g-btn.png')}
                                    style={{ width: 50, height: 50 }}
                                ></Image>
                                <Text style={{ fontSize: 12 }}>3G/4G</Text>
                            </Button>
                            <Button vertical>
                                <Image source={require('../assets/satelite_btn.png')}
                                    style={{ width: 50, height: 50 }}
                                ></Image>
                                <Text style={{ fontSize: 12 }}>Satelite</Text>
                            </Button>
                            <Button vertical onPress={() => this.openDrawer()}>
                                <Image source={require('../assets/menu_btn.png')}
                                    style={{ width: 50, height: 50 }}
                                ></Image>
                                <Text style={{ fontSize: 12 }}>Menu</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
                </Container>
            </Drawer >



        );
    }

}

export default PanicScreen;
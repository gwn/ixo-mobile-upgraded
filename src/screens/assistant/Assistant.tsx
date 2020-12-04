import React, { useRef, useState } from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import styles from './Assistant.styles';
import AssistantNavigator from '../../components/asssitantNavigator/AssistantNavigator';
import * as Images from '../../../assets/images';
import LinearGradient from 'react-native-linear-gradient';
import RasaAPI from '../api/restApi/RasaAPI';
import CosmosPipe from '../api/cosmosPipe/CosmosPipe';
import ValidationPipe from '../api/cosmosPipe/ValidationPipe';
import LottieView from "lottie-react-native";

interface Button {
  title: string;
  type: string;
  payload?:string;
}


interface AssistantChatMessage {
  message: string;
  fromAssistant: boolean;
  buttons?:Button[];
}

interface AssistantPageProps {
  onPress?: () => void;
  navigation: any;
}




let messagesChat: AssistantChatMessage[] = [
  {
    message: 'Welcome to the mobile assistant',
    fromAssistant: true,
  },
];

interface TransactionAnimationProps {
  style: any;
}

class TransactionAnimationProps {
}

const BotThinkingAnimation: React.FC<TransactionAnimationProps> = ({
                                                                     style,}) => {
  return (
      <LottieView
          source={require('../../../assets/lottieAnimations/10357-chat-typing-indicator.json')}
          autoPlay
          loop
          speed={1}
          style={style}
      />
  );
};







//TODO store chats in redux


const Assistant: React.FC<AssistantPageProps> = ({ navigation }) => {


  const validationAPi =new ValidationPipe();
  const cosmosAPi =new CosmosPipe();
  const rasaAPI = new RasaAPI();
  const [inputValue, setInputValue] = useState('');
  const myMessageInput = useRef(null);
  const [transactionHash,setTransactionHash] =useState( '')
  const scrollViewRef = useRef();
  const [counter, setCounter]=useState(0);
  const [botThinking,setBotThinking]= useState(false)

  const sendTestTransaction = async () =>{
    let response = await cosmosAPi.sendMessage();
    console.log("HASH",response.txhash)
    setTransactionHash(response.txhash)
  }


  // TODO use flatlist  instead map

  const validateTestTransaction = async () =>{
    const  transaction = await validationAPi.getTransaction(transactionHash)
    setInputValue(`Transaction value ixo ${transaction.events[1].attributes[1].value.toString()} ,Transaction sender ${transaction.events[0].attributes[1].value.toString()},Transaction recipient ${transaction.events[1].attributes[0].value.toString()}`)
    console.log( "Transaction value ixo",transaction.events[1].attributes[1].value,"Transaction sender",transaction.events[0].attributes[1].value,"Transaction recipient",transaction.events[1].attributes[0].value);
    transaction.events !== undefined  ?
        messagesChat.push({
          message: `Transaction value ixo ${transaction.events[1].attributes[1].value.toString()} ,Transaction sender ${transaction.events[0].attributes[1].value.toString()},Transaction recipient ${transaction.events[1].attributes[0].value.toString()}`,
          fromAssistant: true,
        }) :
        messagesChat.push({
          message: "Try to validate later please",
          fromAssistant: true,
        })
  }

  return (
      <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={{flex:1}}
      >
        <SafeAreaView style={styles.container}>

          <View style={styles.mainContainer}>
            <StatusBar
                barStyle="light-content"
                backgroundColor="#002334"
                translucent={Platform.OS === 'android'}
            />
            <AssistantNavigator
                onPress={() => navigation.goBack()}
                crossImage={Images.Vector}
                onCrossPress={() => navigation.goBack()}
            />
            <ScrollView
                ref={scrollViewRef}
                contentContainerStyle={{
                  flexGrow: 1,
                  justifyContent: 'space-between',
                  flexDirection: 'column',
                }}
                onContentSizeChange={() =>
                    // @ts-ignore
                    scrollViewRef.current.scrollToEnd({ animated: true })
                }>
              <TouchableOpacity
                  onPress={()=>sendTestTransaction()}
                  style={styles.assistantButton}>
                <Text style={styles.assistantButtonText}>Send Test Transaction</Text>
              </TouchableOpacity>
              <TouchableOpacity
                  onPress={()=>validateTestTransaction()}
                  style={styles.assistantButton}>
                <Text style={styles.assistantButtonText}>Validate Transaction</Text>
              </TouchableOpacity>
              <View style={styles.viewContainer}>
                {messagesChat.map(({ message, fromAssistant ,buttons}, index) => (
                    <View style={styles.shadowView} key={index}>
                      <LinearGradient
                          start={{ x: 0.0, y: 0.0 }}
                          end={{ x: 0.0, y: 1.0 }}
                          locations={[0.2, 1.0]}
                          colors={
                            fromAssistant
                                ? ['#F8FAFD70', '#fffffff5']
                                : ['#10597Bf5', '#1B6E90f5']
                          } //<-- last 2 chars from color control the opacity
                          style={
                            fromAssistant
                                ? styles.assistantMessageBubble
                                : styles.clientMessageBubble
                          }>
                        <Text
                            style={
                              fromAssistant ? styles.assistantText : styles.messageText
                            }>
                          {message}
                        </Text>
                      </LinearGradient>
                      <View style={styles.buttonsContainer}>
                        {buttons ? buttons.map(({ title, type ,payload}, index) =>
                            <TouchableOpacity key={index}
                                              onPress={async () => {
                                                console.log("RASA payload", payload);
                                                let resp = await rasaAPI.sendMessage(payload);
                                                console.log(" resp from rasa", resp);
                                                setBotThinking(false)
                                                resp.map(({text, buttons})=>
                                                    messagesChat.push({
                                                      message:text,
                                                      fromAssistant: true,
                                                      buttons:buttons,
                                                    }) )
                                              }}
                                              style={styles.assistantButton}>
                              <Text style={styles.assistantButtonText}>{title}</Text>
                            </TouchableOpacity>
                        ) :<></>}
                      </View>
                    </View>
                ))}
                {botThinking? ( <LinearGradient
                    start={{ x: 0.0, y: 0.0 }}
                    end={{ x: 0.0, y: 1.0 }}
                    locations={[0.2, 1.0]}
                    colors={

                      ['#F8FAFD70', '#fffffff5']
                    } //<-- last 2 chars from color control the opacity
                    style={
                      styles.assistantMessageBubble

                    }>
                  <BotThinkingAnimation style={{height:40, width:50}}/>
                </LinearGradient>):(<></>)}
              </View>
            </ScrollView>
            <View style={styles.footer}>
              <TouchableOpacity
                  style={styles.footerButton}
                  onPress={() => navigation.navigate('ScanQR')}>
                <Image source={Images.Options} style={styles.imageLeft} />
              </TouchableOpacity>
              <View style={styles.inputContainer}>
                <TextInput
                    ref={myMessageInput}
                    placeholder="  Type a message..."
                    placeholderTextColor={'grey'}
                    onChangeText={(input) => setInputValue(input)}
                    style={styles.input}
                />
                {inputValue.length > 0 ? (
                    <TouchableOpacity
                        onPress={async () => {
                          messagesChat.push({
                            message: inputValue,
                            fromAssistant: false,
                          });
                          myMessageInput.current.clear();
                          setBotThinking(true);
                          let resp = await rasaAPI.sendMessage(inputValue);
                          setBotThinking(false)
                          setInputValue('')
                          console.log(" resp from rasa", resp);

                          resp.map(({text, buttons})=>
                              messagesChat.push({
                                message:text,
                                fromAssistant: true,
                                buttons:buttons,
                              }) )
                          setCounter(counter+1);
                        }}
                        style={styles.messageButton}>
                      <ImageBackground source={Images.SendMsg} style={styles.sendMsg}>
                        <Image source={Images.ArrowUp} style={styles.arrow} />
                      </ImageBackground>
                    </TouchableOpacity>
                ) : (
                    <></>
                )}
              </View>
            </View>
          </View>

        </SafeAreaView>
      </KeyboardAvoidingView>
  );
};

export default Assistant;

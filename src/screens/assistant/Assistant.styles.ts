import { StyleSheet } from 'react-native';
import { Fonts } from '../../rescources/Fonts';

const styles = StyleSheet.create({

    avoidingContainer:{flex:1},
  container: {
    paddingTop: 65,
    flex: 1,
    backgroundColor: '#002334',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#F0F3F9',
  },
  scrollViewContainer: {
    flex: 1,
    backgroundColor: '#F0F3F9',
  },
  viewContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#F0F3F9',
    paddingHorizontal: '7%',
  },
  assistantMessageBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#F8FAFD',
    borderRadius: 14,
    borderTopLeftRadius: 0,
    marginVertical: 14,
  },
  clientMessageBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#10597B',
    borderRadius: 14,
    borderTopRightRadius: 0,
    marginVertical: 14,
  },
  shadowView: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  assistantText: {
    fontFamily: Fonts.RobotoRegular,
    fontWeight: 'normal',
    fontSize: 16,
    color: '#090C0E',
    paddingRight: '3%',
    paddingLeft: '8%',
    paddingVertical: '4%',
    maxWidth: '80%',
  },
  messageText: {
    fontFamily: Fonts.RobotoRegular,
    fontWeight: 'normal',
    fontSize: 16,
    color: 'white',
    paddingRight: '3%',
    paddingLeft: '8%',
    paddingVertical: '4%',
    maxWidth: '80%',
  },
  buttonsContainer:{
  flexDirection:'row',
    width:'95%',
  },
  assistantButton:{
  padding:8,
    margin:10,
 borderRadius:16,
    borderWidth:1,
    borderColor: '#125C7E',
    height:40,
    minWidth:90,
      maxWidth:"50%",
  },
  assistantButtonText:{
    alignSelf:"center",
    fontFamily:Fonts.RobotoRegular,
    fontSize:16,
   color:'#125C7E',
  },
  footer: {
    alignSelf: 'stretch',
    backgroundColor: 'white',
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  footerButton: {
    height: 20,
    width: 20,
  },
  imageLeft: {
    height: 20,
    width: 20,
  },
  inputContainer: {
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    borderRadius: 40,
    height: 35,
    minWidth: 120,
    maxWidth: 320,
    borderWidth: 1,
    borderColor: '#E8EBED',
  },
  placeholder: {
    fontFamily: Fonts.RobotoRegular,
    fontWeight: 'normal',
    fontSize: 16,
    color: '#A5ADB0',
    marginLeft: 10,
  },
  messageButton: {
    width: 25,
    height: 25,
    position: 'absolute',
    alignSelf: 'center',
    marginLeft: '90%',
  },
  sendMsg: {
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow: {
    alignSelf: 'center',
  },
});

export default styles;

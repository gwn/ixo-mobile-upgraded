import React from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { ViewProps, ViewStyle } from 'react-native';

interface ChatInputProps extends ViewProps {
  style?: ViewStyle;
  placeholder?: string;
  placeholderTextColor?: string;
  placeholderStyles?: any;
  numberOfLines?: number;
  onChangeText?: (text: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({
  style,
  placeholderStyles,
  placeholder,
  onChangeText,
  ...other
}) => (
  <TextInput
    {...other}
    style={placeholder ? [style, placeholderStyles] : style}
    onChangeText={onChangeText}
  />
);

export default ChatInput;

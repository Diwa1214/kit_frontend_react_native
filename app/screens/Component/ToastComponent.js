import React from 'react'
import { StyleSheet} from 'react-native'
import Toast, { BaseToast } from 'react-native-toast-message';

const ToastComponent = ({text1,text2}) => {
    const toastConfig = {
        success: ({ text1,text2, ...rest }) => (
          <BaseToast
            {...rest}
            style={{ borderLeftColor: 'red'}}
            contentContainerStyle={{ paddingHorizontal: 15 }}
            text1Style={{
              fontSize: 17,
              fontWeight: 'bold'
            }}
            text2Style={{
              fontSize: 14,
              fontWeight: 'bold',
             color:"red" 
            }}
            text1={text1}
            text2={text2}
          />
        )
      };
    return (
        <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
    )
}

export default ToastComponent

const styles = StyleSheet.create({})

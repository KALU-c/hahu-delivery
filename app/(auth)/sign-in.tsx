import { View, Text, ScrollView, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import icons from '@/constants/icons'
import CustomInput from '@/components/CustomInput'
import { useState } from 'react'

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  return (
    <SafeAreaView>
      <ScrollView className='relative bg-dark h-full'>

        <Image source={icons.darkEllipse} width={200} height={200} className='absolute' />
        <Image source={icons.dottedLine} className='absolute right-0' />

        <View className='h-[27vh] items-center justify-end py-10'>
          <Text className='text-primary font-SenBold text-[30px]'>Log In</Text>
          <Text className='text-primary font-SenRegular text-[16px]'>Please sign in to your existing account</Text>
        </View>

        <View className='h-[73vh] bg-primary rounded-t-2xl py-10 px-6'>
          <CustomInput
            title='EMAIL'
            value={form.email}
            handleTextChange={text => setForm({ ...form, email: text })}
          />
          <CustomInput
            title='PASSWORD'
            value={form.password}
            handleTextChange={text => setForm({ ...form, password: text })}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
export default SignIn
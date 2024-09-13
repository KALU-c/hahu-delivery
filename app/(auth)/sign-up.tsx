import { useState } from 'react';
import { View, Text, ScrollView, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import icons from '@/constants/icons';
import CustomInput from '@/components/CustomInput';
import CustomButton from '@/components/CustomButton';
import { Link } from 'expo-router';

const SignUp = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const submitForm = () => {
    console.log(form);
  };

  return (
    <SafeAreaView>
      <ScrollView className='relative bg-dark h-full'>

        <Image source={icons.darkEllipse} width={200} height={200} className='absolute' />
        <Image source={icons.dottedLine} className='absolute right-0' />

        <View className='h-[27vh] items-center justify-end py-10'>
          <Text className='text-primary font-SenBold text-[30px]'>Sign Up</Text>
          <Text className='text-primary font-SenRegular text-[16px]'>Please sign up to create new account</Text>
        </View>

        <View className='h-[73vh] bg-primary rounded-t-2xl py-10 px-6'>
          <View>
            <CustomInput
              title='NAME'
              value={form.name}
              handleTextChange={text => setForm({ ...form, name: text })}
            />
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

          <CustomButton title='SIGN UP' otherStyle='mt-4' handlePress={submitForm} isSubmitting={isSubmitting} />

          <Text className='text-center mt-2 text-base font-SenMedium'>Have an account already? <Link href="/sign-in" className='text-secondary font-SenSemibold'>Sign In</Link></Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}
export default SignUp
import { View, Text, ScrollView, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import icons from '@/constants/icons'
import CustomInput from '@/components/CustomInput'
import { useState } from 'react'
import CustomButton from '@/components/CustomButton'
import Checkbox from 'expo-checkbox'
import { Link, router } from 'expo-router'
import { signIn } from '@/lib/firebase'

const SignIn = () => {
  const [isChecked, setChecked] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
    rememberMe: false,

  });

  const submitForm = async () => {
    router.replace("/home");
    setSubmitting(true);
    try {
      await signIn(form.email, form.password);

      // set it to global state

      router.replace("/home")
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

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
          <View>
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
          <View className='flex flex-row justify-between items-center'>
            <View className='flex flex-row gap-2 items-center'>
              <Checkbox
                className='rounded-md'
                value={form.rememberMe}
                onValueChange={value => setForm({ ...form, rememberMe: value })}
                color={isChecked ? '#FF7622' : undefined}
              />
              <Text className='text-base text-gray-200'>Remember me</Text>
            </View>
            <Text className='text-base text-secondary'>Forgot Password</Text>
          </View>
          <CustomButton title='LOG IN' otherStyle='mt-14' handlePress={submitForm} isSubmitting={isSubmitting} />
          <Text className='text-center mt-2 text-base font-SenMedium'>Don't have an account? <Link href="/sign-up" className='text-secondary font-SenSemibold'>Sign Up</Link></Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}
export default SignIn
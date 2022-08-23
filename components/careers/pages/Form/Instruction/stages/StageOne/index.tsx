import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useFormDetails } from '../../../../../../../store'
import Left from './Left'
import Right from './Right'

const StageOne = () => {
  const form = useFormDetails()

  const [phoneCode, setPhoneCode] = useState('')
  const [phone, setPhone] = useState('')

  const [backupPhoneCode, setBackupPhoneCode] = useState('')
  const [backupPhone, setBackupPhone] = useState('')

  useEffect(() => {
    form.setValue('phone', `${phoneCode}${phone}`)
  }, [phoneCode, phone]) //eslint-disable-line

  useEffect(() => {
    form.setValue('backupPhone', `${backupPhoneCode}${backupPhone}`)
  }, [backupPhone, backupPhoneCode]) //eslint-disable-line

  const phoneError = !!phone && (phone.length > 20 || phone.length < 8)
  const phoneCodeError = !!phoneCode && phoneCode.length > 4

  const backupPhoneError =
    !!backupPhone && (backupPhone.length > 20 || backupPhone.length < 8)
  const backupPhoneCodeError = !!backupPhoneCode && backupPhoneCode.length > 4

  const fullNameError = form.fullName.length < 3 || form.fullName.length > 30

  const emailError =
    !!form.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email)

  const errorExists =
    phoneError ||
    phoneCodeError ||
    backupPhoneError ||
    backupPhoneCodeError ||
    fullNameError ||
    emailError ||
    !form.backupPhone ||
    !form.dateOfBirth ||
    !form.email ||
    !form.facebook ||
    !form.fullName ||
    !form.gender ||
    !form.phone
  return (
    <motion.div
      initial={{ x: '50%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-50%', opacity: 0 }}
    >
      <div className="flex min-h-screen">
        <Left errorExists={errorExists} />
        <Right
          setPhoneCode={setPhoneCode}
          setPhone={setPhone}
          setBackupPhoneCode={setBackupPhoneCode}
          setBackupPhone={setBackupPhone}
          phoneCode={phoneCode}
          phone={phone}
          backupPhoneCode={backupPhoneCode}
          backupPhone={backupPhone}
          phoneError={phoneError}
          phoneCodeError={phoneCodeError}
          backupPhoneError={backupPhoneError}
          backupPhoneCodeError={backupPhoneCodeError}
          fullNameError={fullNameError}
          emailError={emailError}
        />
      </div>
    </motion.div>
  )
}

export default StageOne

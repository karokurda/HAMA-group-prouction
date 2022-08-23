import { FC } from 'react'
import { useFormDetails } from '../../../../../../../store'
import Input from '../../../../../../Input'
import Container from '../../../../../../layout/Container'

const Right: FC<{
  setPhoneCode: (phoneCode: string) => void
  setPhone: (phone: string) => void

  setBackupPhoneCode: (backupPhoneCode: string) => void
  setBackupPhone: (backupPhone: string) => void

  phoneCode: string
  phone: string

  backupPhoneCode: string
  backupPhone: string

  fullNameError: boolean
  emailError: boolean

  phoneError: boolean
  phoneCodeError: boolean

  backupPhoneError: boolean
  backupPhoneCodeError: boolean
}> = ({
  fullNameError,
  phoneCodeError,
  phoneCode,
  setPhoneCode,
  phoneError,
  phone,
  setPhone,
  backupPhoneCodeError,
  backupPhoneCode,
  setBackupPhoneCode,
  backupPhoneError,
  backupPhone,
  setBackupPhone,
  emailError,
}) => {
  const form = useFormDetails()

  return (
    <Container className="w-1/2 flex flex-col gap-5">
      <div className="text-xl flex flex-col">
        <label htmlFor="fullName">Full Name *</label>

        <Input
          placeholder="Enter your full name"
          error={!!form.fullName && fullNameError}
          success={!fullNameError}
          required
          value={form.fullName}
          onChange={(e) => form.setValue('fullName', e.target.value)}
        />
      </div>

      <div className="text-xl flex flex-col">
        <label htmlFor="phone">Phone *</label>

        <div className="flex w-full gap-5">
          <Input
            placeholder="+964"
            error={phoneCodeError}
            success={!!phoneCode && !phoneCodeError}
            required
            value={phoneCode}
            onChange={(e) => setPhoneCode(e.target.value)}
            className="w-2/12"
            type={'number'}
          />
          <Input
            placeholder="7705555555"
            error={phoneError}
            success={!!phone && !phoneError}
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-10/12"
          />
        </div>
      </div>

      <div className="text-xl flex flex-col">
        <label htmlFor="backup phone">Backup Phone *</label>

        <div className="flex w-full gap-5">
          <Input
            placeholder="+964"
            error={backupPhoneCodeError}
            success={!!backupPhoneCode && !backupPhoneCodeError}
            required
            value={backupPhoneCode}
            onChange={(e) => setBackupPhoneCode(e.target.value)}
            className="w-2/12"
            type={'number'}
          />
          <Input
            placeholder="7705555555"
            error={backupPhoneError}
            success={!!backupPhone && !backupPhoneError}
            required
            value={backupPhone}
            onChange={(e) => setBackupPhone(e.target.value)}
            className="w-10/12"
          />
        </div>
      </div>

      <div className="flex gap-5">
        <div className="w-1/2">
          <label htmlFor="facebookProfile">Facebook Profile *</label>

          <Input
            placeholder="@hamaadvertising"
            error={false}
            success={!!form.facebook}
            required
            value={form.facebook || ''}
            onChange={(e) => form.setValue('facebook', e.target.value)}
          />
        </div>

        <div className="w-1/2">
          <label htmlFor="email">Email *</label>

          <Input
            placeholder="example@website.com"
            error={emailError}
            success={!!form.email && !emailError}
            required
            value={form.email}
            onChange={(e) => form.setValue('email', e.target.value)}
            type="email"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="dateOfBirth">Date of Birth *</label>
        {/* date input */}

        <Input
          placeholder="example@website.com"
          error={false}
          success={!!form.dateOfBirth}
          required
          value={form.dateOfBirth}
          onChange={(e) => form.setValue('dateOfBirth', e.target.value)}
          type="date"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="dateOfBirth">Gender *</label>
        {/* date input */}

        <div className="flex gap-2">
          <div>
            <label htmlFor="male">Male</label>
            <input
              onClick={(e) => {
                form.setValue('gender', 'male')
              }}
              checked={form.gender === 'male'}
              className="border p-4"
              type={'checkbox'}
            />
          </div>
          <div>
            <label htmlFor="female">Female</label>
            <input
              onClick={(e) => {
                form.setValue('gender', 'female')
              }}
              checked={form.gender === 'female'}
              className="border p-4"
              type={'checkbox'}
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Right

import create from 'zustand'

interface IFormState {
  stage: number

  setStage: (stage: number) => void
  next: () => void
  restart: () => void
}

export const useFormState = create<IFormState>((set, getState) => ({
  stage: 0,
  setStage: (stage: number) => set({ stage }),
  next: () => {
    const state = getState()
    if (state.stage < 7) {
      set({ stage: state.stage + 1 })
    } else {
      set({ stage: 0 })
    }
  },
  restart: () => set({ stage: 0 }),
}))

export interface FormDetails {
  fullName: string
  phone: string
  backupPhone?: string
  facebook?: string
  email: string
  dateOfBirth: string
  gender: 'male' | 'female'

  country: string
  city: string

  setValue: (key: keyof Omit<FormDetails, 'setValue'>, value: string) => void
}

export const useFormDetails = create<FormDetails>((set, getState) => ({
  dateOfBirth: '',
  email: '',
  fullName: '',
  gender: 'female',
  phone: '',
  backupPhone: '',
  facebook: '',

  country: '',
  city: '',

  setValue: (key, value) => set({ [key]: value }),
}))

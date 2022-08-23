import { Select } from '@mantine/core'
import Container from '../../../../../../layout/Container'

const Right = () => {
  return (
    <Container className="w-1/2">
      <Select
        label="Country"
        placeholder="Pick one"
        defaultValue={null}
        data={[
          { value: 'react', label: 'React' },
          { value: 'angular', label: 'Angular' },
          { value: 'svelte', label: 'Svelte' },
          { value: 'vue', label: 'Vue' },
        ]}
        onChange={(e) => {
          console.log(e)
        }}
      />
      <Select
        label="City"
        placeholder="Pick one"
        defaultValue={null}
        data={[
          { value: 'react', label: 'React' },
          { value: 'angular', label: 'Angular' },
          { value: 'svelte', label: 'Svelte' },
          { value: 'vue', label: 'Vue' },
        ]}
        onChange={(e) => {
          console.log(e)
        }}
      />
    </Container>
  )
}

export default Right

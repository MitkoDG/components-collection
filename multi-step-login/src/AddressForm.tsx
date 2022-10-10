import { FormWraper } from './FormWraper'

export function AddressForm() {
  return (
    <FormWraper title="Addres Information">
      <label>Street</label>
      <input autoFocus required type="text" />
      <label>City</label>
      <input required type="text" />
      <label>State</label>
      <input required type="text" />
      <label>Zip</label>
      <input required type="text" />
    </FormWraper>
  )
}

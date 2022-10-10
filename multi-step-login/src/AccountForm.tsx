import { FormWraper } from "./FormWraper";

export function AccountForm() {
  return (
    <FormWraper title="Account Creation">
      <label>Email</label>
      <input autoFocus required type="email" />
      <label>Password</label>
      <input required type="password" />
    </FormWraper>
  )
}

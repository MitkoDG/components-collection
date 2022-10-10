import { FormWraper } from "./FormWraper"

export function UserForm() {
    return (
        <FormWraper title="User Details">
        <label>First Name</label>
        <input autoFocus required type="text" />
        <label>Last Name</label>
        <input type="text" required />
        <label>Age</label>
        <input type="number" required min={1}/>
        </FormWraper>
    )
}
import "./inputBox.scss";
export const InputBox=()=>{
    return(
        <div className="input-group mb-1">
            <label className="input-group__label" for="email"><span className="label__content">
              Email
            </span></label>
            <input className="input-group__input p-0-75" required />
            
          </div>
    )
}
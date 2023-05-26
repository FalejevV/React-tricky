import { PEInputFieldContainer, PEInputFieldInput } from "./PageEditorInputField.styled";



function PageEditorInputField(props:{
    title:string,
    setTitle:Function,
    placeholder:string,
}){
    return(
        <PEInputFieldContainer>
            <PEInputFieldInput value={props.title} onChange={(e) => props.setTitle(e.target.value)} type="text" placeholder={props.placeholder} />
        </PEInputFieldContainer>
    )
}

export default PageEditorInputField;
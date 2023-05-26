import { PEInputFieldContainer, PEInputFieldInput } from "./PageEditorInputField.styled";



function PageEditorInputField(props:{
    title:string,
    setTitle:Function,
    placeholder:string,
}){
    return(
        <PEInputFieldContainer>
            <PEInputFieldInput type="text" placeholder={props.placeholder} />
        </PEInputFieldContainer>
    )
}

export default PageEditorInputField;
import { PageEditorTitle } from "@/styles/page-editor.styled";
import { PEMainContainer } from "./PageEditorMainContent.styled";
import PageEditorInputField from "@/components/PageEditor/PageEditorInputField/PageEditorInputField";
import { useState } from "react";
import PageEditorContent from "@/components/PageEditor/PageEditorContent/PageEditorContent";



function PageEditorMainContent(){
    
    const [title,setTitle] = useState("");
    return(
        <PEMainContainer>
            <PageEditorTitle>New Post</PageEditorTitle>
            <PageEditorInputField title={title} setTitle={setTitle} placeholder={"Enter title here"} />
            <PageEditorContent />
        </PEMainContainer>
    )
}


export default PageEditorMainContent;
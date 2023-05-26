import PageEditorInputField from "@/components/PageEditor/PageEditorInputField/PageEditorInputField";
import PageEditorMainContent from "@/layout/PageEditorMainContent/PageEditorMainContent";
import { PageEditorContainer, PageEditorTitle } from "@/styles/page-editor.styled";
import { useState } from "react";



function PageEditor(){

    return(
        <PageEditorContainer>
            <PageEditorMainContent />
        </PageEditorContainer>
    )
}

export default PageEditor;
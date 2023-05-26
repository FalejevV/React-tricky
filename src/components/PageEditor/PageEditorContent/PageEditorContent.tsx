import PageEditorToolBar from "@/layout/PageEditorToolBar/PageEditorToolBar";
import { PEContentContainer } from "./PageEditorContent.styled";



function PageEditorContent(){
    return(
        <PEContentContainer>
            <PageEditorToolBar />
        </PEContentContainer>
    )
}

export default PageEditorContent;
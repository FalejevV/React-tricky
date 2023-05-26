import PageEditorTool from "@/components/PageEditor/PageEditorTool/PageEditorTool";
import { PEToolBarContainer } from "./PageEditorToolBar.styled";



function PageEditorToolBar(){
    return(
        <PEToolBarContainer>
            <PageEditorTool icon={"/page-editor/bold.svg"} action={() => alert("BOLD DUH")} title={"Bold text"} />
            <PageEditorTool icon={"/page-editor/italic.svg"} action={() => alert("Italic DUH")} title={"Italic text"} />
            <PageEditorTool icon={"/page-editor/list-check.svg"} action={() => alert("List DUH")} title={"List"} />
            <PageEditorTool icon={"/page-editor/list-ordered.svg"} action={() => alert("Ordered list DUH")} title={"Ordered list"} />
        </PEToolBarContainer>
    )
}


export default PageEditorToolBar;
import PageEditorTool from "@/components/PageEditor/PageEditorTool/PageEditorTool";
import { PEToolBarContainer } from "./PageEditorToolBar.styled";



function PageEditorToolBar(){
    return(
        <PEToolBarContainer>
            <PageEditorTool icon={"/page-editor/bold.svg"} action={() => alert("BOLD DUH")} title={"Bold text"} />
            <PageEditorTool icon={"/page-editor/italic.svg"} action={() => alert("Italic DUH")} title={"Italic text"} />
            <PageEditorTool icon={"/page-editor/abc.svg"} action={() => alert("Crossed DUH")} title={"Crossed text"} />
            <PageEditorTool icon={"/page-editor/list-check.svg"} action={() => alert("List DUH")} title={"List"} />
            <PageEditorTool icon={"/page-editor/list-ordered.svg"} action={() => alert("Ordered List DUH")} title={"Ordered list"} />
            <PageEditorTool icon={"/page-editor/double-quotes-l.svg"} action={() => alert("Quotes DUH")} title={"Quotes"} />
            <PageEditorTool icon={"/page-editor/link-m.svg"} action={() => alert("Link DUH")} title={"Link"} />
            <PageEditorTool icon={"/page-editor/image-line.svg"} action={() => alert("Image DUH")} title={"Image"} />
            <PageEditorTool icon={"/page-editor/file-2-line.svg"} action={() => alert("File DUH")} title={"File"} />
        </PEToolBarContainer>
    )
}


export default PageEditorToolBar;
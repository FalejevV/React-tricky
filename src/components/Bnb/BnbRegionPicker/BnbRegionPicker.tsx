import { BnbRegionItem, BnbRegionItemImage, BnbRegionItemText, BnbRegionPickerContainer, BnbRegionPickerGrid, BnbRegionPickerTitle } from "./BnbRegionPicker.styled";

function BnbRegionPicker(props:{
    regionPicked:string,
    setRegionPicked:Function,
    setStayPick:Function,
}){

    function selectRegion(region:string){
        if(props.regionPicked !== region){
            props.setRegionPicked(region);
            props.setStayPick(2);
        }
    }
    return(
        <BnbRegionPickerContainer>
            <BnbRegionPickerTitle>Search by region</BnbRegionPickerTitle>
            <BnbRegionPickerGrid>
                <BnbRegionItem onClick={() => selectRegion("I'm flexible")}>
                    <BnbRegionItemImage picked={props.regionPicked === "I'm flexible"} src={"/airbnb/regions/All.jpg"} />
                    <BnbRegionItemText>I&#39;m flexible</BnbRegionItemText>
                </BnbRegionItem>

                <BnbRegionItem onClick={() => selectRegion("Southest Asia")}>
                    <BnbRegionItemImage picked={props.regionPicked === "Southest Asia"} src={"/airbnb/regions/Southest Asia.jpg"} />
                    <BnbRegionItemText>Southest Asia</BnbRegionItemText>
                </BnbRegionItem>

                <BnbRegionItem onClick={() => selectRegion("Spain")}>
                    <BnbRegionItemImage picked={props.regionPicked === "Spain"} src={"/airbnb/regions/Spain.jpg"} />
                    <BnbRegionItemText>Spain</BnbRegionItemText>
                </BnbRegionItem>

                <BnbRegionItem onClick={() => selectRegion("Middle East")}>
                    <BnbRegionItemImage picked={props.regionPicked === "Middle East"} src={"/airbnb/regions/Middle East.jpg"} />
                    <BnbRegionItemText>Middle East</BnbRegionItemText>
                </BnbRegionItem>

                <BnbRegionItem onClick={() => selectRegion("Italy")}>
                    <BnbRegionItemImage picked={props.regionPicked === "Italy"} src={"/airbnb/regions/Italy.jpg"} />
                    <BnbRegionItemText>Italy</BnbRegionItemText>
                </BnbRegionItem>

                <BnbRegionItem onClick={() => selectRegion("United States")}>
                    <BnbRegionItemImage picked={props.regionPicked === "United States"} src={"/airbnb/regions/United States.jpg"} />
                    <BnbRegionItemText>United States</BnbRegionItemText>
                </BnbRegionItem>
            </BnbRegionPickerGrid>
        </BnbRegionPickerContainer>
    )
}

export default BnbRegionPicker;
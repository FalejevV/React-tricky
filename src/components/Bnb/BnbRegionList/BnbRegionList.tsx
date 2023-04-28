import { BnbRegionItem, BnbRegionItemImage, BnbRegionItemText } from "./BnbRegionList.styled";


function BnbRegionList(props:{
    selectRegion:Function,
    regionPicked:string,
}){
    return(
        <>
                <BnbRegionItem onClick={() => props.selectRegion("I'm flexible")}>
                    <BnbRegionItemImage picked={props.regionPicked === "I'm flexible"} src={"/airbnb/regions/All.jpg"} />
                    <BnbRegionItemText>I&#39;m flexible</BnbRegionItemText>
                </BnbRegionItem>

                <BnbRegionItem onClick={() => props.selectRegion("Southest Asia")}>
                    <BnbRegionItemImage picked={props.regionPicked === "Southest Asia"} src={"/airbnb/regions/Southest Asia.jpg"} />
                    <BnbRegionItemText>Southest Asia</BnbRegionItemText>
                </BnbRegionItem>

                <BnbRegionItem onClick={() => props.selectRegion("Spain")}>
                    <BnbRegionItemImage picked={props.regionPicked === "Spain"} src={"/airbnb/regions/Spain.jpg"} />
                    <BnbRegionItemText>Spain</BnbRegionItemText>
                </BnbRegionItem>

                <BnbRegionItem onClick={() => props.selectRegion("Middle East")}>
                    <BnbRegionItemImage picked={props.regionPicked === "Middle East"} src={"/airbnb/regions/Middle East.jpg"} />
                    <BnbRegionItemText>Middle East</BnbRegionItemText>
                </BnbRegionItem>

                <BnbRegionItem onClick={() => props.selectRegion("Italy")}>
                    <BnbRegionItemImage picked={props.regionPicked === "Italy"} src={"/airbnb/regions/Italy.jpg"} />
                    <BnbRegionItemText>Italy</BnbRegionItemText>
                </BnbRegionItem>

                <BnbRegionItem onClick={() => props.selectRegion("United States")}>
                    <BnbRegionItemImage picked={props.regionPicked === "United States"} src={"/airbnb/regions/United States.jpg"} />
                    <BnbRegionItemText>United States</BnbRegionItemText>
                </BnbRegionItem>
        </>
    )
}

export default BnbRegionList;